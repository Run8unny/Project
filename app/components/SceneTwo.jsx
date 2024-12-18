'use client';

import React, { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { useProgress, Html, ScrollControls } from '@react-three/drei';
import { Loader } from './Scene';

export default function SceneTwo({ children }) {
	return (
		<div className='w-screen h-screen flex flex-col justify-center items-center px-4 py-6 bg-transparent mq750:p-3 xs400:p-0 xs400:m-0 md:w-full'>
			<Canvas
				gl={{ antialias: true }}
				camera={{
					fov: 50,
					near: 10,
					far: 100,
					position: [0, 3, 32],
				}}
			>
				<Suspense fallback={<Loader />}>{children}</Suspense>
			</Canvas>
		</div>
	);
}
