// Section02 — native rehost section #archivo; real JSX, no slots.
import EnemyWiki from "./EnemyWiki";

export default function Section02() {
  return (
        <section className="field-guide" id="archivo">
          <div className="section-head reveal"><div><div className="section-kicker">01 / Registro de criaturas</div><h2>Conoce al<br/>enemigo.</h2></div><p>Selecciona un mob para abrir su ficha completa. La preparación empieza antes del primer golpe.</p></div>
          <EnemyWiki />
        </section>
  );
}
