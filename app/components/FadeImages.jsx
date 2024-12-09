'use client';
import * as THREE from 'three';
import { useRef, useState } from 'react';
import { useFrame } from '@react-three/fiber';
import { useTexture, Center } from '@react-three/drei';
import { FadeImagesMaterial } from './FadeImagesMaterial';
import { OrbitControls } from '@react-three/drei';

export default function FadingImages() {
	const ref = useRef();
	const sunRef = useRef();
	const [texture1, texture2, dispTexture] = useTexture([
		'./assets/about_page/about.png',
		'./assets/about_page/about1.png',
		'./assets/about_page/displacement.jpg',
	]);
	const [hovered, setHover] = useState(false);
	useFrame(() => {
		ref.current.dispFactor = THREE.MathUtils.lerp(
			ref.current.dispFactor,
			hovered ? 1 : 0,
			0.075
		);
	});
	return (
		<>
			<OrbitControls
				minDistance={3}
				maxDistance={7}
				enablePan={true}
				enableZoom={true}
				enableRotate={true}
				zoomSpeed={0.5}
				panSpeed={0.5}
				rotateSpeed={0.5}
			/>
			<Center>
				<mesh
					onPointerOver={(e) => setHover(true)}
					onPointerOut={(e) => setHover(false)}
				>
					<planeGeometry />
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
