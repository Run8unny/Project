'use client';
import { useFrame } from '@react-three/fiber';
import { useRef, useState, useEffect, useMemo } from 'react';
import { Canvas } from '@react-three/fiber';
import { Environment } from '@react-three/drei';
// import * as THREE from 'three';

function Box(props) {
	const box = useRef();
	const [rotate, setRotate] = useState(false);

	// const geometry = useMemo(
	// 	() => [new THREE.BoxGeometry(), new THREE.SphereGeometry()],
	// 	[]
	// );

	useFrame((_, delta) => {
		box.current.rotation.x += delta * rotate;
		box.current.rotation.y += 0.5 * delta * rotate;
	});

	return (
		<mesh {...props} ref={box} onPointerOver={() => setRotate(!rotate)}>
			<boxGeometry />
			<meshBasicMaterial color={rotate ? 'lime' : 'white'} wireframe />
		</mesh>
	);
}

export default Box;
