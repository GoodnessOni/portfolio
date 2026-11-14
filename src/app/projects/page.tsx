import type { Metadata } from "next";
import { Suspense } from "react";
import Nav from "@/components/Nav";
import HeroMesh from "@/components/HeroMesh";
import ProjectsArchive from "@/components/ProjectsArchive";
import { Halves } from "@/components/Contact";
import { contact } from "@/lib/site";
import { projects } from "@/data/projects";

export const metadata: Metadata = {
  title: "Projects",
  description: "Every project Goodness Oni has shipped, from AI products and backends to hardware, with his role on each.",
  alternates: { canonical: "./" },
};

export default function ProjectsPage() {
  return (
    <>
      <Nav home={false} />
      <main>
        <header className="pj-hero grid-bg">
          <HeroMesh />
          <div className="wrap" style={{ position: "relative", zIndex: 2 }}>
            <div className="label mono">Project archive</div>
            <h1>
              All {projects.length} projects, <em>with my role on each.</em>
            </h1>
            <p>Filter by kind of work or search by name and stack. Open any project for the case study.</p>
          </div>
          <Halves />
        </header>
        <section style={{ paddingTop: 56 }}>
          <div className="wrap">
            <Suspense>
              <ProjectsArchive />
            </Suspense>
          </div>
        </section>
      </main>
      <footer className="mini-foot">
        <div className="wrap">
          <span>© 2026 Goodness Oni · OGverse Innovations</span>
          <span>
            <a href={`mailto:${contact.email}`}>{contact.email}</a> · <a href={contact.github}>GitHub</a> · <a href={contact.linkedin}>LinkedIn</a>
          </span>
        </div>
        <Halves />
      </footer>
    </>
  );
}
