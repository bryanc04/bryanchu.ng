/* eslint-disable react/no-unknown-property */
import { useMemo, useEffect, useRef } from 'react';
import { Canvas, useThree, useFrame } from '@react-three/fiber';
import { shaderMaterial, useTrailTexture } from '@react-three/drei';
import * as THREE from 'three';

import './PixelTrail.css';

const DotMaterial = shaderMaterial(
  {
    resolution: new THREE.Vector2(),
    mouseTrail: null,
    gridSize: 100,
    pixelColor: new THREE.Color('#ffffff')
  },
  `
    varying vec2 vUv;
    void main() {
      vUv = uv;
      gl_Position = vec4(position.xy, 0.0, 1.0);
    }
  `,
  `
    uniform vec2 resolution;
    uniform sampler2D mouseTrail;
    uniform float gridSize;
    uniform vec3 pixelColor;
    varying vec2 vUv;

    void main() {
      // Use raw UV for 1:1 screen mapping
      vec2 uv = gl_FragCoord.xy / resolution;
      
      // Keep cells square
      float aspect = resolution.x / resolution.y;
      vec2 grid = vec2(gridSize * aspect, gridSize);
      vec2 gridUvCenter = (floor(uv * grid) + 0.5) / grid;

      float trail = texture2D(mouseTrail, gridUvCenter).r;

      gl_FragColor = vec4(pixelColor, trail);
    }
  `
);

function Scene({ gridSize, trailSize, maxAge, interpolate, easingFunction, pixelColor }) {
  const { size, viewport } = useThree();
  const mousePos = useRef({ x: 0, y: 0 });
  const lastMousePos = useRef({ x: 0, y: 0 });
  const v2 = useRef(new THREE.Vector2());

  const dotMaterial = useMemo(() => new DotMaterial(), []);
  
  useEffect(() => {
    dotMaterial.uniforms.pixelColor.value.set(pixelColor);
  }, [pixelColor, dotMaterial]);

  const [trail, onMove] = useTrailTexture({
    size: 512,
    radius: trailSize,
    maxAge: maxAge,
    interpolate: interpolate || 0.1,
    ease: easingFunction || (x => x)
  });

  useEffect(() => {
    const handleMove = (e) => {
      mousePos.current.x = e.clientX / window.innerWidth;
      mousePos.current.y = 1 - (e.clientY / window.innerHeight);
    };
    window.addEventListener('pointermove', handleMove, { passive: true });
    return () => window.removeEventListener('pointermove', handleMove);
  }, []);

  useFrame(() => {
    if (mousePos.current.x !== lastMousePos.current.x || mousePos.current.y !== lastMousePos.current.y) {
      v2.current.set(mousePos.current.x, mousePos.current.y);
      onMove({ uv: v2.current });
      lastMousePos.current.x = mousePos.current.x;
      lastMousePos.current.y = mousePos.current.y;
    }
    
    dotMaterial.uniforms.resolution.value.set(size.width * viewport.dpr, size.height * viewport.dpr);
    dotMaterial.uniforms.gridSize.value = gridSize;
    dotMaterial.uniforms.mouseTrail.value = trail;
  });

  if (trail) {
    trail.minFilter = THREE.NearestFilter;
    trail.magFilter = THREE.NearestFilter;
  }

  return (
    <mesh>
      <planeGeometry args={[2, 2]} />
      <primitive object={dotMaterial} transparent />
    </mesh>
  );
}

export default function PixelTrail({
  gridSize = 40,
  trailSize = 0.1,
  maxAge = 250,
  interpolate = 5,
  easingFunction = x => x,
  color = '#ffffff',
  className = ''
}) {
  return (
    <Canvas
      dpr={[1, 2]} 
      gl={{ 
        antialias: false, 
        powerPreference: 'high-performance',
        alpha: true,
        stencil: false,
        depth: false
      }}
      className={`pixel-canvas ${className}`}
      style={{
        position: 'fixed',
        inset: 0,
        zIndex: 900, // Above shell (10) and wipe (800), below cursor (9999)
        pointerEvents: 'none'
      }}
    >
      <Scene
        gridSize={gridSize}
        trailSize={trailSize}
        maxAge={maxAge}
        interpolate={interpolate}
        easingFunction={easingFunction}
        pixelColor={color}
      />
    </Canvas>
  );
}
