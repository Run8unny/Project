'use client';

import React, { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { useProgress, Html, ScrollControls } from '@react-three/drei';

export default function Scene({ children }) {
	return (
		<div className='w-full h-screen flex flex-col justify-center items-center px-4 py-5 bg-transparent mq750:p-3 xs400:p-0 xs400:m-0'>
			<Canvas
				gl={{ antialias: true }}
				camera={{
					fov: 8,
					near: 0.3,
					far: 50,
					position: [1, 3, 3.5],
				}}
			>
				<Suspense fallback={<Loader />}>
					<ScrollControls damping={1} pages={3}>
						{children}
					</ScrollControls>
				</Suspense>
			</Canvas>
		</div>
	);
}

const Loader = () => {
	const { progress, active } = useProgress;

	return (
		<Html center>
			<div
				className={`inline-block [-webkit-text-stroke:1px_#f6f6f6] custom-font opacity-[1] text-[3vw] md:text-2vw]`}
			>
				{progress?.toFixed(1)}%
			</div>
		</Html>
	);
};
