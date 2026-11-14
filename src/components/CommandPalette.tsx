"use client";
import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useMemo, useRef, useState } from "react";
import { projects } from "@/data/projects";
import { asset, basePath, contact, cvPath } from "@/lib/site";

type Item = { id: string; label: string; hint: string; run: () => void };

export default function CommandPalette({ open, onClose, onProject }: { open: boolean; onClose: () => void; onProject: (slug: string) => void }) {
  const [q, setQ] = useState("");
  const [active, setActive] = useState(0);
  const input = useRef<HTMLInputElement>(null);

  const items = useMemo<Item[]>(() => {
    const onHome = typeof window !== "undefined" && (window.location.pathname === `${basePath}/` || window.location.pathname === basePath || window.location.pathname === "/");
    const go = (id: string) => () => {
      onClose();
      if (onHome) document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
      else window.location.href = `${basePath}/#${id}`;
    };
    const ext = (href: string) => () => {
      onClose();
      window.open(href, "_blank", "noopener");
    };
    return [
      { id: "work", label: "Selected work", hint: "Section", run: go("work") },
      { id: "experience", label: "Experience", hint: "Section", run: go("experience") },
      { id: "tools", label: "Tools", hint: "Section", run: go("tools") },
      { id: "about", label: "About", hint: "Section", run: go("about") },
      { id: "cv", label: "CV", hint: "Section", run: go("cv") },
      { id: "contact", label: "Contact", hint: "Section", run: go("contact") },
      { id: "projects", label: "All projects archive", hint: "Page", run: () => { onClose(); window.location.href = `${basePath}/projects/`; } },
      ...projects.map((p) => ({ id: p.slug, label: p.title, hint: p.kind, run: () => onProject(p.slug) })),
      { id: "dl", label: "Download CV (PDF)", hint: "File", run: ext(asset(cvPath)) },
      { id: "copy", label: "Copy email address", hint: contact.email, run: () => { navigator.clipboard?.writeText(contact.email); onClose(); } },
      { id: "gh", label: "GitHub", hint: "github.com/GoodnessOni", run: ext(contact.github) },
      { id: "li", label: "LinkedIn", hint: "engrogonigoodness", run: ext(contact.linkedin) },
    ];
  }, [onClose, onProject]);

  const filtered = items.filter((i) => (i.label + " " + i.hint).toLowerCase().includes(q.trim().toLowerCase()));

  useEffect(() => {
    if (open) {
      setQ("");
      setActive(0);
      setTimeout(() => input.current?.focus(), 10);
    }
  }, [open]);
  useEffect(() => setActive(0), [q]);

  const onKey = (e: React.KeyboardEvent) => {
    if (e.key === "Escape") {
      e.preventDefault();
      e.stopPropagation();
      onClose();
    } else if (e.key === "ArrowDown") {
      e.preventDefault();
      setActive((a) => Math.min(a + 1, filtered.length - 1));
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      setActive((a) => Math.max(a - 1, 0));
    } else if (e.key === "Enter") {
      e.preventDefault();
      filtered[active]?.run();
    }
  };

  return (
    <AnimatePresence>
      {open && (
        <motion.div className="palette-root" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.15 }} onKeyDown={onKey}>
          <div className="drawer-scrim" onClick={onClose} aria-hidden="true" />
          <motion.div className="palette" role="dialog" aria-modal="true" aria-label="Quick navigation" initial={{ y: -8, scale: 0.98 }} animate={{ y: 0, scale: 1 }} exit={{ y: -8, scale: 0.98 }}>
            <input
              ref={input}
              value={q}
              onChange={(e) => setQ(e.target.value)}
              placeholder="Jump to a section or project…"
              aria-label="Search sections and projects"
              role="combobox"
              aria-expanded="true"
              aria-controls="palette-list"
              aria-activedescendant={filtered[active] ? `pal-${filtered[active].id}` : undefined}
            />
            <ul id="palette-list" role="listbox">
              {filtered.map((i, k) => (
                <li
                  key={i.id}
                  id={`pal-${i.id}`}
                  role="option"
                  aria-selected={k === active}
                  className={k === active ? "on" : ""}
                  onMouseEnter={() => setActive(k)}
                  onClick={i.run}
                >
                  <span>{i.label}</span>
                  <small>{i.hint}</small>
                </li>
              ))}
              {filtered.length === 0 && <li className="empty">No matches</li>}
            </ul>
            <div className="palette-foot mono">↑ ↓ to move · Enter to open · Esc to close</div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
