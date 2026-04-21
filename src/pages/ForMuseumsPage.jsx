import Section from '../components/Section';

const valuePillars = [
  {
    title: 'Multilingual Accessibility',
    body: 'Help more visitors understand collections in real time through a more accessible, language-friendly digital layer.',
  },
  {
    title: 'Richer Visitor Engagement',
    body: 'Move beyond passive interpretation and create a more interactive, memorable museum experience.',
  },
  {
    title: 'Innovation Perception',
    body: 'Demonstrate visible digital innovation in a way that enhances the institution’s public image and visitor appeal.',
  },
  {
    title: 'Scalable Experience Layer',
    body: 'Start with selected exhibits, zones, or themes, then expand gradually based on results and institutional priorities.',
  },
  {
    title: 'Measurable Interaction Potential',
    body: 'Create a framework for tracking engagement, usage, and pilot outcomes rather than relying only on assumptions.',
  },
  {
    title: 'Stronger Educational Storytelling',
    body: 'Support museums, educators, and heritage institutions with a more dynamic way to communicate context, meaning, and narrative.',
  },
];

const steps = [
  'Identify Priority Touchpoints: Select the artifacts, galleries, visitor journeys, or interpretive moments where Manetho can create the strongest impact.',
  'Deploy the Manetho Experience Layer: Introduce the AI-powered interpretation layer through a guided pilot format tailored to the institution’s environment.',
  'Activate Visitor Engagement: Allow visitors to access richer interpretation, multilingual understanding, and optional immersive storytelling experiences.',
  'Measure, Learn, Expand: Review pilot outcomes, engagement insights, and visitor response, then decide whether to scale across more collections or zones.',
];

const faqs = [
  {
    q: 'How difficult is deployment?',
    a: 'Deployment can begin in a controlled pilot format. Manetho is intended to reduce friction, not create a large technical burden from day one.',
  },
  {
    q: 'Do we need to rebuild our systems?',
    a: 'No. The pilot is designed as an experience layer, not a requirement to replace your full digital infrastructure.',
  },
  {
    q: 'Can this start as a pilot?',
    a: 'Yes. That is the recommended entry path. The pilot allows institutions to evaluate visitor response, operational fit, and expansion potential.',
  },
  {
    q: 'Can it be customized for specific exhibits or collections?',
    a: 'Yes. The pilot can be scoped around selected artifacts, galleries, themes, or visitor journeys.',
  },
  {
    q: 'Is this multilingual?',
    a: 'Yes. Multilingual accessibility is part of the strategic value of the experience.',
  },
  {
    q: 'Can this support both education and tourism goals?',
    a: 'Yes. Manetho is designed to sit at the intersection of interpretation, engagement, accessibility, and cultural storytelling.',
  },
];

