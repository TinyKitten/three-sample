import React, { useRef, useState } from 'react';
import { useFrame } from 'react-three-fiber';

type Mesh = {
  rotation: {
    x: number;
    y: number;
  }
}

type Props = {
  position: [number, number, number];
}

const Box = ({ position }: Props) => {
  const mesh = useRef<Mesh>();

  const [hovered, setHover] = useState(false);
  const [active, setActive] = useState(false);

  // eslint-disable-next-line no-return-assign, no-multi-assign
  useFrame(() => (mesh.current!.rotation.x = mesh.current!.rotation.y += 0.01));

  return (
    <mesh
      ref={mesh}
      scale={active ? [1.5, 1.5, 1.5] : [1, 1, 1]}
      onClick={() => setActive(!active)}
      onPointerOver={() => setHover(true)}
      onPointerOut={() => setHover(false)}
      position={position}
    >
      <boxBufferGeometry attach="geometry" args={[1, 1, 1]} />
      <meshStandardMaterial attach="material" color={hovered ? 'hotpink' : 'orange'} />
    </mesh>
  );
};

export default Box;
