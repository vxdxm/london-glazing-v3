/**
 * Build-time prerender.
 *
 * Runs the production bundle in a real browser and writes each route's fully
 * rendered HTML to dist/<route>/index.html, so crawlers see the page-specific
 * <title>, meta description, headings and FAQ content in the raw HTML.
 *
 * Usage: node scripts/prerender.mjs  (after `vite build`)
 */
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { preview } from "vite";
import { chromium } from "playwright";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const dist = path.join(root, "dist");

function routesFromSitemaps() {
  const dir = path.join(root, "public");
  const urls = new Set(["/"]);
  for (const file of fs.readdirSync(dir)) {
    if (!/^sitemap.*\.xml$/.test(file)) continue;
    const xml = fs.readFileSync(path.join(dir, file), "utf8");
    for (const m of xml.matchAll(/<loc>\s*([^<\s]+)\s*<\/loc>/g)) {
      const loc = m[1];
      if (!loc.includes("secondaryglazingspecialist.com")) continue;
      if (loc.endsWith(".xml")) continue;
      let p = new URL(loc).pathname.replace(/\/+$/, "");
      urls.add(p === "" ? "/" : p);
    }
  }
  return [...urls].sort();
}

const routes = process.env.PRERENDER_ROUTES
  ? process.env.PRERENDER_ROUTES.split(",").map((r) => r.trim())
  : routesFromSitemaps();
console.log(`Prerendering ${routes.length} routes...`);


const server = await preview({ preview: { port: 4183, strictPort: true } });
const base = `http://localhost:4183`;
const browser = await chromium.launch(
  process.env.PRERENDER_CHROMIUM_PATH ? { executablePath: process.env.PRERENDER_CHROMIUM_PATH } : {}
);
const page = await browser.newPage();

let ok = 0;
const failures = [];

for (const route of routes) {
  try {
    await page.goto(base + route, { waitUntil: "networkidle", timeout: 45000 });
    await page.waitForSelector("#root h1, #root main", { timeout: 15000 }).catch(() => {});
    const html = await page.content();
    // Write flat files (dist/cost-guide.html) so Netlify serves the canonical
    // non-trailing-slash URL with a 200 instead of 301-ing to /cost-guide/.
    const outFile = route === "/" ? path.join(dist, "index.html") : path.join(dist, `${route}.html`);
    fs.mkdirSync(path.dirname(outFile), { recursive: true });
    fs.writeFileSync(outFile, html);
    ok++;
  } catch (err) {
    failures.push(`${route}: ${err.message}`);
  }
}

await browser.close();
await server.close();

console.log(`Prerendered ${ok}/${routes.length} routes.`);
if (failures.length) {
  console.log("Failures:\n" + failures.join("\n"));
}
