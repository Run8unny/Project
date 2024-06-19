import { useGLTF, useAnimations, Text } from '@react-three/drei';
import { useFrame, useThree } from '@react-three/fiber';
import React, { useState } from 'react';
import { useRef } from 'react';
import Shape from './Shape';

function Model(props) {
	const group = useRef();
	const one = useRef();
	const { viewport } = useThree();
	const [rotate, setRotate] = useState(false);

	useFrame((_, delta) => {
		rotate
			? (group.current.rotation.x += 0.3 * delta)
			: (one.current.rotation.y -= 0.7 * delta);
	});

	return (
		<>
			<group ref={group} scale={viewport.width / 4} {...props}>
				<Shape />
			</group>
			<group
				ref={one}
				scale={viewport.width / 2}
				position={(10, -30, -10)}
				onPointerDown={() => setRotate(!rotate)}
			>
				<Shape />
			</group>
		</>
	);
}

export default Model;
