import fs from 'node:fs';
import chromium from '@sparticuz/chromium';
import puppeteer from 'puppeteer-core';

const url = process.env.SCREENSHOT_URL || 'http://127.0.0.1:4173/for-museums';
const outputPath = process.env.SCREENSHOT_OUT || 'artifacts/for-museums.png';
const width = Number(process.env.SCREENSHOT_WIDTH || '1440');
const height = Number(process.env.SCREENSHOT_HEIGHT || '2200');

fs.mkdirSync('artifacts', { recursive: true });

const executablePath = await chromium.executablePath();
const browser = await puppeteer.launch({
  executablePath,
  args: chromium.args,
  headless: true,
  defaultViewport: { width, height },
});

const page = await browser.newPage();
await page.goto(url, { waitUntil: 'networkidle0' });
await page.screenshot({ path: outputPath, fullPage: true });
await browser.close();

console.log(`Saved screenshot to ${outputPath}`);
