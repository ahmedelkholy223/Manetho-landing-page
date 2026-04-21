export const landingPageContent = {
  hero: {
    headline: 'Bring Culture to Life with an AI Visitor Experience Layer Built for Museums',
    subheadline:
      'Manetho helps museums and heritage institutions transform static interpretation into interactive, multilingual, and intelligent visitor experiences—without rebuilding everything from scratch.',
    ctas: ['Book a Demo', 'Request Pilot Deck']
  },
  pillars: [
    'Multilingual Accessibility',
    'Richer Visitor Engagement',
    'Innovation Perception',
    'Scalable Experience Layer',
    'Measurable Interaction Potential',
    'Stronger Educational Storytelling'
  ],
  faq: [
    {
      question: 'How difficult is deployment?',
      answer:
        'Deployment can begin in a controlled pilot format to reduce technical and operational friction from day one.'
    },
    {
      question: 'Can this start as a pilot?',
      answer:
        'Yes. Pilot-first activation is the recommended path before expansion.'
    }
  ]
};

export function formatContactPayload(payload) {
  return {
    institution: String(payload?.institution ?? '').trim(),
    email: String(payload?.email ?? '').trim().toLowerCase(),
    message: String(payload?.message ?? '').trim()
  };
}
