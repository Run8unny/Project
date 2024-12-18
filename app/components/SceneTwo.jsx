'use client';

import React, { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { useProgress, Html, ScrollControls } from '@react-three/drei';
import { Loader } from './Scene';

export default function SceneTwo({ children }) {
	return (
		<div className='w-1/2 h-[40rem] flex flex-col justify-center items-center px-4 py-6 bg-transparent mq750:p-3 xs400:p-0 xs400:m-0 mq1050:w-full mq1050:h-[40rem] xs400:h-[26rem]'>
			<Canvas
				gl={{ antialias: true }}
				camera={{
					fov: 0.5,
					near: 0.3,
					far: 50,
					position: [-1.5, 2, 8],
				}}
			>
				<Suspense fallback={<Loader />}>{children}</Suspense>
			</Canvas>
		</div>
	);
}
