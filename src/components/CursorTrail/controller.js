// Three fixed nodes; pointer input never enters React's render loop.
export function attachCursorTrail(nodes, env = window) {
  const fine = env.matchMedia('(hover: hover) and (pointer: fine)');
  const reduced = env.matchMedia('(prefers-reduced-motion: reduce)');
  let frame = 0;
  let lastMove = -Infinity;
  let previous = 0;
  let active = false;
  let x = 0, y = 0;
  const positions = nodes.map(() => ({ x: 0, y: 0 }));
  const hide = () => {
    if (frame) env.cancelAnimationFrame(frame);
    frame = 0;
    active = false;
    nodes.forEach(node => { node.style.opacity = '0'; });
  };
  const allowed = () => fine.matches && !reduced.matches && !env.document.hidden;
  const tick = (now) => {
    frame = 0;
    if (!allowed() || now - lastMove >= 220) { hide(); return; }
    const dt = Math.min(32, Math.max(1, now - previous));
    previous = now;
    positions.forEach((point, i) => {
      const target = i === 0 ? { x, y } : positions[i - 1];
      const blend = 1 - Math.exp(-dt / (i === 0 ? 12 : 30));
      point.x += (target.x - point.x) * blend;
      point.y += (target.y - point.y) * blend;
      nodes[i].style.transform = `translate3d(${point.x + 10}px,${point.y + 14}px,0)`;
      nodes[i].style.opacity = String((1 - i * 0.27) * Math.max(0, 1 - (now - lastMove) / 220));
    });
    frame = env.requestAnimationFrame(tick);
  };
  const move = (event) => {
    if (event.pointerType === 'touch' || !allowed()) { hide(); return; }
    x = event.clientX; y = event.clientY;
    lastMove = env.performance.now();
    if (!active) {
      positions.forEach(point => { point.x = x; point.y = y; });
      previous = lastMove;
      active = true;
    }
    if (!frame) frame = env.requestAnimationFrame(tick);
  };
  const sync = () => { if (!allowed()) hide(); };
  env.addEventListener('pointermove', move, { passive: true });
  env.addEventListener('blur', hide);
  env.document.addEventListener('pointerleave', hide);
  env.document.addEventListener('visibilitychange', sync);
  fine.addEventListener('change', sync);
  reduced.addEventListener('change', sync);
  return () => {
    hide();
    env.removeEventListener('pointermove', move);
    env.removeEventListener('blur', hide);
    env.document.removeEventListener('pointerleave', hide);
    env.document.removeEventListener('visibilitychange', sync);
    fine.removeEventListener('change', sync);
    reduced.removeEventListener('change', sync);
  };
}
