import { awards, schoolHonors, papers } from "./data/portfolio";
import "./App.css";

const Arrow = () => <span aria-hidden="true">↗</span>;

export default function App() {
  return (
    <>
      <a className="skip-link" href="#main">
        Skip to content
      </a>
      <header className="site-header wrap">
        <a className="wordmark" href="#home" aria-label="Bryan Chung, home">
          bc<span>.</span>
        </a>
        <nav aria-label="Main navigation">
          <a href="#awards">Awards</a>
          <a href="#research">Research</a>
          <a href="#contact">
            Contact <Arrow />
          </a>
        </nav>
      </header>
      <main id="main" className="wrap">
        <section className="intro" id="home" aria-labelledby="intro-title">
          <div className="intro-main">
            <p className="eyebrow">
              <span className="status-dot" /> Brown University
            </p>
            <h1 id="intro-title">
              Bryan
              <br />
              Chung<span className="name-period">.</span>
            </h1>
            <p className="intro-copy">
              Applied mathematics, computer science,
              <br className="desktop-break" /> and a curiosity for how things
              work.
            </p>
            <a className="text-link intro-link" href="#awards">
              Selected awards & accomplishments{" "}
              <span aria-hidden="true">↓</span>
            </a>
          </div>
          <aside className="intro-note" aria-label="About Bryan">
            <span className="note-index">01 / ABOUT</span>
            <p>
              I study Applied Mathematics–Computer Science and Physics at Brown.
              My interests span algorithms, machine learning, and quantitative
              research.
            </p>
            <div className="note-rule" />
            <p className="note-small">
              A few things I’ve learned,
              <br />
              built, and been recognized for.
            </p>
            <a className="text-link" href="https://github.com/bryanc04">
              GitHub <Arrow />
            </a>
          </aside>
        </section>
        <section id="awards" className="section" aria-labelledby="awards-title">
          <div className="section-heading">
            <p className="eyebrow">01 / Recognition</p>
            <h2 id="awards-title">
              Awards & honors<span>.</span>
            </h2>
            <p>Across mathematics, science, and research.</p>
          </div>
          <div className="award-list">
            {awards.map((award, index) => (
              <article className="award-row" key={award.title}>
                <span className="row-number" aria-hidden="true">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <div className="award-name">
                  <p className="category">{award.field}</p>
                  <h3>{award.title}</h3>
                </div>
                <div className="award-result">
                  <p>{award.distinction}</p>
                  <span>{award.detail}</span>
                </div>
              </article>
            ))}
          </div>
          <div className="school-honors">
            <div>
              <p className="eyebrow">Loomis Chaffee School</p>
              <h3>Academic honors</h3>
            </div>
            <ul>
              {schoolHonors.map((honor) => (
                <li key={honor}>{honor}</li>
              ))}
            </ul>
          </div>
        </section>
        <section
          id="research"
          className="section"
          aria-labelledby="research-title"
        >
          <div className="section-heading">
            <p className="eyebrow">02 / Published work</p>
            <h2 id="research-title">
              Research<span>.</span>
            </h2>
            <p>Questions at the intersection of data and intelligence.</p>
          </div>
          <div className="papers">
            {papers.map((paper, index) => (
              <article className="paper" key={paper.doi}>
                <div className="paper-top">
                  <span className="category">IEEE ICAIC · 2024</span>
                  <span className="row-number">0{index + 1}</span>
                </div>
                <h3>
                  <a href={`https://doi.org/${paper.doi}`}>
                    {paper.title}
                    <span className="paper-arrow">
                      <Arrow />
                    </span>
                  </a>
                </h3>
                <p>{paper.description}</p>
                <span className="paper-topic">{paper.topic}</span>
              </article>
            ))}
          </div>
        </section>
        <aside className="personal-note">
          <span aria-hidden="true">♫</span>
          <p>
            Outside the problem set.
            <br />
            <span>Top 100 Kendrick Lamar listener on Apple Music, 2024.</span>
          </p>
        </aside>
        <section
          id="contact"
          className="contact section"
          aria-labelledby="contact-title"
        >
          <p className="eyebrow">03 / Get in touch</p>
          <h2 id="contact-title">
            Let’s compare notes<span>.</span>
          </h2>
          <a className="email-link" href="mailto:cbryan2829@gmail.com">
            cbryan2829@gmail.com <Arrow />
          </a>
          <div className="socials">
            <a className="text-link" href="https://github.com/bryanc04">
              GitHub <Arrow />
            </a>
            <a
              className="text-link"
              href="https://www.linkedin.com/in/bryan-chung-21b531265"
            >
              LinkedIn <Arrow />
            </a>
          </div>
        </section>
      </main>
      <footer className="wrap site-footer">
        <span>© {new Date().getFullYear()} Bryan Chung</span>
        <a href="#home">Back to top ↑</a>
      </footer>
    </>
  );
}
