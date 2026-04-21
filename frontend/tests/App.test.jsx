import { render, screen } from '@testing-library/react';
import { describe, expect, it, vi } from 'vitest';
import { App } from '../src/App.jsx';

describe('App', () => {
  it('renders hero headline and CTAs', async () => {
    vi.stubGlobal(
      'fetch',
      vi.fn(() =>
        Promise.resolve({
          json: () =>
            Promise.resolve({
              hero: {
                headline: 'Test Hero',
                subheadline: 'Test Sub',
                ctas: ['Book a Demo', 'Request Pilot Deck']
              },
              pillars: []
            })
        })
      )
    );

    render(<App />);

    expect(await screen.findByText('Test Hero')).toBeInTheDocument();
    expect(screen.getByRole('button', { name: 'Book a Demo' })).toBeInTheDocument();
  });
});
