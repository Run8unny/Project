'use client';

import React from 'react';
import { Canvas } from '@react-three/fiber';
import Model from './Model';
import { Environment, OrbitControls } from '@react-three/drei';
import { useRef } from 'react';

function Lights() {
	const ambientRef = useRef();
	const directionalRef = useRef();
	const pointLightRef1 = useRef();
	const pointLightRef2 = useRef();
	const spotLightRef = useRef();

	return (
		<>
			<ambientLight ref={ambientRef} intensity={1} />
			<directionalLight
				ref={directionalRef}
				position={[5, 5, 5]}
				intensity={1.6}
				castShadow
			/>
			<pointLight
				ref={pointLightRef1}
				position={[-5, 5, 5]}
				intensity={1.5}
				castShadow
			/>
			<pointLight
				ref={pointLightRef2}
				position={[5, -5, -5]}
				intensity={1.5}
				castShadow
			/>
			<spotLight
				ref={spotLightRef}
				position={[0, 10, 0]}
				angle={0.3}
				penumbra={1}
				intensity={2}
				castShadow
			/>
		</>
	);
}

export default function Scene() {
	return (
		<div className='flex items-center justify-center h-full w-screen'>
			<div className='p-9 mb-5 relative w-[80vw] h-[80vh] md:w-2/3 md:h-2/3'>
				<Canvas
					camera={{ position: [0, 0, 10], fov: 50 }}
					className='absolute inset-0 z-30'
				>
					<Lights />
					<OrbitControls minDistance={5} maxDistance={20} />
					<Environment preset='forest' />
					<Model />
				</Canvas>
			</div>
		</div>
	);
}
