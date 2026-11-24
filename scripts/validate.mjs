import { readFileSync, existsSync } from "node:fs";
import { join } from "node:path";

const dist = join(process.cwd(), "dist");
const errors = [];

function assert(condition, message) {
  if (!condition) errors.push(message);
}

// 1. Required built files exist in dist/
for (const file of ["index.html", "favicon.svg", "robots.txt", "sitemap.xml", "_headers"]) {
  assert(existsSync(join(dist, file)), `Missing built file in dist/: ${file}`);
}

const htmlPath = join(dist, "index.html");
if (existsSync(htmlPath)) {
  const html = readFileSync(htmlPath, "utf8");

  // 2. Canonical & heading semantics
  assert(html.includes('<link rel="canonical" href="https://thomstech.com/">') || html.includes('<link rel="canonical" href="https://thomstech.com/" />'), "Missing canonical URL https://thomstech.com/");
  const h1Matches = html.match(/<h1[\s>]/g) || [];
  assert(h1Matches.length === 1, `Expected exactly 1 <h1>, found ${h1Matches.length}`);

  // 3. Valid JSON-LD with Person, WebSite, and 4 IT tools
  const ldMatch = html.match(/<script type="application\/ld\+json">([\s\S]*?)<\/script>/);
  assert(Boolean(ldMatch), "Missing JSON-LD structured data block");
  if (ldMatch) {
    try {
      const ld = JSON.parse(ldMatch[1]);
      const graph = ld["@graph"] || [];
      const person = graph.find((n) => n["@type"] === "Person");
      const list = graph.find((n) => n["@type"] === "ItemList");
      assert(person?.name === "Steve Thoms", "JSON-LD Person name must be Steve Thoms");
      assert(person?.jobTitle === "Microsoft Technology Lead", "JSON-LD Person jobTitle must be Microsoft Technology Lead");
      assert(list?.itemListElement?.length === 4, "JSON-LD ItemList must contain exactly 4 IT tools");
    } catch (err) {
      errors.push(`Invalid JSON-LD: ${err.message}`);
    }
  }

  // 4. Required live IT tool URLs and profile links
  const requiredUrls = [
    "https://myrenewaldesk.app/",
    "https://solvestack-ai.app/",
    "https://seatleak.app/",
    "https://www.m365-barometer.com/",
    "https://www.linkedin.com/in/steve-thoms-81381990",
    "https://github.com/sthoms12",
    "https://x.com/thomstech12",
  ];
  for (const url of requiredUrls) {
    assert(html.includes(url), `Missing expected URL in dist/index.html: ${url}`);
  }

  // 5. Ensure decoupled publications and consumer sites are NOT linked here
  const forbiddenTerms = [
    "thedriftmonthly",
    "internetcasefiles",
    "rootcausecasebook",
    "checkmycarcode",
    "napmovies",
    "formuladeck",
    "stainlookup",
    "omniunit",
    "b4wemeet",
    "workaicompare",
  ];
  const lowerHtml = html.toLowerCase();
  for (const term of forbiddenTerms) {
    assert(!lowerHtml.includes(term), `Decoupled project reference found in dist/index.html: ${term}`);
  }
}

if (errors.length > 0) {
  console.error("Validation failed:");
  for (const err of errors) console.error(`  - ${err}`);
  process.exit(1);
}

console.log("All Astro dist/ checks passed for thomstech.com.");
