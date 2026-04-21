import { useEffect, useState } from 'react';

const fallback = {
  hero: {
    headline: 'Bring Culture to Life with an AI Visitor Experience Layer Built for Museums',
    subheadline:
      'Manetho helps museums and heritage institutions transform static interpretation into interactive, multilingual, and intelligent visitor experiences.',
    ctas: ['Book a Demo', 'Request Pilot Deck']
  },
  pillars: []
};

export function App() {
  const [content, setContent] = useState(fallback);
  const [status, setStatus] = useState('idle');

  useEffect(() => {
    fetch('/api/content')
      .then((res) => res.json())
      .then((data) => setContent(data))
      .catch(() => setStatus('offline'));
  }, []);

  return (
    <main>
      <header className="hero">
        <p className="badge">AI-powered interpretation • Multilingual • Pilot-ready</p>
        <h1>{content.hero.headline}</h1>
        <p>{content.hero.subheadline}</p>
        <div className="actions">
          {content.hero.ctas?.map((cta) => (
            <button key={cta} type="button">
              {cta}
            </button>
          ))}
        </div>
      </header>

      <section>
        <h2>Static Interpretation Is No Longer Enough</h2>
        <p>
          Visitors expect context, narrative depth, and language accessibility. Manetho closes the gap
          between collection value and visitor experience.
        </p>
      </section>

      <section>
        <h2>Why Institutions Use Manetho</h2>
        <ul>
          {content.pillars?.map((pillar) => (
            <li key={pillar}>{pillar}</li>
          ))}
        </ul>
      </section>

      <section>
        <h2>Start with a Pilot. Build a Smarter Visitor Experience.</h2>
        <p>{status === 'offline' ? 'API unavailable: showing fallback content.' : 'Pilot-first deployment available now.'}</p>
      </section>
    </main>
  );
}