export default function ForMuseumsPage() {
  return (
    <main>
      {/* Placeholder scaffold established first; blueprint copy mapped directly below in each section. */}
      <Section id="hero" className="hero">
        <div className="container hero-grid">
          <div>
            <p className="eyebrow">For Museums & Heritage Institutions</p>
            <h1>Bring Culture to Life with an AI Visitor Experience Layer Built for Museums</h1>
            <p className="lead">
              Manetho helps museums and heritage institutions transform static interpretation into interactive, multilingual, and intelligent visitor experiences—without rebuilding everything from scratch.
            </p>
            <div className="cta-row">
              <a className="btn btn-primary" href="#final-cta">Book a Demo</a>
              <a className="btn btn-secondary" href="#pilot-offer">Request Pilot Deck</a>
            </div>
            <p className="microcopy">Real-time interpretation • Multilingual visitor engagement • Optional AR storytelling • Pilot-ready deployment</p>
          </div>
          <aside className="panel">
            <h3>Hero Visual Placeholder</h3>
            <p>Premium black-and-yellow interface mockup layered over artifact interaction scene.</p>
          </aside>
        </div>
      </Section>

      <Section id="problem" eyebrow="Problem" title="Static Interpretation Is No Longer Enough">
        <p>Today’s visitors expect more than labels and passive viewing.</p>
        <p>
          They want to understand what they are looking at in the moment. They want context, language accessibility, narrative depth, and a more engaging experience that feels worthy of the objects in front of them.
        </p>
        <ul>
          <li>traditional interpretation tools often feel limited</li>
          <li>multilingual accessibility is increasingly important</li>
          <li>visitors want deeper interaction, not just observation</li>
          <li>custom digital projects can be expensive, slow, and difficult to scale</li>
        </ul>
        <p><strong>The opportunity is not just to digitize labels. It is to elevate how visitors experience culture.</strong></p>
      </Section>

      <Section id="solution" eyebrow="Solution" title="Meet Manetho">
        <p>Manetho is the AI cultural companion and visitor-experience layer for museums and heritage institutions.</p>
        <p>It is designed to help visitors do more than look at artifacts. It helps them understand, engage, and explore.</p>
        <ul>
          <li>real-time cultural understanding</li>
          <li>AI-powered interpretation and Q&amp;A</li>
          <li>multilingual accessibility</li>
          <li>optional immersive storytelling experiences</li>
          <li>scalable digital visitor engagement</li>
        </ul>
        <p>Instead of building a full custom stack from zero, institutions can activate a premium experience layer through a structured pilot and expand from there.</p>
      </Section>

      <Section id="value-pillars" eyebrow="Value Pillars" title="Why Institutions Use Manetho">
        <div className="card-grid">
          {valuePillars.map((item) => (
            <article key={item.title} className="card">
              <h3>{item.title}</h3>
              <p>{item.body}</p>
            </article>
          ))}
        </div>
      </Section>

      <Section id="how-it-works" eyebrow="How It Works" title="A Structured Path from Pilot to Expansion">
        <ol className="steps">
          {steps.map((step) => (
            <li key={step}>{step}</li>
          ))}
        </ol>
        <p><strong>Begin with a focused pilot. Expand with confidence.</strong></p>
      </Section>

      <Section id="pilot-offer" eyebrow="Pilot Offer" title="Introducing the Manetho Museum Experience Pilot">
        <p>A premium pilot designed to help institutions test a next-generation visitor experience layer in a controlled, practical format.</p>
        <h3>What’s Included</h3>
        <ul>
          <li>pilot duration with defined scope</li>
          <li>selected artifacts, galleries, or interpretive touchpoints</li>
          <li>AI-powered cultural interpretation layer</li>
          <li>multilingual-ready visitor engagement experience</li>
          <li>optional AR or immersive storytelling showcase</li>
          <li>QR-based or guided-access activation</li>
          <li>post-pilot reporting and engagement insights</li>
          <li>strategic recommendations for next-phase expansion</li>
        </ul>
        <p>This is not a vague collaboration discussion. It is a concrete, pilot-first offer that lowers decision friction while increasing institutional certainty.</p>
        <div className="cta-row">
          <a className="btn btn-secondary" href="#final-cta">Request Pilot Deck</a>
        </div>
        <p className="microcopy">Start small. Prove value. Scale with confidence.</p>
      </Section>

      <Section id="why-manetho" eyebrow="Why Manetho" title="Why Manetho Is Different">
        <p>Manetho is not just another museum app.</p>
        <p>
          It is not limited to static label replacement. It is not a basic audio-guide substitute. It is not a fragmented digital experiment that feels disconnected from the actual museum experience.
        </p>
        <p>
          Manetho is built as a premium interpretation and engagement layer that helps institutions modernize visitor experience without carrying the full burden of expensive custom digital development from day one.
        </p>
        <ul>
          <li>more dynamic than static labels</li>
          <li>more interactive than traditional audio-only tools</li>
          <li>more cohesive than fragmented standalone solutions</li>
          <li>more institutionally adaptable than generic travel apps</li>
          <li>more practical than starting with a full custom build</li>
        </ul>
      </Section>

      <Section id="trust-proof" eyebrow="Trust / Proof" title="Built for Credibility, Innovation, and Cultural Impact">
        <p><strong>Trusted by innovators working at the intersection of heritage, technology, and visitor experience</strong></p>
        <div className="card-grid">
          {['Awards & Recognition', 'Strategic Partnerships', 'Founder Credibility', 'Innovation Readiness', 'Media & Visibility', 'Pilot Readiness'].map((item) => (
            <article key={item} className="card">
              <h3>{item}</h3>
              <p>Placeholder trust block ready for logos, metrics, and institutional references.</p>
            </article>
          ))}
        </div>
      </Section>

      <Section id="use-cases" eyebrow="Use Cases" title="Where Manetho Can Create Value">
        <div className="card-grid">
          <article className="card"><h3>Museums</h3><p>Enhance interpretation, accessibility, and visitor engagement across permanent collections and key exhibits.</p></article>
          <article className="card"><h3>Archaeological Sites</h3><p>Support cultural understanding in environments where context and guided interpretation matter deeply.</p></article>
          <article className="card"><h3>Educational Institutions</h3><p>Create stronger bridges between heritage, learning, and digital engagement.</p></article>
          <article className="card"><h3>Exhibitions</h3><p>Introduce interactive storytelling and interpretation layers for temporary or thematic exhibitions.</p></article>
          <article className="card"><h3>Tourism-Linked Heritage Activations</h3><p>Support cultural tourism experiences through smarter interpretation and digital companion experiences.</p></article>
        </div>
      </Section>

      <Section id="faq" eyebrow="FAQ" title="Frequently Asked Questions">
        <div className="faq-list">
          {faqs.map((item) => (
            <details key={item.q}>
              <summary>{item.q}</summary>
              <p>{item.a}</p>
            </details>
          ))}
        </div>
      </Section>

      <Section id="final-cta" className="final-cta">
        <h2>Start with a Pilot. Build a Smarter Visitor Experience.</h2>
        <p>
          If your institution is exploring how to make visitor experience more interactive, multilingual, and digitally relevant, Manetho offers a clear place to start.
        </p>
        <p>Begin with a focused pilot. Measure real outcomes. Expand only when the value is proven.</p>
        <div className="cta-row">
          <a className="btn btn-primary" href="#hero">Book a Demo</a>
          <a className="btn btn-secondary" href="#pilot-offer">Request Pilot Deck</a>
          <a className="btn btn-link" href="#trust-proof">Explore Partnership</a>
        </div>
        <p className="microcopy">Museum-grade innovation, built to strengthen how visitors experience culture.</p>
      </Section>
    </main>
  );
}
