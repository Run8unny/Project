import React, { useRef, useState } from 'react';
import { Canvas, useFrame, useLoader, extend } from '@react-three/fiber';
import * as THREE from 'three';
import { PlaneGeometry } from 'three';

extend({ PlaneGeometry });

export default function BalloonText({ imageUrl }) {
	const texture = useLoader(THREE.TextureLoader, imageUrl);
	const meshRef = useRef();
	const [position, setPosition] = useState([-5, -5, 0]);

	useFrame((state, delta) => {
		setPosition((prevPosition) => {
			const newY = prevPosition[1] + delta * 0.5;
			return [prevPosition[0], newY, prevPosition[2]];
		});

		if (meshRef.current) {
			const time = state.clock.getElapsedTime();
			meshRef.current.position.x = Math.sin(time) * 0.01;
			meshRef.current.position.y = position[1];
		}
	});

	return (
		<mesh ref={meshRef} position={position}>
			<planeGeometry args={[5, 5]} />
			<meshBasicMaterial map={texture} />
		</mesh>
	);
}
