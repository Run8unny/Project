'use client';
import * as THREE from 'three';
import {
	Stats,
	OrbitControls,
	Environment,
	ContactShadows,
} from '@react-three/drei';
import { Canvas, useFrame, useLoader, useThree } from '@react-three/fiber';
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader';
import { Vector3 } from 'three';

function Model() {
	const { scene } = useLoader(GLTFLoader, '/untitled.glb');
	const { camera, mouse } = useThree();
	const texture = useLoader(THREE.TextureLoader, '/IMG_7833.jpg');
	const vector = new Vector3();

	useFrame(() => {
		vector.set(mouse.x, mouse.y, camera.position.z);
		camera.position.lerp(vector, 0.001);
	});

	return (
		<primitive
			object={scene}
			children-0-rotation={[1, 0, 0]}
			children-0-material-color='#ded7d2'
			children-0-material-metalness={0.42}
			children-0-material-roughness={0}
			children-0-material-clearcoat={1}
			children-0-material-clearcoatRoughness={0.35}
			children-0-material-transmission={1}
			children-0-material-ior={1}
			children-0-material-thickness={1}
			children-0-material-map={texture}
		/>
	);
}

export default function NewScene() {
	return (
		<Canvas camera={{ position: [-2, 10, 3] }} shadows>
			<Model />
			<Environment
				files='/kloofendal_48d_partly_cloudy_puresky_4k.hdr'
				background
				blur={0}
			/>
			<ContactShadows
				scale={150}
				position={[0.33, -0.33, 0.33]}
				opacity={1.5}
			/>
			<OrbitControls target={[0, 1, 0]} autoRotate autoRotateSpeed={0.4} />
			<Stats />
		</Canvas>
	);
}
