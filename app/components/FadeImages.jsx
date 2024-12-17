'use client';
import * as THREE from 'three';
import { useRef, useState } from 'react';
import { useFrame, useThree } from '@react-three/fiber';
import { useTexture, Center, OrbitControls } from '@react-three/drei';
import { FadeImagesMaterial } from './FadeImagesMaterial';

// Preload textures
useTexture.preload([
	'./assets/about_page/about.png',
	'./assets/about_page/about1.png',
	'./assets/about_page/displacement.jpg',
]);

export default function FadingImages() {
	const ref = useRef();
	const [hovered, setHover] = useState(false);

	// Load textures
	const [texture1, texture2, dispTexture] = useTexture([
		'./assets/about_page/about.png',
		'./assets/about_page/about1.png',
		'./assets/about_page/displacement.jpg',
	]);

	// Access viewport dimensions
	const { viewport } = useThree();
	const planeWidth = viewport.width * 0.8;
	const planeHeight = planeWidth * 0.6;

	// Update dispFactor for hover effect
	useFrame(() => {
		if (ref.current) {
			ref.current.dispFactor = THREE.MathUtils.lerp(
				ref.current.dispFactor,
				hovered ? 1 : 0,
				0.075
			);
		}
	});

	return (
		<>
			<OrbitControls
				minDistance={2}
				maxDistance={10}
				enablePan={false}
				enableZoom={true}
				enableRotate={true}
				zoomSpeed={0.8}
				rotateSpeed={0.4}
				maxPolarAngle={Math.PI / 2}
			/>
			<Center>
				<mesh
					onPointerOver={() => setHover(true)}
					onClick={() => setHover(false)}
				>
					{/* Responsive plane geometry */}
					<planeGeometry args={[planeWidth, planeHeight]} />
					<fadeImagesMaterial
						ref={ref}
						texture1={texture1}
						texture2={texture2}
						disp={dispTexture}
						toneMapped={false}
						side={THREE.DoubleSide}
					/>
				</mesh>
			</Center>
		</>
	);
}
