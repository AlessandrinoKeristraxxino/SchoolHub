import { BookOpen } from "lucide-react";
import { Link } from "react-router";

export default function Lessons() {
  return (
    <section className="page-section">
      <div className="section-heading">
        <div>
          <span className="eyebrow">IL TUO PERCORSO</span>
          <h1 className="page-title">Lezioni</h1>
          <p className="page-description">
            Consulta qui le lezioni e i materiali dei tuoi corsi.
          </p>
        </div>
      </div>
      <div className="empty-state">
        <span className="empty-state-icon" aria-hidden="true">
          <BookOpen size={28} />
        </span>
        <h2>Ancora nessuna lezione</h2>
        <p>
          Le tue lezioni e i relativi materiali appariranno qui quando saranno
          disponibili.
        </p>
        <Link className="text-link" to="/add">
          Aggiungi materiale
        </Link>
      </div>
    </section>
  );
}