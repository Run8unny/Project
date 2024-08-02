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
			? (group.current.rotation.y += 0.1 * delta)
			: (group.current.rotation.y -= 0.1 * delta);
	});

	return (
		<>
			<group
				ref={group}
				scale={viewport.height / 6}
				{...props}
				onPointerDown={() => setRotate(!rotate)}
			>
				<Shape />
			</group>
		</>
	);
}

export default Model;
