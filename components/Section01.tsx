import HeroCreeper from "./HeroCreeper";

// Section01 — native rehost section #inicio; real JSX, no slots.
export default function Section01() {
  return (
        <section className="hero" id="inicio">
          <div className="hero-copy">
            <div className="eyebrow">Guía de supervivencia · Overworld</div>
            <h1>La noche<span>acecha.</span></h1>
            <p className="hero-desc">Cinco encuentros. Cero corazones extra. Aprende a reconocer las criaturas que salen cuando baja el sol.</p>
            <a className="hero-cta" href="#archivo">Explorar el archivo <i>↘</i></a>
          </div>
          <div className="hero-art"><div className="moon" aria-hidden="true"></div><HeroCreeper /></div>
          <div className="scroll-cue">DESPLAZA PARA SOBREVIVIR</div><div className="hero-index">01 — 05 / MOB FILES</div>
        </section>
  );
}
