import Link from "next/link";
import type { CSSProperties } from "react";
import { mobs } from "../data/mobs";

export default function EnemyWiki() {
  return (
    <div className="mob-list">
      {mobs.map((mob, index) => (
        <Link
          className={`mob-row reveal ${mob.className}`}
          key={mob.id}
          href={`/${mob.id}`}
          style={{ "--mob": mob.color } as CSSProperties}
          aria-label={`Explorar la página de ${mob.name}`}
        >
          <span className="number">{String(index + 1).padStart(2, "0")}</span>
          <span className="mob-title">{mob.name}</span>
          <span className="mob-info">
            <span className="tag">{mob.tag}</span>
            <span className="mob-summary">{mob.summary}</span>
          </span>
          <span className="mob-index" aria-hidden="true">↗</span>
          <span className="mob-figure" aria-hidden="true" />
        </Link>
      ))}
    </div>
  );
}
