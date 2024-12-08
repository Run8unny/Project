import { useAnimations, useGLTF } from '@react-three/drei';
import { useRef } from 'react';

useGLTF.preload('./assets/home/discs.glb');

export default function Disc() {
	const group = useRef(null);
	const { nodes, material, scene } = useGLTF('./assets/home/discs.glb');
	const animation = useAnimations();
	return (
		<group ref={group} position={[0, 1, 0]}>
			<primitive object={scene} scale={0.4} />
		</group>
	);
}
