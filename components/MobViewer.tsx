"use client";

import { createElement, useEffect, useRef, useState } from "react";
import type { ModelViewerElement } from "@google/model-viewer";
import type { Mob } from "../data/mobs";

export default function MobViewer({ mob, number }: { mob: Mob; number: string }) {
  const viewer = useRef<ModelViewerElement | null>(null);
  const container = useRef<HTMLDivElement>(null);
  const [registered, setRegistered] = useState(false);
  const [status, setStatus] = useState<"loading" | "ready" | "error">("loading");
  const [moving, setMoving] = useState(false);
  const [retry, setRetry] = useState(0);
  const [inView, setInView] = useState(true);
  const [pageVisible, setPageVisible] = useState(true);
  const running = moving && inView && pageVisible;

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => setInView(entry.isIntersecting), { threshold: 0.05 });
    if (container.current) observer.observe(container.current);
    const visibilityChanged = () => setPageVisible(!document.hidden);
    visibilityChanged();
    document.addEventListener("visibilitychange", visibilityChanged);
    return () => {
      observer.disconnect();
      document.removeEventListener("visibilitychange", visibilityChanged);
    };
  }, []);

  useEffect(() => {
    if (!mob.model) return;
    let active = true;
    const media = window.matchMedia("(prefers-reduced-motion: reduce)");
    const updateMotion = () => setMoving(!media.matches);
    updateMotion();
    media.addEventListener("change", updateMotion);
    setStatus("loading");
    import("@google/model-viewer")
      .then(() => { if (active) setRegistered(true); })
      .catch(() => { if (active) setStatus("error"); });
    return () => {
      active = false;
      media.removeEventListener("change", updateMotion);
    };
  }, [mob.model, retry]);

  useEffect(() => {
    const element = viewer.current;
    if (!registered || !element) return;
    const loaded = () => setStatus("ready");
    const failed = () => setStatus("error");
    element.addEventListener("load", loaded);
    element.addEventListener("error", failed);
    if (element.loaded) loaded();
    return () => {
      element.removeEventListener("load", loaded);
      element.removeEventListener("error", failed);
    };
  }, [registered, retry]);

  useEffect(() => {
    const element = viewer.current;
    if (!element || status !== "ready") return;
    element.autoRotate = running;
    if (running && element.availableAnimations.length) element.play();
    else element.pause();
  }, [running, status]);

  const reset = () => {
    const element = viewer.current;
    if (!element) return;
    element.cameraOrbit = "25deg 78deg 105%";
    element.resetTurntableRotation();
  };

  const zoom = (factor: number) => {
    const element = viewer.current;
    if (!element) return;
    const orbit = element.getCameraOrbit();
    element.cameraOrbit = orbit.theta + "rad " + orbit.phi + "rad " + orbit.radius * factor + "m";
  };

  const fallback = !mob.model || status === "error";

  return (
    <div ref={container} className={"specimen " + (running ? "" : "specimen-paused")} data-status={mob.model ? status : "illustration"}>
      <div className="specimen-top"><span><i /> {mob.model ? "VISOR INTERACTIVO" : "ARCHIVO VISUAL"}</span><span>N.º {number}</span></div>
      <div className="specimen-stage">
        <div className="specimen-grid" aria-hidden="true" />
        <div className="specimen-halo" aria-hidden="true" />
        <div className="specimen-orbit specimen-orbit-one" aria-hidden="true" />
        <div className="specimen-orbit specimen-orbit-two" aria-hidden="true" />
        <span className="specimen-coordinate specimen-coordinate-a" aria-hidden="true">X / 024.8</span>
        <span className="specimen-coordinate specimen-coordinate-b" aria-hidden="true">Y / 064.0</span>
        <span className="specimen-watermark" aria-hidden="true">{number}</span>
        <span className="specimen-pixel pixel-one" aria-hidden="true" />
        <span className="specimen-pixel pixel-two" aria-hidden="true" />
        <span className="specimen-pixel pixel-three" aria-hidden="true" />
        <div className="specimen-platform" aria-hidden="true" />

        {registered && mob.model && !fallback && createElement("model-viewer", {
          key: retry,
          ref: viewer,
          src: mob.model,
          alt: "Modelo 3D de " + mob.name + ". Arrastra para girarlo y usa los controles para acercar.",
          "camera-controls": true,
          "touch-action": "pan-y",
          "disable-zoom": true,
          "disable-pan": true,
          "camera-orbit": "25deg 78deg 105%",
          "min-camera-orbit": "auto 25deg 65%",
          "max-camera-orbit": "auto 110deg 220%",
          "field-of-view": "30deg",
          "shadow-intensity": "1",
          "shadow-softness": "0.8",
          "exposure": mob.id === "enderman" ? "1.8" : "1.15",
          "environment-image": "neutral",
          "rotation-per-second": "12deg",
          "auto-rotate-delay": "1500",
          "interaction-prompt": "none",
          loading: "eager",
          className: "specimen-model",
        }, createElement("span", { slot: "progress-bar" }))}

        {fallback && <img className="specimen-illustration" src={"/mobs/" + mob.id + ".png"} alt={mob.name + " de Minecraft"} width="400" height="500" />}
        {mob.model && status === "loading" && <div className="specimen-loading" role="status"><span /><p>Revelando criatura…</p></div>}
        <div className="specimen-caption"><span>{mob.name.toUpperCase()}</span><span>{fallback ? "ILUSTRACIÓN" : "VISTA 360°"}</span></div>
      </div>

      {mob.model && !fallback && <div className="specimen-controls" aria-label="Controles del modelo 3D">
        <button type="button" className="specimen-motion" aria-pressed={moving} disabled={status !== "ready"} onClick={() => setMoving(!moving)}><span aria-hidden="true">{moving ? "Ⅱ" : "↻"}</span>{moving ? "Pausar" : "Animar"}</button>
        <div className="specimen-zoom"><button type="button" disabled={status !== "ready"} onClick={() => zoom(1.18)} aria-label="Alejar modelo">−</button><button type="button" disabled={status !== "ready"} onClick={() => zoom(0.85)} aria-label="Acercar modelo">+</button></div>
        <button type="button" disabled={status !== "ready"} onClick={reset} aria-label="Restablecer vista"><span aria-hidden="true">⟲</span></button>
      </div>}
      <p className="specimen-hint">
        {!mob.model ? "Ilustración disponible · modelo 3D pendiente" : status === "error" ? "No se pudo cargar el modelo 3D." : "Arrastra para explorar · usa + y − para acercar"}
        {status === "error" && mob.model && <button type="button" onClick={() => { setRegistered(false); setRetry(retry + 1); }}>Reintentar</button>}
      </p>
      {mob.modelSource && <details className="specimen-credits"><summary>Créditos del modelo</summary><p><a href={mob.modelSource} target="_blank" rel="noopener noreferrer">{mob.name} — {mob.author}</a><br />Modelo original · <a href="https://creativecommons.org/licenses/by/4.0/" target="_blank" rel="noopener noreferrer">CC BY 4.0</a></p></details>}
    </div>
  );
}
