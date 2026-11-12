import { BookOpen, GraduationCap } from "lucide-react";
import { Link } from "react-router";

export default function Home() {
  return (
    <section className="page-section">
      <div className="welcome-panel">
        <div className="welcome-copy">
          <span className="eyebrow">LA TUA AREA DI STUDIO</span>
          <h1 className="page-title">Benvenuto su ClassHub</h1>
          <p className="page-description">
            Organizza le tue lezioni e trova in un unico posto i materiali per
            studiare.
          </p>
          <Link className="button button-primary" to="/lessons">
            <BookOpen size={18} aria-hidden="true" />
            Vai alle lezioni
          </Link>
        </div>
        <div className="welcome-icon" aria-hidden="true">
          <GraduationCap size={64} strokeWidth={1.4} />
        </div>
      </div>
    </section>
  );
}