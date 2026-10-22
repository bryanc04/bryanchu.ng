import test from 'node:test';
import assert from 'node:assert/strict';
import { attachCursorTrail } from '../src/components/CursorTrail/controller.js';
function fixture() {
  const env = new EventTarget();
  env.document = new EventTarget();
  env.document.hidden = false;
  const fine = Object.assign(new EventTarget(), { matches: true });
  const reduced = Object.assign(new EventTarget(), { matches: false });
  env.matchMedia = query => query.includes('reduced') ? reduced : fine;
  let now = 0, id = 0;
  const frames = new Map();
  env.performance = { now: () => now };
  env.requestAnimationFrame = fn => { frames.set(++id, fn); return id; };
  env.cancelAnimationFrame = id => frames.delete(id);
  const nodes = Array.from({length:3},()=>({style:{opacity:'0'}}));
  const dispose = attachCursorTrail(nodes, env);
  return { env, fine, reduced, frames, nodes, dispose,
    move(x=100,y=200,type='mouse') { env.dispatchEvent(Object.assign(new Event('pointermove'),{clientX:x,clientY:y,pointerType:type})); },
    tick(time) { now=time; const queue=[...frames.values()];frames.clear();queue.forEach(fn=>fn(time)); },
  };
}
test('pointer bursts schedule only one frame; transform/opacity only; stops idle',()=>{
 const f=fixture(); for(let i=0;i<100;i++)f.move(i,i);
 assert.equal(f.frames.size,1);f.tick(16);assert.equal(f.frames.size,1);
 assert.ok(Number(f.nodes[0].style.opacity)>0);
 assert.match(f.nodes[0].style.transform,/translate3d/);
 assert.deepEqual(Object.keys(f.nodes[0].style).sort(),['opacity','transform']);
 f.tick(240);assert.equal(f.frames.size,0);assert.ok(f.nodes.every(n=>n.style.opacity==='0'));f.dispose();
});
test('touch, reduced motion, hidden tabs, blur and unmount stop effects',()=>{
 const f=fixture();f.move(0,0,'touch');assert.equal(f.frames.size,0);
 f.reduced.matches=true;f.move();assert.equal(f.frames.size,0);
 f.reduced.matches=false;f.fine.matches=false;f.move();assert.equal(f.frames.size,0);
 f.fine.matches=true;f.move();assert.equal(f.frames.size,1);
 f.env.document.hidden=true;f.env.document.dispatchEvent(new Event('visibilitychange'));assert.equal(f.frames.size,0);
 f.env.document.hidden=false;f.move();f.env.dispatchEvent(new Event('blur'));assert.equal(f.frames.size,0);
 f.move();f.dispose();assert.equal(f.frames.size,0);f.move();assert.equal(f.frames.size,0);
});
