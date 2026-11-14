// Deterministic node layout shared by the static SVG mesh and the WebGL mesh,
// so the 3D version fades in exactly over the static one.
export const MESH_W = 1440;
export const MESH_H = 900;

export type Node = { x: number; y: number; z: number; color: string; opacity: number; r: number };
export type Edge = { a: number; b: number; opacity: number };

export function buildMesh(): { nodes: Node[]; edges: Edge[] } {
  let s = 7;
  const r = () => (s = (s * 16807) % 2147483647) / 2147483647;
  const pts: [number, number][] = [];
  for (let i = 0; i < 46; i++) pts.push([600 + r() * 840, r() * MESH_H]);
  const edges: Edge[] = [];
  pts.forEach((p, i) => {
    pts
      .map((q, j) => [j, Math.hypot(p[0] - q[0], p[1] - q[1])] as [number, number])
      .filter((a) => a[0] > i)
      .sort((a, b) => a[1] - b[1])
      .slice(0, 2)
      .forEach(([j, d]) => {
        if (d < 230) edges.push({ a: i, b: j, opacity: 0.13 - (p[0] < 800 ? 0.06 : 0) });
      });
  });
  const nodes: Node[] = pts.map((p, i) => {
    const color = i % 9 === 0 ? "#ea8417" : i % 7 === 0 ? "#eeac16" : "#101b3e";
    return {
      x: p[0],
      y: p[1],
      z: ((i * 37) % 23) * 9 - 100,
      color,
      opacity: color === "#101b3e" ? 0.22 : 0.6,
      r: i % 9 === 0 ? 4 : 2.4,
    };
  });
  return { nodes, edges };
}
