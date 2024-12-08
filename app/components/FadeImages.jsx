'use client';
import * as THREE from 'three';
import { useRef, useState } from 'react';
import { useFrame } from '@react-three/fiber';
import { useTexture, PresentationControls, Center } from '@react-three/drei';
import { FadeImagesMaterial } from './FadeImagesMaterial';
import { OrbitControls } from '@react-three/drei';
import { Stage } from '@react-three/drei';
import { EffectComposer, Pixelation } from '@react-three/postprocessing';

export default function FadingImages() {
	const ref = useRef();
	const [texture1, texture2, dispTexture] = useTexture([
		'./assets/about_page/me1.png',
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
			<OrbitControls minDistance={3} maxDistance={7} />
			<Stage preset='rembrandt' intensity={1} environment='city' />
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
