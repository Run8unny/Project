import { useAnimations, useGLTF, useScroll } from '@react-three/drei';
import { useFrame } from '@react-three/fiber';
import { useEffect, useRef } from 'react';

// Preload the model outside of the component
useGLTF.preload('./assets/home/disc1.glb');

export default function Disc() {
	const group = useRef(null);

	// Load GLTF model and animations
	const { scene, animations } = useGLTF('./assets/home/disc1.glb');
	const { actions } = useAnimations(animations, scene);

	// Scroll hook
	const scroll = useScroll();

	// Set up animation
	useEffect(() => {
		if (actions['Disc']) {
			actions['Disc'].play();
			actions['Disc'].paused = true; // Pause animation initially
			actions['Disc'].time = 0; // Reset time
		}
	}, [actions]);

	// Update animation time based on scroll
	useFrame(() => {
		if (actions['Disc']) {
			const duration = actions['Disc'].getClip().duration;
			actions['Disc'].time = duration * scroll.offset;
		}
	});

	return (
		<group
			ref={group}
			position={[-0.2, 0.26, 0]}
			rotation={[0.5, 0.6, 0.7]}
			dispose={null} // Add this for cleanup
		>
			<primitive object={scene} scale={0.09} />
		</group>
	);
}
