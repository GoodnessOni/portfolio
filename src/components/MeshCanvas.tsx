"use client";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { useEffect, useMemo, useRef, useState } from "react";
import * as THREE from "three";
import { MESH_H, MESH_W, type Edge, type Node } from "@/lib/mesh";

type Props = { nodes: Node[]; edges: Edge[]; onReady: () => void; visible: boolean };

const CX = 1020; // rotate around the centre of the node cloud
const CY = MESH_H / 2;

function SliceCamera() {
  // Orthographic camera that mimics SVG preserveAspectRatio="xMidYMid slice" in pixel units.
  const { camera, size } = useThree();
  useEffect(() => {
    const cam = camera as THREE.OrthographicCamera;
    const scale = Math.max(size.width / MESH_W, size.height / MESH_H);
    const w = size.width / scale;
    const h = size.height / scale;
    cam.left = MESH_W / 2 - w / 2 - CX;
    cam.right = MESH_W / 2 + w / 2 - CX;
    cam.top = -(MESH_H / 2 - h / 2) + CY;
    cam.bottom = -(MESH_H / 2 + h / 2) + CY;
    cam.near = -1000;
    cam.far = 1000;
    cam.position.set(0, 0, 10);
    cam.updateProjectionMatrix();
  }, [camera, size]);
  return null;
}

function Network({ nodes, edges, onReady }: Omit<Props, "visible">) {
  const group = useRef<THREE.Group>(null);
  const pointer = useRef({ x: 0, y: 0 });
  const readyFired = useRef(false);

  useEffect(() => {
    const move = (e: PointerEvent) => {
      pointer.current.x = e.clientX / window.innerWidth - 0.5;
      pointer.current.y = e.clientY / window.innerHeight - 0.5;
    };
    window.addEventListener("pointermove", move, { passive: true });
    return () => window.removeEventListener("pointermove", move);
  }, []);

  const lineGeo = useMemo(() => {
    const pos: number[] = [];
    const col: number[] = [];
    const navy = new THREE.Color("#101b3e");
    const cream = new THREE.Color("#fff8ea");
    edges.forEach((e) => {
      const a = nodes[e.a];
      const b = nodes[e.b];
      pos.push(a.x - CX, -(a.y - CY), a.z, b.x - CX, -(b.y - CY), b.z);
      // pre-blend against the cream background to fake per-edge opacity
      const c = cream.clone().lerp(navy, e.opacity);
      col.push(c.r, c.g, c.b, c.r, c.g, c.b);
    });
    const g = new THREE.BufferGeometry();
    g.setAttribute("position", new THREE.Float32BufferAttribute(pos, 3));
    g.setAttribute("color", new THREE.Float32BufferAttribute(col, 3));
    return g;
  }, [nodes, edges]);

  const circle = useMemo(() => new THREE.CircleGeometry(1, 20), []);

  useFrame(({ clock }) => {
    if (!readyFired.current) {
      readyFired.current = true;
      onReady();
    }
    const t = clock.getElapsedTime();
    const g = group.current;
    if (!g) return;
    const ty = Math.sin(t * 0.12) * 0.09 + pointer.current.x * 0.05;
    const tx = Math.cos(t * 0.1) * 0.05 + pointer.current.y * 0.04;
    g.rotation.y += (ty - g.rotation.y) * 0.05;
    g.rotation.x += (tx - g.rotation.x) * 0.05;
  });

  return (
    <group ref={group}>
      <lineSegments geometry={lineGeo}>
        <lineBasicMaterial vertexColors />
      </lineSegments>
      {nodes.map((n, i) => (
        <mesh key={i} geometry={circle} position={[n.x - CX, -(n.y - CY), n.z + 1]} scale={n.r}>
          <meshBasicMaterial color={n.color} transparent opacity={n.opacity} depthWrite={false} />
        </mesh>
      ))}
    </group>
  );
}

export default function MeshCanvas({ nodes, edges, onReady, visible }: Props) {
  const wrap = useRef<HTMLDivElement>(null);
  const [onScreen, setOnScreen] = useState(true);
  useEffect(() => {
    if (!wrap.current) return;
    const io = new IntersectionObserver(([e]) => setOnScreen(e.isIntersecting));
    io.observe(wrap.current);
    return () => io.disconnect();
  }, []);
  return (
    <div ref={wrap} style={{ position: "absolute", inset: 0, opacity: visible ? 1 : 0, transition: "opacity .8s" }}>
      <Canvas
        orthographic
        dpr={[1, 1.75]}
        frameloop={onScreen ? "always" : "never"}
        gl={{ antialias: true, alpha: true, powerPreference: "low-power" }}
        style={{ position: "absolute", inset: 0 }}
      >
        <SliceCamera />
        <Network nodes={nodes} edges={edges} onReady={onReady} />
      </Canvas>
    </div>
  );
}
