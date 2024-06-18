'use client';

import React from 'react';
import { Canvas } from '@react-three/fiber';
import Model from './Model';
import { Environment, OrbitControls } from '@react-three/drei';
// import { Stats } from '@react-three/drei';

// const matirialProps = useControls({
// 	thickness: { value: 0.2, min: 0, max: 3, step: 0.05 },
// 	roughness: { value: 0, min: 0, max: 1, step: 0.1 },
// 	transmission: { value: 1, min: 0, max: 1, step: 0.1 },
// 	ior: { value: 1.2, min: 0, max: 3, step: 0.1 },
// 	chromaticAberration: { value: 0.02, min: 0, max: 1 },
// 	backSide: { value: true },
// });

export default function Scene() {
	return (
		<Canvas shadows>
			<OrbitControls />
			<directionalLight intensity={4} position={[3.3, 1.0, 4.4]} />
			<Environment preset='dawn' />
			<Model position={[20, -10, 10]} />
		</Canvas>
	);
}
