"use client";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import { archive, featured, homeFilters } from "@/data/projects";
import { covers } from "@/data/covers";
import { contact } from "@/lib/site";
import ProjectCard from "./ProjectCard";

export default function WorkSection() {
  const [f, setF] = useState<string>("All");
  const shown = f === "All" ? featured : featured.filter((p) => (p.categories as string[]).includes(f));
  return (
    <section id="work">
      <div className="wrap">
        <div className="sec-head">
          <div>
            <div className="label mono">Selected work</div>
            <h2>
              Products I shipped, <em>and exactly what I did</em> on each.
            </h2>
          </div>
          <p>Every card shows my role next to the team&apos;s. Open one for the case study: problem, what I built, result and screens.</p>
        </div>
        <div className="filters" role="group" aria-label="Filter selected work">
          {["All", ...homeFilters].map((k) => {
            const n = k === "All" ? featured.length : featured.filter((p) => (p.categories as string[]).includes(k)).length;
            return (
              <button key={k} type="button" className={f === k ? "on" : ""} aria-pressed={f === k} onClick={() => setF(k)}>
                {k === "All" ? `All ${n}` : k}
                {k !== "All" && f === k ? ` ${n}` : ""}
              </button>
            );
          })}
        </div>
        <motion.div layout className="cards" aria-live="polite">
          <AnimatePresence mode="popLayout" initial={false}>
            {shown.map((p) => (
              <motion.div key={p.slug} layout initial={{ opacity: 0, scale: 0.97 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 0.97 }} transition={{ duration: 0.25 }} className="card-wrap">
                <ProjectCard p={p} />
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        <div className="archive-head">
          <div>
            <div className="label mono">Project archive</div>
            <h3 className="ah">
              Everything else I have shipped, <em>with my role on each.</em>
            </h3>
          </div>
          <Link className="btn btn-ghost btn-sm" href="/projects/">
            All 13 projects <span className="arrow">→</span>
          </Link>
        </div>
        <div className="cards arch">
          {archive.map((p) => (
            <ProjectCard key={p.slug} p={p} small />
          ))}
          <a className="card sm endtile" href={contact.github} target="_blank" rel="noopener noreferrer">
            <div className="thumb cover">
              <svg viewBox="0 0 320 200" aria-hidden="true" dangerouslySetInnerHTML={{ __html: covers.endtile }} />
            </div>
            <div className="cbody">
              <h3>Every repo</h3>
              <div className="kind">Code, READMEs and commit history</div>
              <div className="did" style={{ border: 0, paddingTop: 6 }}>
                github.com/GoodnessOni
              </div>
              <div className="meta">
                <span className="open">Open GitHub ↗</span>
              </div>
            </div>
          </a>
        </div>
      </div>
    </section>
  );
}
