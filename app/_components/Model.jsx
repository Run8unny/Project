import { useFrame } from '@react-three/fiber';
import React, { useState, useRef } from 'react';
import Shape from './Shape';

function Model(props) {
	const group = useRef();
	const [rotate, setRotate] = useState(false);

	useFrame((_, delta) => {
		if (group.current) {
			group.current.rotation.y += rotate ? 0.09 * delta : -0.09 * delta;
		}
	});

	return (
		<group
			ref={group}
			scale={[2, 2, 2]}
			{...props}
			onPointerDown={() => setRotate(!rotate)}
			position={[0, 0, 0]}
		>
			<Shape />
		</group>
	);
}

export default Model;
