'use client';
import {
	Stats,
	OrbitControls,
	Environment,
	ContactShadows,
} from '@react-three/drei';
import { Canvas } from '@react-three/fiber';
import Icosahedron from './Icosahedron';
import FloatingText from './FloatingText';

export default function NewScene() {
	return (
		<Canvas camera={{ position: [-2, 10, 3] }} shadows>
			<Icosahedron />
			<Environment files='/source/sky4k.hdr' background blur={0} />
			<ContactShadows
				scale={150}
				position={[0.33, -0.33, 0.33]}
				opacity={1.5}
			/>
			<OrbitControls target={[0, 1, 0]} autoRotate autoRotateSpeed={0.4} />
			{/* <Stats /> */}
		</Canvas>
	);
}
