"use client";

import { useEffect } from "react";
import { prefersReducedMotion } from "./useSectionMotion";

// Page-level motion skeleton — no measured page triggers; author from motion.manifest.json hints.
export function usePageMotion(): void {
  useEffect(() => {
    if (prefersReducedMotion()) return; // prefers-reduced-motion: static first frame
    // TODO: author steps — page-level timeline for motion.manifest.json pageTriggers.
  }, []);
}
