import Image from "next/image";

export default function HeroCreeper() {
  return (
    <div className="hero-creeper-stage">
      <div className="hero-creeper-static">
        <Image
          className="hero-creeper-image"
          src="/mobs/creeper.png"
          alt="Creeper de Minecraft de cuerpo completo"
          width={1024}
          height={1024}
          priority
          draggable={false}
        />
      </div>
    </div>
  );
}
