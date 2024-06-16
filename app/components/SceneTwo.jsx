'use client';

import React from 'react';
import { Canvas } from '@react-three/fiber';
import Model from './Model';
import { Environment } from '@react-three/drei';
import { LightShadow } from 'three';
import Box from './Box';

function SceneTwo() {
	return (
		<Canvas style={{ width: 800, heigh: 500, backgroundColor: 'black' }}>
			<ambientLight intensity={10} />
			<directionalLight intensity={15} position={[10, 5, 8]} />
			<directionalLight intensity={20} position={[1, 5, -20]} />
			<Environment preset='night' />
			<Box position={[-1.5, 0, 0]} />
			<Box position={[1.5, 0, 0]} />
		</Canvas>
	);
}

export default SceneTwo;
