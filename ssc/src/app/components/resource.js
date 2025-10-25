import React from "react";

const topics = [
  {
    id: "gramatica",
    title: "Gramática básica",
    desc: "Reglas esenciales para construir oraciones correctamente.",
    lesson: "https://example.com/recursos/gramatica/leccion",
    practice: "https://example.com/recursos/gramatica/ejercicios",
  },
  {
    id: "vocabulario",
    title: "Vocabulario cotidiano",
    desc: "Palabras y frases comunes para la vida diaria.",
    lesson: "https://example.com/recursos/vocabulario/leccion",
    practice: "https://example.com/recursos/vocabulario/ejercicios",
  },
  {
    id: "conjugacion",
    title: "Conjugación de verbos",
    desc: "Tablas y reglas para los tiempos más usados.",
    lesson: "https://example.com/recursos/conjugacion/leccion",
    practice: "https://example.com/recursos/conjugacion/ejercicios",
  },
  {
    id: "pronunciacion",
    title: "Pronunciación",
    desc: "Consejos y ejercicios para mejorar la pronunciación.",
    lesson: "https://example.com/recursos/pronunciacion/leccion",
    practice: "https://example.com/recursos/pronunciacion/ejercicios",
  },
  {
    id: "idiomaticas",
    title: "Expresiones idiomáticas",
    desc: "Modismos y expresiones útiles en contextos reales.",
    lesson: "https://example.com/recursos/idiomaticas/leccion",
    practice: "https://example.com/recursos/idiomaticas/ejercicios",
  },
  {
    id: "comprension",
    title: "Comprensión auditiva",
    desc: "Audios y ejercicios para entender hablantes nativos.",
    lesson: "https://example.com/recursos/comprension/leccion",
    practice: "https://example.com/recursos/comprension/ejercicios",
  },
  {
    id: "lectura",
    title: "Lectura y escritura",
    desc: "Textos, actividades y correcciones para mejorar.",
    lesson: "https://example.com/recursos/lectura/leccion",
    practice: "https://example.com/recursos/lectura/ejercicios",
  },
  {
    id: "ninos",
    title: "Recursos para niños",
    desc: "Juegos, canciones y materiales didácticos infantiles.",
    lesson: "https://example.com/recursos/ninos/leccion",
    practice: "https://example.com/recursos/ninos/ejercicios",
  },
];

export default function Resource() {
  return (
    <div className="resource-page">
      <header className="resource-header">
        <h1>Recursos de Español</h1>
        <p className="subtitle">
          Selecciona un tema para acceder a lecciones y ejercicios
        </p>
      </header>

      <main>
        <div className="grid">
          {topics.map((t) => (
            <article
              key={t.id}
              className="card"
              aria-labelledby={`title-${t.id}`}
            >
              <div className="card-content">
                <h2 id={`title-${t.id}`}>{t.title}</h2>
                <p className="desc">{t.desc}</p>
              </div>
              <div className="card-actions">
                <a
                  className="btn"
                  href={t.lesson}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Ver lección
                </a>
                <a
                  className="link"
                  href={t.practice}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Ejercicios →
                </a>
              </div>
            </article>
          ))}
        </div>
      </main>

      <style>{`
                .resource-page {
                    font-family: Inter, ui-sans-serif, system-ui, -apple-system, "Segoe UI", Roboto, "Helvetica Neue", Arial;
                    color: #0f172a;
                    padding: 40px;
                    max-width: 1100px;
                    margin: 0 auto;
                }
                .resource-header {
                    text-align: center;
                    margin-bottom: 28px;
                }
                .resource-header h1 {
                    margin: 0;
                    font-size: 28px;
                    letter-spacing: -0.02em;
                }
                .subtitle {
                    margin: 8px 0 0;
                    color: #475569;
                }
                .grid {
                    display: grid;
                    grid-template-columns: repeat(1, 1fr);
                    gap: 18px;
                }
                @media (min-width: 640px) {
                    .grid { grid-template-columns: repeat(2, 1fr); }
                }
                @media (min-width: 980px) {
                    .grid { grid-template-columns: repeat(4, 1fr); }
                }
                .card {
                    background: linear-gradient(180deg, #ffffff 0%, #fbfdff 100%);
                    border: 1px solid rgba(15, 23, 42, 0.06);
                    border-radius: 10px;
                    padding: 16px;
                    display: flex;
                    flex-direction: column;
                    justify-content: space-between;
                    min-height: 140px;
                    box-shadow: 0 6px 20px rgba(2,6,23,0.04);
                    transition: transform .14s ease, box-shadow .14s ease;
                }
                .card:hover {
                    transform: translateY(-6px);
                    box-shadow: 0 12px 30px rgba(2,6,23,0.08);
                }
                .card h2 {
                    margin: 0 0 8px;
                    font-size: 16px;
                }
                .desc {
                    margin: 0;
                    font-size: 13px;
                    color: #475569;
                }
                .card-actions {
                    margin-top: 14px;
                    display: flex;
                    align-items: center;
                    gap: 10px;
                }
                .btn {
                    background: #0ea5a4;
                    color: white;
                    padding: 8px 12px;
                    border-radius: 8px;
                    text-decoration: none;
                    font-size: 13px;
                    box-shadow: 0 6px 16px rgba(14,165,164,0.12);
                }
                .btn:hover { opacity: 0.95; }
                .link {
                    color: #0f172a;
                    text-decoration: none;
                    font-size: 13px;
                    opacity: 0.85;
                }
                .link:hover { text-decoration: underline; opacity: 1; }
            `}</style>
    </div>
  );
}
