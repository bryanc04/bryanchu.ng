import test from "node:test";
import assert from "node:assert/strict";
import { readFileSync, readdirSync } from "node:fs";
import { createElement } from "react";
import { renderToStaticMarkup } from "react-dom/server";
import App from "../.qa/App.js";
import { awards, schoolHonors, papers } from "../src/data/portfolio.js";

const html = renderToStaticMarkup(createElement(App));
const app = readFileSync("src/App.jsx", "utf8");
const css =
  readFileSync("src/index.css", "utf8") + readFileSync("src/App.css", "utf8");

test("renders all historical awards, honors and publications immediately", () => {
  assert.equal(awards.length, 9);
  assert.equal(schoolHonors.length, 6);
  assert.equal(papers.length, 2);
  assert.equal((html.match(/class="award-row"/g) || []).length, 9);
  assert.match(html, /USA Computing Olympiad/);
  assert.match(html, /18th internationally/);
  assert.match(html, /School’s highest AMC 12 score/);
  assert.doesNotMatch(html, /top score nationally/i);
  assert.match(html, /Non-Trivial Fellowship/);
});
test("no company mentions in source, metadata or production output", () => {
  for (const path of [
    "index.html",
    "src/App.jsx",
    "src/data/portfolio.js",
    ...readdirSync("dist/assets")
      .filter((x) => x.endsWith(".js"))
      .map((x) => "dist/assets/" + x),
  ]) {
    assert.doesNotMatch(readFileSync(path, "utf8"), /insurf/i, path);
  }
});
test("native cursor, no per-frame renderers or pointer interception", () => {
  assert.doesNotMatch(
    app,
    /PixelTrail|Canvas|onMouseMove|onPointerMove|requestAnimationFrame|setInterval|setTimeout|useEffect/,
  );
  assert.doesNotMatch(
    css + readFileSync("index.html", "utf8"),
    /cursor\s*:\s*none/,
  );
  assert.doesNotMatch(app, /three|react-animated-cursor/);
});
test("semantic landmarks, unique main heading and working section anchors", () => {
  assert.equal((html.match(/<h1\b/g) || []).length, 1);
  assert.match(html, /<main id="main"/);
  assert.match(html, /<nav aria-label="Main navigation"/);
  assert.match(html, /Skip to content/);
  const ids = [...html.matchAll(/\bid="([^"]+)"/g)].map((m) => m[1]);
  assert.equal(new Set(ids).size, ids.length);
  for (const [, target] of html.matchAll(/href="#([^"]+)"/g))
    assert.ok(ids.includes(target), target);
});
test("contact and publication links preserve verified destinations", () => {
  assert.match(html, /href="mailto:cbryan2829@gmail.com"/);
  for (const paper of papers)
    assert.ok(html.includes(`href="https://doi.org/${paper.doi}"`));
  assert.match(html, /href="https:\/\/github.com\/bryanc04"/);
});
test("responsive and accessible motion/focus styles exist", () => {
  assert.match(css, /prefers-reduced-motion/);
  assert.match(css, /focus-visible/);
  assert.match(css, /max-width:\s*600px/);
  assert.match(css, /max-width:\s*360px/);
  assert.doesNotMatch(css, /overflow\s*:\s*hidden/);
});
