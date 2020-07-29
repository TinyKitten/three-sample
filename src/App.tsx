import React, { Suspense, useRef } from 'react';
import { Canvas, useFrame } from 'react-three-fiber';
import { Mesh } from 'three';
import Text from './components/Text';

const MovingText = () => {
  const ref = useRef<Mesh>();
  useFrame(({ clock }) => {
    const time = clock.getElapsedTime();
    ref.current!.position.y = Math.sin(time) * 3;
  });
  return (
    <group ref={ref}>
      <Text position={[-8, 4, 0]} st="野田一樹" size={1} />
    </group>
  );
};

const App = () => (
  <Canvas
    camera={{ position: [0, 5, 20] }}
  >
    <ambientLight />
    <Suspense fallback={null}>
      <MovingText />
    </Suspense>
  </Canvas>
);

export default App;
