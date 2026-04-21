import { describe, expect, it } from 'vitest';
import { formatContactPayload } from '../src/content.js';

describe('formatContactPayload', () => {
  it('normalizes and trims values', () => {
    const payload = formatContactPayload({
      institution: '  Museum of Alexandria ',
      email: 'INFO@MANETHO.AI ',
      message: ' pilot please '
    });

    expect(payload).toEqual({
      institution: 'Museum of Alexandria',
      email: 'info@manetho.ai',
      message: 'pilot please'
    });
  });
});
