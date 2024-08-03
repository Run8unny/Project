import { useFrame } from '@react-three/fiber';
import React, { useState, useRef } from 'react';
import Shape from './Shape';

function Model(props) {
	const group = useRef();
	const [rotate, setRotate] = useState(false);

	useFrame((_, delta) => {
<<<<<<< Updated upstream
		rotate
			? (group.current.rotation.x += 0.3 * delta)
			: (one.current.rotation.y -= 0.7 * delta);
	});

	return (
		<>
			<group ref={group} scale={viewport.width / 2} {...props}>
				<Shape />
			</group>
			<group
				ref={one}
				scale={viewport.width}
				position={(10, -30, -10)}
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
