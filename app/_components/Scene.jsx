'use client';

import React, { useRef } from 'react';
import { Canvas } from '@react-three/fiber';
import Model from './Model';
import { Environment, OrbitControls } from '@react-three/drei';
// import { Stats } from '@react-three/drei';
import * as THREE from 'three';
import { useControls } from 'leva';

function Lights() {
	const ambientRef = useRef();
	const directionalRef = useRef();

	useControls('Ambient Light', {
		visible: {
			value: false,
			onChange: (v) => {
				ambientRef.current.visible = v;
			},
		},
		color: {
			value: 'white',
			onChange: (v) => {
				ambientRef.current.color = new THREE.Color(v);
			},
		},
	});

	useControls('Directional Light', {
		visible: {
			value: true,
			onChange: (v) => {
				directionalRef.current.visible = v;
			},
		},
		position: {
			x: 1,
			y: 1,
			z: 1,
			onChange: (v) => {
				directionalRef.current.position.copy(v);
			},
		},
		color: {
			value: 'white',
			onChange: (v) => {
				directionalRef.current.color = new THREE.Color(v);
			},
		},
	});

	return (
		<>
			<ambientLight ref={ambientRef} />
			<directionalLight ref={directionalRef} />
		</>
	);
}

export default function Scene() {
	const cameraRef = useRef();
	return (
		<div className='h-lvh w-4/5 p-30 m-10'>
			<Canvas>
				<Lights />
				<OrbitControls />
				<Environment preset='forest' />
				<Model />
			</Canvas>
		</div>
	);
}
