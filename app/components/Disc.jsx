import { useAnimations, useGLTF, useScroll } from '@react-three/drei';
import { useFrame } from '@react-three/fiber';
import { useEffect, useRef } from 'react';

useGLTF.preload('./assets/home/disc1.glb');

export default function Disc() {
	const group = useRef(null);

	const { nodes, material, scene, animations } = useGLTF(
		'./assets/home/disc1.glb'
	);
	const { actions, clips } = useAnimations(animations, scene);
	console.log(actions);
	const scroll = useScroll();

	useEffect(() => {
		actions['Rotate'].play().paused = true;
	}, []);
	useFrame(
		() =>
			(actions['Rotate'].time =
				actions['Rotate'].getClip().duration * scroll.offset)
	);

	return (
		<group ref={group} position={[-0.4, 0.18, 0]}>
			<primitive object={scene} scale={0.15} />
		</group>
	);
}
