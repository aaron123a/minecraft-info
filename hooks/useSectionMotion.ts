"use client";

// Shared reduced-motion gate for the per-section hooks. Reduced motion keeps
// the captured static first frame: no tweens, no ScrollTriggers.
export function prefersReducedMotion(): boolean {
  return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}
