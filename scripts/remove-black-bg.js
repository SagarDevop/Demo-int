import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const rootDir = path.resolve(__dirname, '..');

console.log('🎨 Removing all black dark backgrounds and applying warm creamy white background (#F8F7F5)...');

// 1. Update assets/css/style.css
const cssPath = path.join(rootDir, 'assets', 'css', 'style.css');
if (fs.existsSync(cssPath)) {
  let css = fs.readFileSync(cssPath, 'utf8');
  
  // Replace dark background CSS variables and rules with warm creamy white (#F8F7F5)
  css = css.replace(/--background:\s*#0c0c0c/gi, '--background:#F8F7F5');
  css = css.replace(/--foreground:\s*#f8f7f5/gi, '--foreground:#111111');
  css = css.replace(/--sand-tint:\s*#1a1a1a/gi, '--sand-tint:#EAE6E1');
  css = css.replace(/\.dark\s*main\s*\{\s*background-color:\s*#0c0c0c;\s*color:\s*#f8f7f5\s*\}/gi, '.dark main{background-color:#F8F7F5;color:#111111}');
  css = css.replace(/#0c0c0c/gi, '#F8F7F5');

  fs.writeFileSync(cssPath, css, 'utf8');
  console.log('✅ Updated assets/css/style.css for warm creamy white background.');
}

// 2. Update assets/js/theme.js
const themeJsPath = path.join(rootDir, 'assets', 'js', 'theme.js');
const warmThemeJs = `(function(){try{document.documentElement.classList.remove('dark');localStorage.setItem('theme','light');}catch(e){}})();

function toggleTheme(){
  document.documentElement.classList.remove('dark');
  localStorage.setItem('theme','light');
}`;
fs.writeFileSync(themeJsPath, warmThemeJs, 'utf8');
console.log('✅ Updated assets/js/theme.js to enforce warm light theme.');

// 3. Update all HTML files
const htmlFiles = fs.readdirSync(rootDir).filter(f => f.endsWith('.html'));

let updatedCount = 0;
htmlFiles.forEach(file => {
  const filePath = path.join(rootDir, file);
  let html = fs.readFileSync(filePath, 'utf8');

  // A. Replace initial preloader black background (bg-[#0C0C0C]) with warm creamy white (bg-[#F8F7F5])
  html = html.replace(/class="fixed inset-0 z-\[99999\] bg-\[\#0C0C0C\] text-\[\#F8F7F5\]/g, 'class="fixed inset-0 z-[99999] bg-[#F8F7F5] text-[#111111] border-b border-black/10 shadow-2xl');
  html = html.replace(/<h1 class="text-5xl sm:text-7xl md:text-8xl font-black tracking-\[-0\.03em\] uppercase text-white font-sans">LOTUS<\/h1>/g, '<h1 class="text-5xl sm:text-7xl md:text-8xl font-black tracking-[-0.03em] uppercase text-[#111111] font-sans">LOTUS</h1>');
  html = html.replace(/text-white text-base font-bold/g, 'text-[#111111] text-base font-bold');
  html = html.replace(/bg-gradient-to-r from-amber-300 via-white to-amber-200/g, 'bg-gradient-to-r from-amber-700 via-amber-600 to-amber-800');
  html = html.replace(/bg-white\/10 overflow-hidden relative rounded-full/g, 'bg-black/10 overflow-hidden relative rounded-full');

  // B. Clean body tag classes
  html = html.replace(/body class="bg-\[\#F8F7F5\] dark:bg-\[\#0C0C0C\] text-\[\#111111\] dark:text-\[\#F8F7F5\]/g, 'body class="bg-[#F8F7F5] text-[#111111]');

  // C. Replace dark background utility classes with warm creamy white equivalents
  html = html.replace(/dark:bg-\[\#0C0C0C\]/g, 'dark:bg-[#F8F7F5]');
  html = html.replace(/dark:bg-\[\#141414\]/g, 'dark:bg-[#F8F7F5]');
  html = html.replace(/dark:bg-\[\#181818\]/g, 'dark:bg-[#F8F7F5]');
  html = html.replace(/dark:bg-\[\#1a1a1a\]/g, 'dark:bg-[#F8F7F5]');
  html = html.replace(/dark:bg-\[\#1c1c1c\]/g, 'dark:bg-[#F8F7F5]');
  html = html.replace(/dark:bg-\[\#1e1e1e\]/g, 'dark:bg-[#F8F7F5]');
  html = html.replace(/dark:bg-black/g, 'dark:bg-[#F8F7F5]');
  html = html.replace(/dark:bg-neutral-900/g, 'dark:bg-[#F8F7F5]');
  html = html.replace(/dark:bg-neutral-950/g, 'dark:bg-[#F8F7F5]');
  html = html.replace(/dark:text-white/g, 'dark:text-[#111111]');
  html = html.replace(/dark:text-\[\#F8F7F5\]/g, 'dark:text-[#111111]');

  fs.writeFileSync(filePath, html, 'utf8');
  updatedCount++;
});

console.log(`✅ Applied warm creamy white background (#F8F7F5) across all ${updatedCount} HTML pages!`);
