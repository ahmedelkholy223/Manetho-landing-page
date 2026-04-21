import cors from 'cors';
import express from 'express';
import { formatContactPayload, landingPageContent } from './content.js';

export const app = express();

app.use(cors({ origin: process.env.FRONTEND_ORIGIN ?? '*' }));
app.use(express.json());

app.get('/api/health', (_req, res) => {
  res.json({ status: 'ok' });
});

app.get('/api/content', (_req, res) => {
  res.json(landingPageContent);
});

app.post('/api/contact', (req, res) => {
  const payload = formatContactPayload(req.body);

  if (!payload.institution || !payload.email.includes('@') || !payload.message) {
    return res.status(400).json({ error: 'institution, email, and message are required' });
  }

  return res.status(201).json({
    message: 'Inquiry received',
    data: payload
  });
});
