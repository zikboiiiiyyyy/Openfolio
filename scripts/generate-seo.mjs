import { readFile, writeFile } from 'node:fs/promises';
import { resolve } from 'node:path';
import ts from 'typescript';

const projectRoot = process.cwd();
const source = await readFile(resolve(projectRoot, 'src/data/portfolio.ts'), 'utf8');
const transpiled = ts.transpileModule(source, {
  compilerOptions: {
    module: ts.ModuleKind.ESNext,
    target: ts.ScriptTarget.ES2022,
  },
}).outputText;
const dataUrl = `data:text/javascript;base64,${Buffer.from(transpiled).toString('base64')}`;
const { portfolio } = await import(dataUrl);
const outputPath = resolve(projectRoot, 'dist/index.html');
let html = await readFile(outputPath, 'utf8');
const newline = String.fromCharCode(10);

function escapeAttribute(value) {
  return String(value)
    .replaceAll('&', '&amp;')
    .replaceAll('"', '&quot;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;');
}

function insertBeforeHeadEnd(tag) {
  const headEnd = html.indexOf('</head>');
  if (headEnd === -1) throw new Error('Could not find </head> in dist/index.html');
  html = `${html.slice(0, headEnd)}    ${tag}${newline}  ${html.slice(headEnd)}`;
}

function upsertMeta(attribute, name, content) {
  const startPrefix = `<meta ${attribute}="${name}"`;
  const start = html.indexOf(startPrefix);
  if (!content) {
    if (start !== -1) {
      const end = html.indexOf('>', start);
      const lineStart = html.lastIndexOf(newline, start) + 1;
      const lineEnd = html.indexOf(newline, end) + 1;
      html = `${html.slice(0, lineStart)}${html.slice(lineEnd)}`;
    }
    return;
  }

  const tag = `<meta ${attribute}="${escapeAttribute(name)}" content="${escapeAttribute(content)}" />`;
  if (start === -1) {
    insertBeforeHeadEnd(tag);
    return;
  }
  const end = html.indexOf('>', start);
  html = `${html.slice(0, start)}${tag}${html.slice(end + 1)}`;
}

const { seo, personal, theme } = portfolio;
const origin = seo.siteUrl.trim();
let socialImage = seo.openGraphImage.trim();
if (socialImage && origin && !socialImage.startsWith('https://') && !socialImage.startsWith('http://')) {
  socialImage = new URL(socialImage, origin).href;
}

const titleStart = html.indexOf('<title>');
const titleEnd = html.indexOf('</title>', titleStart);
if (titleStart !== -1 && titleEnd !== -1) {
  html = `${html.slice(0, titleStart)}<title>${escapeAttribute(seo.siteTitle)}</title>${html.slice(titleEnd + '</title>'.length)}`;
}

upsertMeta('name', 'description', seo.description);
upsertMeta('name', 'author', seo.author || personal.name);
upsertMeta('name', 'keywords', seo.keywords.join(', '));
upsertMeta('name', 'theme-color', theme.palettes[theme.defaultMode].background);
upsertMeta('property', 'og:title', seo.siteTitle);
upsertMeta('property', 'og:description', seo.description);
upsertMeta('property', 'og:type', 'website');
upsertMeta('property', 'og:image', socialImage);
upsertMeta('property', 'og:url', origin);

const faviconTag = `<link rel="icon" type="image/svg+xml" href="${escapeAttribute(seo.favicon)}" />`;
const faviconStart = html.indexOf('<link rel="icon"');
if (faviconStart === -1) insertBeforeHeadEnd(faviconTag);
else {
  const faviconEnd = html.indexOf('>', faviconStart);
  html = `${html.slice(0, faviconStart)}${faviconTag}${html.slice(faviconEnd + 1)}`;
}

await writeFile(outputPath, html);
console.log(`Generated static SEO metadata in ${outputPath} from src/data/portfolio.ts`);
