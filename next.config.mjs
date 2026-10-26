import { PHASE_DEVELOPMENT_SERVER } from "next/constants.js";

// Keep the running preview independent from production builds.
export default (phase) => ({
  distDir: phase === PHASE_DEVELOPMENT_SERVER ? ".next-dev" : ".next",
});
