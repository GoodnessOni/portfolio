"use client";
import { MotionConfig } from "framer-motion";
import { createContext, useCallback, useContext, useEffect, useRef, useState } from "react";
import { projects } from "@/data/projects";
import ProjectDrawer from "./ProjectDrawer";
import CommandPalette from "./CommandPalette";

type Ctx = { open: (slug: string) => void; close: () => void; current: string | null; openPalette: () => void };
const DrawerCtx = createContext<Ctx>({ open: () => {}, close: () => {}, current: null, openPalette: () => {} });
export const useDrawer = () => useContext(DrawerCtx);

const PREFIX = "#p/";
const slugFromHash = () => {
  const h = typeof window === "undefined" ? "" : window.location.hash;
  const s = h.startsWith(PREFIX) ? h.slice(PREFIX.length) : null;
  return s && projects.some((p) => p.slug === s) ? s : null;
};

export default function Providers({ children }: { children: React.ReactNode }) {
  const [current, setCurrent] = useState<string | null>(null);
  const [palette, setPalette] = useState(false);
  const pushed = useRef(false);
  const lastFocus = useRef<HTMLElement | null>(null);

  // Deep links: /#p/paypal-hub opens that case study.
  useEffect(() => {
    setCurrent(slugFromHash());
    const sync = () => setCurrent(slugFromHash());
    window.addEventListener("popstate", sync);
    window.addEventListener("hashchange", sync);
    return () => {
      window.removeEventListener("popstate", sync);
      window.removeEventListener("hashchange", sync);
    };
  }, []);

  const open = useCallback((slug: string) => {
    if (!lastFocus.current) lastFocus.current = document.activeElement as HTMLElement | null;
    const url = `${window.location.pathname}${window.location.search}${PREFIX}${slug}`;
    if (slugFromHash()) window.history.replaceState(null, "", url);
    else {
      window.history.pushState(null, "", url);
      pushed.current = true;
    }
    setCurrent(slug);
  }, []);

  const close = useCallback(() => {
    setCurrent(null);
    if (pushed.current) {
      pushed.current = false;
      window.history.back();
    } else if (slugFromHash()) {
      window.history.replaceState(null, "", `${window.location.pathname}${window.location.search}`);
    }
    const f = lastFocus.current;
    lastFocus.current = null;
    setTimeout(() => f?.focus?.(), 0);
  }, []);

  // Cmd/Ctrl+K or "/" opens quick nav.
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      const t = e.target as HTMLElement;
      const typing = t && (t.tagName === "INPUT" || t.tagName === "TEXTAREA" || t.isContentEditable);
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === "k") {
        e.preventDefault();
        setPalette((v) => !v);
      } else if (e.key === "/" && !typing) {
        e.preventDefault();
        setPalette(true);
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  return (
    <MotionConfig reducedMotion="user">
      <DrawerCtx.Provider value={{ open, close, current, openPalette: () => setPalette(true) }}>
        {children}
        <ProjectDrawer slug={current} onClose={close} onNavigate={open} />
        <CommandPalette open={palette} onClose={() => setPalette(false)} onProject={(s) => { setPalette(false); open(s); }} />
      </DrawerCtx.Provider>
    </MotionConfig>
  );
}
