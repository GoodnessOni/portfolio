"use client";
import dynamic from "next/dynamic";
import { useEffect, useState } from "react";
import { buildMesh, MESH_H, MESH_W } from "@/lib/mesh";

const MeshCanvas = dynamic(() => import("./MeshCanvas"), { ssr: false });
const { nodes, edges } = buildMesh();

function canRun3D() {
  if (typeof window === "undefined") return false;
  if (!window.matchMedia("(min-width: 900px) and (hover: hover)").matches) return false;
  if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return false;
  const nav = navigator as Navigator & { connection?: { saveData?: boolean }; deviceMemory?: number };
  if (nav.connection?.saveData) return false;
  if ((nav.hardwareConcurrency ?? 8) < 4) return false;
  if ((nav.deviceMemory ?? 8) < 4) return false;
  try {
    const c = document.createElement("canvas");
    return !!(c.getContext("webgl2") || c.getContext("webgl"));
  } catch {
    return false;
  }
}

/** Static SVG mesh (always rendered, works without JS) plus a lazy WebGL mesh on capable desktops. */
export default function HeroMesh() {
  const [three, setThree] = useState(false);
  const [ready, setReady] = useState(false);
  useEffect(() => {
    if (!canRun3D()) return;
    const start = () => setThree(true);
    const w = window as Window & { requestIdleCallback?: (cb: () => void) => number };
    if (w.requestIdleCallback) w.requestIdleCallback(start);
    else setTimeout(start, 600);
  }, []);
  return (
    <div className="mesh" aria-hidden="true">
      <svg
        viewBox={`0 0 ${MESH_W} ${MESH_H}`}
        preserveAspectRatio="xMidYMid slice"
        style={{ position: "absolute", inset: 0, width: "100%", height: "100%", transition: "opacity .8s", opacity: ready ? 0 : 1 }}
      >
        {edges.map((e, k) => (
          <line key={k} x1={nodes[e.a].x} y1={nodes[e.a].y} x2={nodes[e.b].x} y2={nodes[e.b].y} stroke="#101b3e" strokeOpacity={e.opacity.toFixed(2)} strokeWidth={1} />
        ))}
        {nodes.map((n, k) => (
          <circle key={k} cx={n.x} cy={n.y} r={n.r} fill={n.color} fillOpacity={n.opacity} />
        ))}
      </svg>
      {three && <MeshCanvas nodes={nodes} edges={edges} onReady={() => setReady(true)} visible={ready} />}
    </div>
  );
}
