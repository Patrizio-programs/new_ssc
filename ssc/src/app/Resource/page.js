import React from "react";

const topics = [
  {
    id: "gramatica",
    title: "Spanish Nouns",
    desc: "Important rules for Spanish nouns and their usage.",
    lesson: "https://wayground.com/embed/presentation/6570c08ec46faa5551a7a2f6",
    practice: "https://wayground.com/admin/quiz/6573d7ae50154d53f388090d",
  },
  {
    id: "vocabulario",
    title: "Present Tense Verbs ",
    desc: "The present tense basics.",
    lesson: "https://wayground.com/embed/presentation/6574e0a9caf370c505f49096",
    practice: "https://wayground.com/embed/quiz/658626b76d778b08a63fff1f",
  },
  {
    id: "conjugacion",
    title: "Preterite Tense Verbs",
    desc: "Simple past tense.",
    lesson: "https://wayground.com/embed/presentation/65b7d008896465a654a93a9f",
    practice: "https://wayground.com/embed/quiz/65d14a3c9c273fc8ccc6ec15",
  },

  {
    id: "idiomaticas",
    title: "Conditional Tense Verbs",
    desc: "Conjugating and learning Conditional Tense.",
    lesson: "https://wayground.com/embed/presentation/65da3dc76aa94593a2fd3f94",
    practice: "https://wayground.com/embed/quiz/69054d09fd9d4303f7e21368",
  },
];

export default function Resource() {
  return (
    <div className="resource-page">
      <header className="resource-header">
        <h1>Spanish Learning Resources</h1>
        <p className="subtitle">
          Select a topic to access some free lessons and quizzes.
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
                  View lesson
                </a>
                <a
                  className="link"
                  href={t.practice}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Quiz →
                </a>
              </div>
            </article>
          ))}
        </div>
      </main>
      <br></br>

      <h4 className="resource-header">Spanish Vocabulary</h4>

      <ul className="vocab-list">
        <li>
          <a
            target="blank"
            href="https://knowt.com/flashcards/7ef0f618-d26e-40bf-897f-3d934a3413da"
          >
            Essential Beginner Spanish Verbs
          </a>
        </li>
        <li>
          <a
            target="blank"
            href="https://knowt.com/flashcards/e5b429b4-2f48-4992-84e6-ce1460a74c10"
          >
            Members of the Family in Spanish
          </a>
        </li>

        <li>
          <a
            target="blank"
            href="https://knowt.com/flashcards/6f9db427-52c5-44b2-a357-46b269a47da8"
          >
            Common Adverbs in Spanish
          </a>
        </li>

        <li>
          <a
            target="blank"
            href="https://knowt.com/flashcards/9ab4a7f5-9d70-44e2-a04a-25eb733d0bb1"
          >
            Common Spanish Nouns for Beginners
          </a>
        </li>
      </ul>

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
                    background: #083045;
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
                .vocab-list {
                    list-style: none;
                    padding: 0;
                    margin: 20px 0;
                }
                .vocab-list li {
                    margin-bottom: 15px;
                    padding: 10px;
                    background-color: #f8fafc;
                    border-radius: 6px;
                }
            `}</style>
    </div>
  );
}
