'use client';
import * as THREE from 'three';
import { useRef, useState } from 'react';
import { useFrame } from '@react-three/fiber';
import { useTexture, PresentationControls, Center } from '@react-three/drei';
import { FadeImagesMaterial } from './FadeImagesMaterial';
import { OrbitControls } from '@react-three/drei';

export default function FadingImages() {
	const ref = useRef();
	const [texture1, texture2, dispTexture] = useTexture([
		'./assets/about/about-min.jpg',
		'./assets/about/about2-min.jpg',
		'./assets/about/displacement.jpg',
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
			<Center>
				<mesh
					position={[0, 0, 10]}
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
