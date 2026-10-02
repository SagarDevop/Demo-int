import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const rootDir = path.resolve(__dirname, '..');

console.log('🎨 Applying warm brownish-sand architectural cream tone (#F4F0E8)...');

// 1. Update assets/css/style.css
const cssPath = path.join(rootDir, 'assets', 'css', 'style.css');
if (fs.existsSync(cssPath)) {
  let css = fs.readFileSync(cssPath, 'utf8');

  // Replace background and sand-tint variables with warm brownish-sand tint (#F4F0E8 & #E8E2D8)
  css = css.replace(/--background:\s*#[a-f0-9]{6}/gi, '--background:#F4F0E8');
  css = css.replace(/--foreground:\s*#[a-f0-9]{6}/gi, '--foreground:#181614');
  css = css.replace(/--sand-tint:\s*#[a-f0-9]{6}/gi, '--sand-tint:#E8E2D8');
  css = css.replace(/background-color:\s*#f8f7f5/gi, 'background-color:#F4F0E8');
  css = css.replace(/#f8f7f5/gi, '#F4F0E8');
  css = css.replace(/#F8F7F5/g, '#F4F0E8');

  fs.writeFileSync(cssPath, css, 'utf8');
  console.log('✅ Updated assets/css/style.css for warm brownish-sand tone (#F4F0E8).');
}

// 2. Update all HTML files
const htmlFiles = fs.readdirSync(rootDir).filter(f => f.endsWith('.html'));

let updatedCount = 0;
htmlFiles.forEach(file => {
  const filePath = path.join(rootDir, file);
  let html = fs.readFileSync(filePath, 'utf8');

  // Replace all background classes with warm brownish-sand tone (#F4F0E8)
  html = html.replace(/bg-\[\#F8F7F5\]/g, 'bg-[#F4F0E8]');
  html = html.replace(/bg-\[\#FAF9F6\]/g, 'bg-[#F4F0E8]');
  html = html.replace(/bg-\[\#F5F4F0\]/g, 'bg-[#F4F0E8]');
  html = html.replace(/bg-\[\#0C0C0C\]/g, 'bg-[#F4F0E8]');

  // Replace text colors for deep espresso charcoal contrast (#181614)
  html = html.replace(/text-\[\#111111\]/g, 'text-[#181614]');
  html = html.replace(/selection:bg-\[\#111111\]/g, 'selection:bg-[#181614]');

  fs.writeFileSync(filePath, html, 'utf8');
  updatedCount++;
});

console.log(`✅ Applied warm brownish-sand tone (#F4F0E8) across all ${updatedCount} HTML pages!`);
