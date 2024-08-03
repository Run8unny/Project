import { useFrame } from '@react-three/fiber';
import React, { useState, useRef } from 'react';
import Shape from './Shape';

function Model(props) {
	const group = useRef();
	const [rotate, setRotate] = useState(false);

	useFrame((_, delta) => {
<<<<<<< Updated upstream
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
=======
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
>>>>>>> Stashed changes
	);
}

export default Model;
