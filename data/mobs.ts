export type Mob = {
  id: string;
  name: string;
  color: string;
  className: string;
  tag: string;
  summary: string;
  health: string;
  behavior: string;
  habitat: string;
  drops: string;
  strategy: string;
  details: string;
  wiki: string;
  model: string | null;
  attack: string;
  dimension: string;
  signal: string;
  fieldNote: string;
  author?: string;
  modelSource?: string;
};

export const mobs: Mob[] = [
  {
    id: "creeper",
    model: "/3d/minecraft_-_creeper.glb",
    attack: "Explosión",
    dimension: "Overworld",
    signal: "Un siseo. Poco tiempo.",
    fieldNote: "El silencio también es una señal. Revisa tu espalda al salir de una cueva y conserva una ruta de retirada.",
    author: "Vincent Yanez",
    modelSource: "https://sketchfab.com/3d-models/minecraft-creeper-fd66182f07e5408eb04fa5a88ae16055",
    name: "Creeper",
    color: "#c2f26d",
    className: "creeper",
    tag: "Explosivo · Silencioso",
    summary: "Se acerca sin hacer ruido y empieza a sisear antes de explotar. Mantén distancia o aléjalo con un golpe.",
    health: "20 puntos · 10 corazones",
    behavior: "Hostil. Persigue al jugador y prepara una explosión cuando se acerca. El siseo y el destello avisan que la mecha está activa.",
    habitat: "Superficie del Overworld en zonas oscuras; puede aparecer de noche o en cuevas sin iluminar.",
    drops: "Pólvora. Si una explosión de creeper cargado lo mata, puede dejar una cabeza de creeper.",
    strategy: "Golpéalo una vez y retrocede para cancelar la mecha; repite desde una distancia segura. Un escudo puede bloquear gran parte de la explosión si lo orientas hacia ella.",
    details: "No tiene ataque cuerpo a cuerpo: su peligro es la explosión, que también puede destruir bloques. El agua reduce el daño a bloques y mantener una barrera entre ambos puede protegerte.",
    wiki: "https://minecraft.wiki/w/Creeper",
  },
  {
    id: "zombie",
    model: "/3d/minecraft_zombie.glb",
    attack: "Cuerpo a cuerpo",
    dimension: "Overworld",
    signal: "Nunca viene solo.",
    fieldNote: "Cuenta los enemigos antes de atacar. Un encuentro sencillo puede complicarse cuando otro zombi aparece detrás de ti.",
    author: "JoohnElkes",
    modelSource: "https://sketchfab.com/3d-models/minecraft-zombie-45037ec52b6a4444a0981f916d0dbd43",
    name: "Zombie",
    color: "#78cf79",
    className: "zombie",
    tag: "Cercano · Persistente",
    summary: "Avanza directo hacia ti y arde bajo el sol. Bloquea su paso con terreno elevado y evita quedar rodeado.",
    health: "20 puntos · 10 corazones (adulto estándar)",
    behavior: "Hostil. Ataca cuerpo a cuerpo, detecta al jugador y puede llamar a otros zombis cercanos cuando recibe daño.",
    habitat: "Overworld oscuro, incluidas cuevas; también puede aparecer en estructuras y situaciones especiales.",
    drops: "Carne podrida. En ocasiones deja una zanahoria, una papa o un lingote de hierro; el equipo que lleva depende del ejemplar.",
    strategy: "Enfréntalo de frente con espacio para retroceder y evita que varios te cierren el paso. La luz del sol lo quema si no lleva casco ni está protegido.",
    details: "Los zombis son no muertos: Curación instantánea les hace daño y Daño instantáneo los cura. El equipo, las variantes y la dificultad pueden cambiar el encuentro.",
    wiki: "https://minecraft.wiki/w/Zombie",
  },
  {
    id: "enderman",
    model: "/3d/minecraft_-_enderman.glb",
    attack: "Cuerpo a cuerpo",
    dimension: "Las tres dimensiones",
    signal: "No cruces su mirada.",
    fieldNote: "Elige dónde luchar antes de provocarlo. Un refugio bajo y un cubo de agua te dan más control que perseguir sus teletransportes.",
    author: "Vincent Yanez",
    modelSource: "https://sketchfab.com/3d-models/minecraft-enderman-216552744553461d960dd0cdf3a0592a",
    name: "Enderman",
    color: "#be9bff",
    className: "enderman",
    tag: "Neutral · Teletransportación",
    summary: "Mientras no lo mires directamente, suele ignorarte. Si lo provocas, prepara agua y busca refugio bajo techo.",
    health: "40 puntos · 20 corazones",
    behavior: "Neutral. Se enfada si lo atacas o si lo miras a los ojos sin protección; al enfadarse corre y se teletransporta.",
    habitat: "Puede aparecer en el Overworld, el Nether y el End, con reglas de luz y bioma distintas según la dimensión.",
    drops: "Perlas de Ender. También puede soltar el bloque que lleva en las manos.",
    strategy: "Evita su mirada usando una calabaza tallada o mirando al suelo. Un espacio de dos bloques de alto impide que entre; el agua le hace daño.",
    details: "La lluvia y el agua hacen que se teletransporte para escapar. Su largo alcance y teletransportación dificultan perseguirlo en terreno abierto.",
    wiki: "https://minecraft.wiki/w/Enderman",
  },
  {
    id: "skeleton",
    model: "/3d/minecraft_-_skeleton.glb",
    attack: "Arco y flechas",
    dimension: "Overworld · Nether",
    signal: "La distancia es su arma.",
    fieldNote: "No avances por un pasillo abierto sin cobertura. Cierra la distancia mientras bloqueas sus disparos.",
    author: "Vincent Yanez",
    modelSource: "https://sketchfab.com/3d-models/minecraft-skeleton-3ea04380d84f498a81f07043acad19f0",
    name: "Esqueleto",
    color: "#d9dfdc",
    className: "skeleton",
    tag: "Arquero · Ataque a distancia",
    summary: "Dispara flechas desde lejos y esquiva tus pasos. Acércate en zigzag, usa un escudo o espera a que amanezca.",
    health: "20 puntos · 10 corazones",
    behavior: "Hostil. Mantiene distancia y dispara flechas con un arco; puede llevar equipo adicional según el lugar y la dificultad.",
    habitat: "Overworld oscuro, sobre todo de noche y en cuevas; también aparece en estructuras y biomas especiales.",
    drops: "Huesos y flechas. Puede dejar su arco u objetos equipados con menor frecuencia.",
    strategy: "Bloquea las flechas con un escudo y avanza de cobertura en cobertura. El movimiento lateral dificulta que te acierte; la luz solar puede quemarlo.",
    details: "Los esqueletos son no muertos. Cuando un esqueleto mata a un creeper con una flecha, el creeper puede dejar un disco de música.",
    wiki: "https://minecraft.wiki/w/Skeleton",
  },
  {
    id: "spider",
    model: null,
    attack: "Saltos y contacto",
    dimension: "Overworld",
    signal: "Mira también hacia arriba.",
    fieldNote: "Una pared alta no siempre es una defensa. Deja espacio a tu alrededor y comprueba los bordes del refugio.",
    name: "Araña",
    color: "#ff885f",
    className: "spider",
    tag: "Rápida · Trepadora",
    summary: "Se mueve veloz y escala paredes. De día es neutral; de noche, ilumina bien los rincones y evita que te rodee.",
    health: "16 puntos · 8 corazones",
    behavior: "Hostil en la oscuridad y neutral con suficiente luz. Salta hacia el jugador y trepa superficies verticales.",
    habitat: "Overworld oscuro, en espacios amplios; puede trepar desde el suelo hasta techos y salientes.",
    drops: "Hilo y, en ocasiones, ojo de araña si la derrota un jugador o un lobo domesticado.",
    strategy: "Evita que trepe hasta una plataforma segura y vigila los flancos. Un techo bajo limita sus saltos; de día puede dejarte pasar si no la provocas.",
    details: "Las arañas pueden aparecer con efectos de estado en ciertas situaciones. La araña de cueva es una variante distinta, más pequeña y venenosa.",
    wiki: "https://minecraft.wiki/w/Spider",
  },
];

export function getMob(id: string) {
  return mobs.find((mob) => mob.id === id);
}

