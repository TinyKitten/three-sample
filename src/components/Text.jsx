import React, { useMemo, useRef } from 'react';
import * as THREE from 'three';
import { useLoader } from 'react-three-fiber';
import migu from '../resources/Migu 1P_Regular.blob';

const Text = ({ st, size = 1, position }) => {
  const font = useLoader(THREE.FontLoader, migu);
  const config = useMemo(() => ({
    font,
    size: 30,
    height: 30,
    curveSegments: 32,
    bevelEnabled: true,
    bevelThickness: 6,
    bevelSize: 2.5,
    bevelOffset: 0,
    bevelSegments: 8,
  }), [font]);
  const mesh = useRef([st]);

  return (
    <mesh
      ref={mesh}
      scale={[0.1 * size, 0.1 * size, 0.1]}
      position={position}
    >
      <textGeometry attach="geometry" args={[st, config]} />
      <meshNormalMaterial attach="material" />
    </mesh>
  );
};

export default Text;
