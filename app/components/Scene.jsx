'use client';

import React from 'react';
import { Canvas } from '@react-three/fiber';
import Model from './Model';
import { Environment } from '@react-three/drei';
import { LightShadow } from 'three';

export default function Scene() {
	return (
		<Canvas>
			<ambientLight intensity={10} />
			<directionalLight intensity={15} position={[10, 5, 8]} />
			<directionalLight intensity={20} position={[1, 5, -20]} />
			<Environment preset='night' />
			<Model position={[-10, 2, 5]} />
		</Canvas>
	);
}
