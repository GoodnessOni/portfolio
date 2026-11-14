"use client";
import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";
import { allFilters, projects } from "@/data/projects";
import ProjectCard from "./ProjectCard";

const readParams = () => {
  const u = new URLSearchParams(window.location.search);
  return { f: u.get("f") ?? "All", q: u.get("q") ?? "" };
};

export default function ProjectsArchive() {
  const [f, setF] = useState("All");
  const [q, setQ] = useState("");

  useEffect(() => {
    const p = readParams();
    setF(allFilters.includes(p.f as never) ? p.f : "All");
    setQ(p.q);
  }, []);

  // Keep filters in the URL so a filtered view can be shared.
  useEffect(() => {
    const u = new URLSearchParams();
    if (f !== "All") u.set("f", f);
    if (q.trim()) u.set("q", q.trim());
    const s = u.toString();
    window.history.replaceState(window.history.state, "", `${window.location.pathname}${s ? `?${s}` : ""}${window.location.hash}`);
  }, [f, q]);

  const needle = q.trim().toLowerCase();
  const shown = projects.filter(
    (p) =>
      (f === "All" || (p.categories as string[]).includes(f)) &&
      (!needle || [p.title, p.kind, p.role, ...p.tags, ...p.stack, ...p.categories].join(" ").toLowerCase().includes(needle)),
  );

  return (
    <>
      <div className="pj-tools">
        <div className="filters" role="group" aria-label="Filter projects">
          {["All", ...allFilters].map((k) => {
            const n = k === "All" ? projects.length : projects.filter((p) => (p.categories as string[]).includes(k)).length;
            return (
              <button key={k} type="button" className={f === k ? "on" : ""} aria-pressed={f === k} onClick={() => setF(k)}>
                {k} {n}
              </button>
            );
          })}
        </div>
        <label className="search">
          <span aria-hidden="true" style={{ color: "var(--faint)" }}>⌕</span>
          <input type="search" value={q} onChange={(e) => setQ(e.target.value)} placeholder="Search name, stack or role" aria-label="Search projects" />
        </label>
      </div>
      <div className="pj-count" aria-live="polite">
        Showing {shown.length} of {projects.length}
      </div>
      <motion.div layout className="cards">
        <AnimatePresence mode="popLayout" initial={false}>
          {shown.map((p) => (
            <motion.div key={p.slug} layout initial={{ opacity: 0, scale: 0.97 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 0.97 }} transition={{ duration: 0.25 }} className="card-wrap">
              <ProjectCard p={p} />
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>
      {shown.length === 0 && <p className="pj-empty">No projects match that. Try another filter or search.</p>}
    </>
  );
}
