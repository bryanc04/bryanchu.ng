import { useEffect, useRef } from 'react';
import { attachCursorTrail } from './controller';

export default function CursorTrail() {
  const root = useRef(null);
  useEffect(() => attachCursorTrail([...root.current.children]), []);
  return <div ref={root} className="cursor-trail" aria-hidden="true">
    <i /><i /><i />
  </div>;
}
