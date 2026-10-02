import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import jsBeautify from 'js-beautify';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const rootDir = path.resolve(__dirname, '..');

const htmlBeautify = jsBeautify.html;

const files = fs.readdirSync(rootDir).filter(f => f.endsWith('.html'));

console.log(`✨ Beautifying and formatting ${files.length} HTML files section-by-section...`);

const beautifyOptions = {
  indent_size: 2,
  indent_char: ' ',
  max_preserve_newlines: 1,
  preserve_newlines: true,
  indent_inner_html: true,
  extra_liners: ['head', 'body', 'header', 'nav', 'main', 'section', 'footer', 'script', 'style', '/header', '/nav', '/main', '/section', '/footer'],
  wrap_line_length: 0,
  unformatted: ['code', 'pre', 'script', 'style']
};

let count = 0;
files.forEach(file => {
  const filePath = path.join(rootDir, file);
  const rawHtml = fs.readFileSync(filePath, 'utf8');
  
  const formattedHtml = htmlBeautify(rawHtml, beautifyOptions);
  
  fs.writeFileSync(filePath, formattedHtml, 'utf8');
  count++;
});

console.log(`✅ Successfully formatted all ${count} HTML files with clean section-by-section tags & indentation!`);
