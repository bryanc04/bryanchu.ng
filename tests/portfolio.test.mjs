import test from 'node:test';
import assert from 'node:assert/strict';
import { readFileSync, readdirSync } from 'node:fs';
import { createElement } from 'react';
import { renderToStaticMarkup } from 'react-dom/server';
import App from '../.qa/App.js';
import { homeData } from '../src/data/home.js';
import { honorsData } from '../src/data/honors.js';
import { navConfig, allCommands } from '../src/data/nav.js';
const app = readFileSync('src/App.jsx','utf8');
const html = renderToStaticMarkup(createElement(App));
test('original terminal interface remains intact',()=>{
 for(const text of ['GDB 14.2','CALL STACK','REGISTERS','BREAKPOINTS','SOURCE MAP','MEM DUMP','WATCH','SIGNALS']) assert.ok(html.includes(text),text);
 for(const cls of ['shell','topbar','side','main-area','panel','stat']) assert.ok(html.includes(`class="${cls}"`),cls);
 assert.match(app,/ascii-name ascii-face/);
 assert.doesNotMatch(app,/Awards & honors|Let’s compare notes|ivory/);
});
test('all original navigation and terminal commands preserved',()=>{
 assert.deepEqual(navConfig.map(x=>x.id),['home','about','skills','experience','projects','research','honors','contact']);
 for(const cmd of ['help','ls','theme','clear']) assert.ok(allCommands.some(x=>x.cmd===cmd),cmd);
 assert.match(app,/onKeyDown/);
 assert.match(app,/Boot sequence/);
});
test('no company mentions in app, metadata, content or built output',()=>{
 for(const path of ['index.html','src/App.jsx',...readdirSync('src/data').map(x=>'src/data/'+x),...readdirSync('dist/assets').filter(x=>x.endsWith('.js')).map(x=>'dist/assets/'+x)]) assert.doesNotMatch(readFileSync(path,'utf8'),/insurf/i,path);
});
test('native pointer with isolated lightweight decorative trail',()=>{
 assert.doesNotMatch(app,/PixelTrail|CustomCursor|pointermove|mousemove|<Canvas/);
 assert.match(app,/<CursorTrail \/>/);
 assert.doesNotMatch(readFileSync('index.html','utf8'),/cursor\s*:\s*none/);
 assert.match(readFileSync('index.html','utf8'),/cursor:\s*auto/);
});
test('home is awards focused and honors retain sourced placements',()=>{
 assert.ok(homeData.highlights.some(x=>x.key==='usaco'&&x.value==='80th Intl'));
 assert.ok(homeData.highlights.some(x=>x.key==='physics'&&x.value==='18th Intl'));
 assert.ok(homeData.highlights.some(x=>x.key==='honors'));
 assert.ok(honorsData.cards.some(x=>x.title.includes('80th Internationally')));
 assert.doesNotMatch(JSON.stringify(honorsData),/top score nationally/);
});
test('original mobile layout and reduced motion/focus support present',()=>{
 assert.match(app,/@media\(max-width:900px\)/);
 assert.match(app,/prefers-reduced-motion/);
 assert.match(app,/focus-visible/);
});
