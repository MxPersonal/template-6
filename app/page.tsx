const data = {
  "id": 6,
  "kind": "Portfolio",
  "theme": "portfolio",
  "brand": "HOSSEIN X",
  "kicker": "Independent creative developer · Tehran / Everywhere",
  "title": "Digital experiences with a pulse.",
  "intro": "I design and build expressive interfaces where code, motion, and brand meet—without losing clarity, performance, or purpose.",
  "primary": "View selected work",
  "secondary": "About the studio",
  "metrics": [
    [
      "08",
      "years making"
    ],
    [
      "41",
      "projects shipped"
    ],
    [
      "11",
      "design awards"
    ]
  ],
  "sectionTitle": "Form follows feeling.",
  "sectionCopy": "Strategy, design, and front-end craft brought together by one point of view from first frame to final deploy.",
  "cards": [
    [
      "A",
      "Creative direction",
      "Visual systems and interaction concepts that give ambitious products a distinct point of view."
    ],
    [
      "B",
      "Digital design",
      "Interfaces built around hierarchy, rhythm, and the precise moment a user understands what to do."
    ],
    [
      "C",
      "Creative development",
      "Fast, accessible builds with motion that supports the story instead of competing with it."
    ]
  ],
  "showcaseTitle": "Selected work / 2024—26",
  "showcases": [
    [
      "Morrow",
      "Brand platform · Art direction",
      "A living identity for a climate intelligence company.",
      "A1"
    ],
    [
      "Nocturne",
      "Commerce · Creative development",
      "An after-dark fragrance store built around ritual.",
      "B4"
    ],
    [
      "Parallel",
      "Product · Interaction design",
      "A multiplayer workspace with a human tempo.",
      "C7"
    ]
  ],
  "quote": "Hossein found the one idea that made the whole product feel inevitable—and then built it beautifully.",
  "quoteBy": "Elena Rossi — Founder, Morrow",
  "cta": "Have a difficult idea?",
  "footerLine": "Available for select collaborations in 2026."
} as const;

function Arrow() {
  return <span aria-hidden="true">↗</span>;
}

function Mark() {
  return (
    <span className="mark" aria-hidden="true">
      <i />
      <i />
      <i />
    </span>
  );
}

export default function Home() {
  return (
    <main data-theme={data.theme}>
      <nav className="nav shell" aria-label="Primary navigation">
        <a className="brand" href="#top"><Mark />{data.brand}</a>
        <div className="navLinks">
          <a href="#expertise">Expertise</a>
          <a href="#work">Work</a>
          <a href="#about">About</a>
        </div>
        <a className="navCta" href="#contact">Let&apos;s talk <Arrow /></a>
      </nav>

      <section className="hero shell" id="top">
        <div className="heroCopy">
          <p className="eyebrow">{data.kicker}</p>
          <h1>{data.title}</h1>
          <p className="lede">{data.intro}</p>
          <div className="actions">
            <a className="button primary" href="#work">{data.primary} <Arrow /></a>
            <a className="button secondary" href="#expertise">{data.secondary}</a>
          </div>
        </div>
        <div className="heroVisual" aria-label="Featured project preview">
          <div className="orb orbOne" />
          <div className="orb orbTwo" />
          <div className="visualTop"><span>Live overview</span><span className="status">● Updated now</span></div>
          <div className="visualCenter">
            <span className="visualLabel">Current signal</span>
            <strong>{data.metrics[0][0]}</strong>
            <span>{data.metrics[0][1]}</span>
          </div>
          <div className="bars" aria-hidden="true">
            {[42, 66, 54, 82, 72, 96, 84].map((height, index) => <i key={index} style={{ height: height + "%" }} />)}
          </div>
          <div className="visualFoot"><span>{data.kind}</span><span>© 2026</span></div>
        </div>
      </section>

      <section className="metrics shell" aria-label="Key metrics">
        {data.metrics.map(([value, label]) => (
          <div className="metric" key={label}><strong>{value}</strong><span>{label}</span></div>
        ))}
      </section>

      <section className="section shell" id="expertise">
        <header className="sectionHead">
          <p className="sectionIndex">01 / Approach</p>
          <div><h2>{data.sectionTitle}</h2><p>{data.sectionCopy}</p></div>
        </header>
        <div className="featureGrid">
          {data.cards.map(([code, title, copy], index) => (
            <article className="feature" key={title}>
              <span className="featureCode">{code}</span>
              <h3>{title}</h3>
              <p>{copy}</p>
              <span className="featureArrow">0{index + 1} <Arrow /></span>
            </article>
          ))}
        </div>
      </section>

      <section className="work" id="work">
        <div className="shell">
          <header className="workHead"><p className="sectionIndex">02 / Selected</p><h2>{data.showcaseTitle}</h2></header>
          <div className="showcaseGrid">
            {data.showcases.map(([title, meta, copy, badge], index) => (
              <article className="showcase" key={title}>
                <div className={'art art' + (index + 1)}>
                  <span className="artNumber">0{index + 1}</span>
                  <div className="artShape" />
                  <span className="artBadge">{badge}</span>
                </div>
                <p className="showMeta">{meta}</p>
                <h3>{title}</h3>
                <p>{copy}</p>
                <a href="#contact" aria-label={'Learn more about ' + title}>View details <Arrow /></a>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="quote shell" id="about">
        <p className="sectionIndex">03 / Perspective</p>
        <blockquote>“{data.quote}”</blockquote>
        <p className="quoteBy">{data.quoteBy}</p>
      </section>

      <section className="contact" id="contact">
        <div className="shell contactInner">
          <p className="eyebrow">Start a conversation</p>
          <h2>{data.cta}</h2>
          <a className="roundLink" href="mailto:hello@example.com" aria-label="Send an email"><Arrow /></a>
        </div>
      </section>

      <footer className="footer shell">
        <a className="brand" href="#top"><Mark />{data.brand}</a>
        <p>{data.footerLine}</p>
        <div><a href="#top">Instagram</a><a href="#top">LinkedIn</a><a href="#top">Back to top ↑</a></div>
      </footer>
    </main>
  );
}
