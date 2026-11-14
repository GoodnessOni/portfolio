"use client";
import { useRef, useState } from "react";
import { experience } from "@/data/site";

const keys = Object.keys(experience) as (keyof typeof experience)[];

export default function Experience() {
  const [tab, setTab] = useState<(typeof keys)[number]>("Leadership");
  const refs = useRef<(HTMLButtonElement | null)[]>([]);
  const onKey = (e: React.KeyboardEvent, i: number) => {
    let n = -1;
    if (e.key === "ArrowRight") n = (i + 1) % keys.length;
    if (e.key === "ArrowLeft") n = (i + keys.length - 1) % keys.length;
    if (e.key === "Home") n = 0;
    if (e.key === "End") n = keys.length - 1;
    if (n >= 0) {
      e.preventDefault();
      setTab(keys[n]);
      refs.current[n]?.focus();
    }
  };
  return (
    <section id="experience">
      <div className="wrap">
        <div className="sec-head">
          <div>
            <div className="label mono">Experience</div>
            <h2>
              Where I lead, <em>build and serve.</em>
            </h2>
          </div>
        </div>
        <div className="tabs" role="tablist" aria-label="Experience type">
          {keys.map((k, i) => (
            <button
              key={k}
              ref={(el) => {
                refs.current[i] = el;
              }}
              type="button"
              role="tab"
              id={`tab-${k}`}
              aria-selected={tab === k}
              aria-controls={`panel-${k}`}
              tabIndex={tab === k ? 0 : -1}
              className={tab === k ? "on" : ""}
              onClick={() => setTab(k)}
              onKeyDown={(e) => onKey(e, i)}
            >
              {k} <small>{String(experience[k].roles.length).padStart(2, "0")}</small>
            </button>
          ))}
        </div>
        {keys.map((k) => (
          <div key={k} className="tl" role="tabpanel" id={`panel-${k}`} aria-labelledby={`tab-${k}`} hidden={tab !== k}>
            {experience[k].roles.map((r) => (
              <div key={r.title + r.org} className={`row${r.highlight ? " hl" : ""}`}>
                <div className="when">{r.when}</div>
                <div>
                  <h3>
                    {r.title} <span>· {r.org}</span>
                  </h3>
                  {r.body && <p>{r.body}</p>}
                </div>
                <div className="badge">{r.badge}</div>
              </div>
            ))}
          </div>
        ))}
      </div>
    </section>
  );
}
