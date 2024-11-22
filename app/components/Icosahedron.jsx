import * as THREE from 'three';
import { useFrame, useLoader, useThree } from '@react-three/fiber';
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader';
import { Vector3 } from 'three';

export default function Icosahedron() {
	const { scene } = useLoader(GLTFLoader, '/source/untitled.glb');
	const { camera, mouse } = useThree();
	const texture = useLoader(THREE.TextureLoader, '/images/IMG_7833.jpg');
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
