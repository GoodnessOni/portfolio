"use client";
import { useEffect, useRef } from "react";

/**
 * Subtle 3D tilt for the hero portrait. Fine pointers only, off for reduced motion.
 * Writes eased CSS variables on the wrapper from one rAF loop; CSS turns them into transforms.
 */
const MAX = 7; // degrees

export default function PortraitTilt({ children }: { children: React.ReactNode }) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const fine = window.matchMedia("(hover: hover) and (pointer: fine)");
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)");
    const wide = window.matchMedia("(min-width: 761px)");
    const enabled = () => fine.matches && !reduce.matches && wide.matches;

    const cur = { x: 0, y: 0, g: 0 };
    const tgt = { x: 0, y: 0, g: 0 };
    let raf = 0;

    const write = () => {
      el.style.setProperty("--px", cur.x.toFixed(4));
      el.style.setProperty("--py", cur.y.toFixed(4));
      el.style.setProperty("--ry", `${(cur.x * MAX).toFixed(3)}deg`);
      el.style.setProperty("--rx", `${(-cur.y * MAX * 0.8).toFixed(3)}deg`);
      el.style.setProperty("--go", cur.g.toFixed(3));
    };
    const tick = () => {
      const k = 0.12;
      cur.x += (tgt.x - cur.x) * k;
      cur.y += (tgt.y - cur.y) * k;
      cur.g += (tgt.g - cur.g) * 0.1;
      write();
      const done = Math.abs(tgt.x - cur.x) < 0.001 && Math.abs(tgt.y - cur.y) < 0.001 && Math.abs(tgt.g - cur.g) < 0.002;
      if (done) {
        cur.x = tgt.x; cur.y = tgt.y; cur.g = tgt.g;
        write();
        raf = 0;
        if (tgt.g === 0) el.classList.remove("tilting");
        return;
      }
      raf = requestAnimationFrame(tick);
    };
    const kick = () => { if (!raf) raf = requestAnimationFrame(tick); };

    const onMove = (e: PointerEvent) => {
      if (e.pointerType !== "mouse" || !enabled()) return;
      const r = el.getBoundingClientRect();
      tgt.x = Math.max(-1, Math.min(1, ((e.clientX - r.left) / r.width) * 2 - 1));
      tgt.y = Math.max(-1, Math.min(1, ((e.clientY - r.top) / r.height) * 2 - 1));
      tgt.g = 1;
      el.classList.add("tilting");
      kick();
    };
    const onLeave = () => { tgt.x = 0; tgt.y = 0; tgt.g = 0; kick(); };

    el.addEventListener("pointermove", onMove);
    el.addEventListener("pointerleave", onLeave);
    return () => {
      el.removeEventListener("pointermove", onMove);
      el.removeEventListener("pointerleave", onLeave);
      if (raf) cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <div className="portrait" ref={ref}>
      {children}
    </div>
  );
}
