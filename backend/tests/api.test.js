import request from 'supertest';
import { describe, expect, it } from 'vitest';
import { app } from '../src/app.js';

describe('API routes', () => {
  it('returns landing page content', async () => {
    const res = await request(app).get('/api/content');
    expect(res.status).toBe(200);
    expect(res.body.hero.headline).toContain('Bring Culture to Life');
  });

  it('validates contact payload', async () => {
    const badRes = await request(app).post('/api/contact').send({});
    expect(badRes.status).toBe(400);

    const okRes = await request(app).post('/api/contact').send({
      institution: 'Test Museum',
      email: 'team@test.org',
      message: 'Need a demo'
    });

    expect(okRes.status).toBe(201);
    expect(okRes.body.data.institution).toBe('Test Museum');
  });
});
