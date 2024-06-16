import { OrbitControls, useGLTF, useAnimations, Text } from '@react-three/drei';
import { useFrame, useThree } from '@react-three/fiber';
import React, { useState } from 'react';
import { useRef } from 'react';
import Shape from './Shape';
// import { BackSide, MeshTransmissionMaterial } from 'three';
// import { useControls } from 'leva';
// import { ChromaticAberration } from '@react-three/postprocessing';

function Model(props) {
	const group = useRef();
	const one = useRef();
	const { viewport } = useThree();
	const [rotate, setRotate] = useState(false);

	// const matirialProps = useControls({
	// 	thickness: { value: 0.2, min: 0, max: 3, step: 0.05 },
	// 	roughness: { value: 0, min: 0, max: 1, step: 0.1 },
	// 	transmission: { value: 1, min: 0, max: 1, step: 0.1 },
	// 	ior: { value: 1.2, min: 0, max: 3, step: 0.1 },
	// 	chromaticAberration: { value: 0.02, min: 0, max: 1 },
	// 	backSide: { value: true },
	// });

	useFrame((_, delta) => {
		rotate
			? (group.current.rotation.x += 0.3 * delta)
			: (one.current.rotation.y -= 0.7 * delta);
	});

	return (
		<>
			<group ref={group} scale={viewport.width / 5} {...props}>
				<OrbitControls />
				<Shape />
			</group>
			<group
				ref={one}
				scale={viewport.width / 2}
				onPointerDown={() => setRotate(!rotate)}
			>
				<OrbitControls />
				<Shape />
			</group>
		</>
	);
}

export default Model;
