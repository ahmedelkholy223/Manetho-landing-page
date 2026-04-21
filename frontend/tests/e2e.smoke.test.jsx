import { render, screen } from '@testing-library/react';
import { describe, expect, it, vi } from 'vitest';
import { App } from '../src/App.jsx';

describe('Landing page smoke flow', () => {
  it('shows all critical conversion sections', async () => {
    vi.stubGlobal(
      'fetch',
      vi.fn(() =>
        Promise.resolve({
          json: () =>
            Promise.resolve({
              hero: {
                headline: 'Bring Culture to Life with an AI Visitor Experience Layer Built for Museums',
                subheadline: 'sub',
                ctas: ['Book a Demo', 'Request Pilot Deck']
              },
              pillars: ['Multilingual Accessibility']
            })
        })
      )
    );

    render(<App />);

    expect(await screen.findByText(/Bring Culture to Life/i)).toBeInTheDocument();
    expect(screen.getByText(/Static Interpretation Is No Longer Enough/i)).toBeInTheDocument();
    expect(screen.getByText(/Why Institutions Use Manetho/i)).toBeInTheDocument();
    expect(screen.getByText(/Start with a Pilot/i)).toBeInTheDocument();
  });
});
