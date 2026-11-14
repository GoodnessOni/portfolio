import Image from "next/image";
import { covers } from "@/data/covers";
import type { Project } from "@/data/projects";
import { asset } from "@/lib/site";

export default function Thumb({ p, sizes = "(max-width: 760px) 100vw, 380px", priority = false }: { p: Project; sizes?: string; priority?: boolean }) {
  if (p.shot) {
    return (
      <div className="thumb shot">
        <div className="win">
          <div className="bar">
            <i />
            <i />
            <i />
            <span>{p.shot.bar}</span>
          </div>
          <div className="vp">
            <Image src={asset(p.shot.src)} alt={`Screenshot of ${p.title}`} width={760} height={475} sizes={sizes} priority={priority} />
          </div>
        </div>
      </div>
    );
  }
  return (
    <div className="thumb cover">
      <svg viewBox="0 0 320 200" aria-hidden="true" dangerouslySetInnerHTML={{ __html: covers[p.slug] ?? "" }} />
      {p.clabel && <span className="clabel">{p.clabel}</span>}
    </div>
  );
}
