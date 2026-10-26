import type { Metadata } from "next";
import type { CSSProperties } from "react";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getMob, mobs } from "../../data/mobs";
import MobViewer from "../../components/MobViewer";
import ReadingProgress from "../../components/ReadingProgress";

type Props = { params: Promise<{ mob: string }> };

export function generateStaticParams() {
  return mobs.map((mob) => ({ mob: mob.id }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const mob = getMob((await params).mob);
  return {
    title: mob ? mob.name + " — Bestiario nocturno" : "Archivo no encontrado",
    description: mob?.summary,
  };
}

export default async function MobPage({ params }: Props) {
  const mob = getMob((await params).mob);
  if (!mob) notFound();
  const index = mobs.findIndex((entry) => entry.id === mob.id);
  const next = mobs[(index + 1) % mobs.length];
  const previous = mobs[(index + mobs.length - 1) % mobs.length];
  const number = String(index + 1).padStart(2, "0");
  const sections = [
    { id: "conducta", name: "Patrón de conducta", text: mob.behavior, label: "OBSERVA" },
    { id: "habitat", name: "Dónde encontrarlo", text: mob.habitat, label: "LOCALIZA" },
    { id: "combate", name: "Antes del primer golpe", text: mob.strategy, label: "SOBREVIVE" },
    { id: "botin", name: "Después del encuentro", text: mob.drops, label: "RECOLECTA" },
  ];

  return (
    <div className="mob-dossier" key={mob.id} style={{ "--mob": mob.color } as CSSProperties}>
      <ReadingProgress />
      <header className="dossier-header">
        <Link className="dossier-brand" href="/">MINECRAFT <span>/ BESTIARIO</span></Link>
        <Link className="dossier-back" href="/#archivo"><span aria-hidden="true">↙</span> Volver al archivo</Link>
        <span className="dossier-edition">GUÍA DE CAMPO <span>VOL. 01</span></span>
      </header>

      <main className="dossier-grid">
        <div className="dossier-intro">
          <div className="dossier-eyebrow"><span className="dossier-signal" /> REGISTRO {number} <span>/ 05</span></div>
          <p className="dossier-callout">{mob.signal}</p>
          <h1>{mob.name}<span className="dossier-title-dot">.</span></h1>
          <div className="dossier-tags"><span>{mob.behavior.split(".")[0]}</span><span>{mob.tag}</span></div>
          <p className="dossier-lead">{mob.summary}</p>
          <div className="dossier-stats">
            <div><span>Vitalidad</span><strong>{mob.health.split(" ")[0]}<small>HP</small></strong><p>{mob.health.split(" · ")[1]}</p></div>
            <div><span>Forma de ataque</span><strong className="dossier-stat-text">{mob.attack}</strong></div>
          </div>
          <nav className="dossier-tabs" aria-label="Secciones de la ficha">
            {sections.map((section) => <a key={section.id} href={"#" + section.id}>{section.id === "habitat" ? "Hábitat" : section.id === "botin" ? "Botín" : section.id === "combate" ? "Combate" : "Conducta"}<span aria-hidden="true">↓</span></a>)}
          </nav>
        </div>

        <aside className="dossier-visual" aria-label={"Vista de " + mob.name}>
          <MobViewer key={mob.id} mob={mob} number={number} />
        </aside>

        <article className="dossier-information" aria-label={"Guía de " + mob.name}>
          <div className="dossier-location"><span aria-hidden="true">⌖</span><span>ÁREA DE OBSERVACIÓN</span><strong>{mob.dimension}</strong></div>
          {sections.map((section, sectionIndex) => (
            <section className="dossier-section" id={section.id} key={section.id} data-reveal>
              <div className="dossier-section-label"><span>{String(sectionIndex + 1).padStart(2, "0")}</span>{section.label}</div>
              <h2>{section.name}</h2>
              <p>{section.text}</p>
              {section.id === "combate" && <div className="dossier-field-note"><span>NOTA DEL EXPLORADOR</span><p>{mob.fieldNote}</p></div>}
            </section>
          ))}
          <section className="dossier-section dossier-extra" data-reveal>
            <div className="dossier-section-label"><span>05</span> MÁS ALLÁ DE LO EVIDENTE</div>
            <h2>Detalles que importan.</h2>
            <p>{mob.details}</p>
            <p className="dossier-version-note">Los valores base corresponden al mob estándar. La edición, la dificultad y el equipo pueden modificar el encuentro.</p>
            <a className="dossier-source" href={mob.wiki} target="_blank" rel="noopener noreferrer">Seguir leyendo en Minecraft Wiki <span aria-hidden="true">↗</span><span className="sr-only"> (abre otra pestaña)</span></a>
          </section>
        </article>
      </main>

      <nav className="dossier-pagination" aria-label="Explorar otras criaturas">
        <Link className="dossier-prev" href={"/" + previous.id}><span aria-hidden="true">←</span><div><small>ARCHIVO ANTERIOR</small><strong>{previous.name}</strong></div></Link>
        <Link className="dossier-next" href={"/" + next.id} style={{ "--next-mob": next.color } as CSSProperties}>
          <div><small>LA NOCHE CONTINÚA / SIGUIENTE ARCHIVO</small><strong>{next.name}<span aria-hidden="true">↗</span></strong></div>
          <img src={"/mobs/" + next.id + ".png"} alt="" width="120" height="160" loading="lazy" />
        </Link>
      </nav>
      <div className="dossier-footer"><span>BESTIARIO NOCTURNO / MINECRAFT</span><span>CONOCE. PREPARA. SOBREVIVE.</span></div>
    </div>
  );
}
