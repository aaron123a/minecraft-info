import Section01 from "../components/Section01";
import Section02 from "../components/Section02";
import Section03 from "../components/Section03";

export default function Page() {
  return (
    <>
      <div className="grain" aria-hidden="true"></div>
        <header className="topbar"><a className="brand" href="#inicio">MINECRAFT <b>/ ARCHIVO 01</b></a><div className="top-meta"><span>BESTIARIO DE HOSTILES</span><span className="status">EN CAMPO</span></div></header>
        <main>
          <Section01 />
          <div className="ticker" aria-hidden="true"><div className="ticker-track"><span>Escucha antes de mirar</span><span>La luz es tu aliada</span><span>No todos te persiguen igual</span><span>Escucha antes de mirar</span><span>La luz es tu aliada</span><span>No todos te persiguen igual</span></div></div>
          <Section02 />
          <Section03 />
        </main>
        <footer><span>BESTIARIO NOCTURNO <strong>·</strong> MINECRAFT</span><span>HECHO PARA EXPLORAR <strong>↗</strong></span><span>ARCHIVO 01 / 2026</span></footer>
    </>
  );
}
