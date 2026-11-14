"use client";
import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useRef } from "react";
import { projects } from "@/data/projects";
import Thumb from "./Thumb";

type Props = { slug: string | null; onClose: () => void; onNavigate: (slug: string) => void };

export default function ProjectDrawer({ slug, onClose, onNavigate }: Props) {
  const idx = projects.findIndex((p) => p.slug === slug);
  const p = idx >= 0 ? projects[idx] : null;
  const panel = useRef<HTMLDivElement>(null);
  const closeBtn = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (!p) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    closeBtn.current?.focus({ preventScroll: true });
    panel.current?.scrollTo({ top: 0 });
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        e.preventDefault();
        onClose();
        return;
      }
      const t = e.target as HTMLElement;
      if (t?.tagName === "INPUT") return;
      if (e.key === "ArrowRight" || e.key === "ArrowLeft") {
        const n = projects.length;
        const next = projects[(idx + (e.key === "ArrowRight" ? 1 : n - 1)) % n];
        onNavigate(next.slug);
      }
      if (e.key === "Tab" && panel.current) {
        // keep focus inside the dialog
        const f = panel.current.querySelectorAll<HTMLElement>('a[href],button:not([disabled]),[tabindex]:not([tabindex="-1"])');
        if (!f.length) return;
        const first = f[0];
        const last = f[f.length - 1];
        if (e.shiftKey && document.activeElement === first) {
          e.preventDefault();
          last.focus();
        } else if (!e.shiftKey && document.activeElement === last) {
          e.preventDefault();
          first.focus();
        }
      }
    };
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = prev;
      window.removeEventListener("keydown", onKey);
    };
  }, [p, idx, onClose, onNavigate]);

  const prevP = idx >= 0 ? projects[(idx + projects.length - 1) % projects.length] : null;
  const nextP = idx >= 0 ? projects[(idx + 1) % projects.length] : null;

  return (
    <AnimatePresence>
      {p && (
        <motion.div className="drawer-root" key="drawer" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.2 }}>
          <div className="drawer-scrim" onClick={onClose} aria-hidden="true" />
          <motion.div
            ref={panel}
            className="drawer"
            role="dialog"
            aria-modal="true"
            aria-labelledby="drawer-title"
            initial={{ x: 40, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: 40, opacity: 0 }}
            transition={{ type: "spring", stiffness: 380, damping: 36 }}
          >
            <div className="drawer-top">
              <span className="mono">Case study · {p.num} / {String(projects.length).padStart(2, "0")}</span>
              <div className="drawer-nav">
                <button type="button" onClick={() => prevP && onNavigate(prevP.slug)} aria-label={`Previous: ${prevP?.title}`}>←</button>
                <button type="button" onClick={() => nextP && onNavigate(nextP.slug)} aria-label={`Next: ${nextP?.title}`}>→</button>
                <button type="button" ref={closeBtn} onClick={onClose} className="drawer-close" aria-label="Close case study">
                  Esc <span aria-hidden="true">×</span>
                </button>
              </div>
            </div>
            <div className="drawer-thumb">
              <Thumb p={p} sizes="(max-width: 760px) 100vw, 600px" />
            </div>
            <div className="drawer-body">
              <div className="drawer-chips">
                {p.result && <span className={`chip ${p.result.tone}`}>{p.result.text}</span>}
                <span className="chip role">{p.role}</span>
              </div>
              <h2 id="drawer-title">{p.title}</h2>
              <p className="drawer-kind">{p.kind}</p>
              <div className="drawer-team">
                <span className="mono">My role vs the team</span>
                <p>
                  <b>{p.role}.</b> {p.team}
                </p>
              </div>
              <div className="drawer-sec">
                <span className="mono">Problem</span>
                <p>{p.problem}</p>
              </div>
              <div className="drawer-sec">
                <span className="mono">What I did</span>
                <ul>
                  {p.built.map((b) => (
                    <li key={b}>{b}</li>
                  ))}
                </ul>
              </div>
              <div className="drawer-sec">
                <span className="mono">Result</span>
                <p>{p.outcome}</p>
              </div>
              <div className="drawer-sec">
                <span className="mono">Stack</span>
                <div className="tags">
                  {p.stack.map((s) => (
                    <span key={s}>{s}</span>
                  ))}
                </div>
              </div>
              {p.links.length > 0 && (
                <div className="drawer-links">
                  {p.links.map((l, i) => (
                    <a key={l.href} className={`btn ${i === 0 ? "btn-dark" : "btn-ghost"}`} href={l.href} target="_blank" rel="noopener noreferrer">
                      {l.label} <span className="arrow">↗</span>
                    </a>
                  ))}
                </div>
              )}
              <p className="drawer-hint mono">← → to switch projects · Esc to close</p>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
