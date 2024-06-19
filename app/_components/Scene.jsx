'use client';

import React, { useRef } from 'react';
import { Canvas } from '@react-three/fiber';
import Model from './Model';
import { Environment, OrbitControls } from '@react-three/drei';
// import { Stats } from '@react-three/drei';

export default function Scene() {
	const cameraRef = useRef();
	return (
		<div className='h-screen'>
			<Canvas camera={{ position: [30, -100, 10] }} ref={cameraRef} shadows>
				<OrbitControls />
				<directionalLight intensity={4} position={[0.75, -0.75, 0]} />
				<Environment preset='dawn' />
				<Model position={[-30, -40, 120]} />
			</Canvas>
		</div>
	);
}
