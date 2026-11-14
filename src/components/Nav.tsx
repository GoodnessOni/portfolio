"use client";
import Link from "next/link";
import { useDrawer } from "./Providers";

export default function Nav({ home = true }: { home?: boolean }) {
  const { openPalette } = useDrawer();
  const h = (id: string) => (home ? `#${id}` : `/#${id}`);
  return (
    <nav className="nav" aria-label="Main">
      <div className="wrap">
        <Link className="brand" href="/">
          <span className="mark" aria-hidden="true">G</span>Goodness Oni
        </Link>
        <div className="links">
          <Link href={h("work")}>Work</Link>
          <Link href={h("experience")}>Experience</Link>
          <Link href={h("tools")}>Tools</Link>
          <Link href={h("about")}>About</Link>
          <Link href={h("contact")}>Contact</Link>
        </div>
        <div className="right">
          <button type="button" className="kbd" onClick={openPalette} aria-label="Open quick navigation (Command K)">
            ⌘ K
          </button>
          <Link className="btn btn-dark btn-sm" href={h("cv")}>
            CV <span className="arrow">↓</span>
          </Link>
        </div>
      </div>
    </nav>
  );
}
