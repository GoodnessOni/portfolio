"use client";
import { useRef } from "react";
import type { Project } from "@/data/projects";
import Thumb from "./Thumb";
import { useDrawer } from "./Providers";

export default function ProjectCard({ p, small = false, showResult = true }: { p: Project; small?: boolean; showResult?: boolean }) {
  const ref = useRef<HTMLElement>(null);
  const { open } = useDrawer();

  // Gentle pointer tilt, pointer devices only, off for reduced motion.
  const onMove = (e: React.PointerEvent) => {
    if (e.pointerType !== "mouse") return;
    const el = ref.current;
    if (!el || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const r = el.getBoundingClientRect();
    const x = (e.clientX - r.left) / r.width - 0.5;
    const y = (e.clientY - r.top) / r.height - 0.5;
    el.style.setProperty("--rx", `${(-y * 3.2).toFixed(2)}deg`);
    el.style.setProperty("--ry", `${(x * 4).toFixed(2)}deg`);
    el.classList.add("tilt");
  };
  const onLeave = () => {
    const el = ref.current;
    if (!el) return;
    el.classList.remove("tilt");
  };

  return (
    <article ref={ref} className={`card${small ? " sm" : ""}`} onPointerMove={onMove} onPointerLeave={onLeave}>
      <Thumb p={p} sizes={small ? "(max-width: 760px) 50vw, 280px" : undefined} />
      <div className="cbody">
        <div className="top">
          <span className="mono">{p.num}</span>
          {showResult && p.result && <span className={`chip ${p.result.tone}`}>{p.result.text}</span>}
        </div>
        <h3>
          <button type="button" className="stretch" onClick={() => open(p.slug)} aria-haspopup="dialog">
            {p.title}
          </button>
        </h3>
        <div className="kind">{p.kind}</div>
        <div className="did">
          <span className="mono">What I did</span>
          {p.did}
        </div>
        <div className="meta">
          <div className="tags">
            {p.tags.map((t) => (
              <span key={t}>{t}</span>
            ))}
          </div>
          <span className="chip role">{p.role}</span>
        </div>
      </div>
    </article>
  );
}
