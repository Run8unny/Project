'use client';

import React from 'react';
import { Canvas } from '@react-three/fiber';
import Model from './Model';
import { Environment, OrbitControls } from '@react-three/drei';
// import { Stats } from '@react-three/drei';

<<<<<<< Updated upstream
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
=======
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
				intensity={1.5}
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
		<div className='flex items-center justify-center h-screen w-screen'>
			<div className='relative w-full h-full md:w-2/3 md:h-2/3'>
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
>>>>>>> Stashed changes
	);
}
