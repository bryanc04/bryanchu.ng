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
 for(const cls of ['topbar','side','main-area','panel','stat']) assert.ok(html.includes(`class="${cls}"`),cls);
 assert.match(html,/class="shell quiet"/);
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

test('quiet console defaults, accessible inspector and command field',()=>{
 assert.match(html,/aria-label="Toggle simulated debugger panels"/);
 assert.match(html,/aria-pressed="false"/);
 assert.match(html,/aria-label="Terminal command"/);
 assert.match(app,/if \(!inspect\) return;/);
 assert.match(app,/role="button" tabIndex=\{0\} aria-expanded=\{open\}/);
 assert.match(app,/simulated debugger/);
});

test('default console text and accent maintain readable contrast',()=>{
 const luminance=hex=>{
  const channels=hex.match(/[a-f0-9]{2}/gi).map(v=>parseInt(v,16)/255).map(v=>v<=0.04045?v/12.92:((v+0.055)/1.055)**2.4);
  return channels[0]*0.2126+channels[1]*0.7152+channels[2]*0.0722;
 };
 const bg=luminance('111518');
 for(const fg of ['e5eceb','9ba9ad','7d8a90','75dfd0']) assert.ok((luminance(fg)+0.05)/(bg+0.05)>=4.5,fg);
 assert.match(app,/min-height:44px/);
 assert.match(app,/100dvh/);
});
