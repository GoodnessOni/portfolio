"use client";
import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import { contact } from "@/lib/site";

export default function Contact() {
  const [copied, setCopied] = useState(false);
  const copy = async () => {
    try {
      await navigator.clipboard.writeText(contact.email);
    } catch {
      const t = document.createElement("textarea");
      t.value = contact.email;
      document.body.appendChild(t);
      t.select();
      document.execCommand("copy");
      t.remove();
    }
    setCopied(true);
    setTimeout(() => setCopied(false), 2200);
  };
  return (
    <section className="contact" id="contact">
      <div className="grid-dark" />
      <div className="wrap">
        <div className="label mono">Contact</div>
        <h2>
          Hiring, building, or looking at a partnership? <em>Let&apos;s talk.</em>
        </h2>
        <p className="sub">Open to internships, product work, and partnership or sponsorship conversations.</p>
        <div className="mail" style={{ position: "relative" }}>
          <div className="mailbox">
            <a href={`mailto:${contact.email}`} className="mail-link">
              {contact.email}
            </a>
            <button type="button" className="btn" onClick={copy}>
              {copied ? "Copied ✓" : "Copy email"}
            </button>
          </div>
          <span className="sr-only" aria-live="polite">
            {copied ? "Email address copied" : ""}
          </span>
          <AnimatePresence>
            {copied && (
              <motion.span className="toast" initial={{ opacity: 0, y: 6 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }}>
                Email copied to clipboard
              </motion.span>
            )}
          </AnimatePresence>
        </div>
        <div className="socials">
          <a href={contact.linkedin} target="_blank" rel="noopener noreferrer">
            <div>
              <small>LinkedIn</small>
              <span>engrogonigoodness</span>
            </div>
            <span className="arrow">↗</span>
          </a>
          <a href={contact.github} target="_blank" rel="noopener noreferrer">
            <div>
              <small>GitHub</small>
              <span>GoodnessOni</span>
            </div>
            <span className="arrow">↗</span>
          </a>
          <a href={contact.phoneHref}>
            <div>
              <small>Phone</small>
              <span>{contact.phone}</span>
            </div>
            <span className="arrow">↗</span>
          </a>
        </div>
        <div className="foot">
          <span>© 2026 Goodness Oni · OGverse Innovations</span>
          <span>Lagos, Nigeria</span>
        </div>
      </div>
      <Halves />
    </section>
  );
}

export function Halves() {
  return (
    <div className="halves" aria-hidden="true">
      {Array.from({ length: 40 }, (_, i) => (
        <i key={i} />
      ))}
    </div>
  );
}
