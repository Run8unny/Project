'use client';

import React, { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { useProgress, Html, ScrollControls } from '@react-three/drei';

export default function Scene({ children }) {
	return (
		<div className='w-full rounded-3xl h-[32rem] flex flex-col justify-center items-center py-16 bg-zinc-950 md:w-full'>
			<Canvas
				gl={{ antialias: true }}
				camera={{
					fov: 3.2,
					near: 0.3,
					far: 50,
					position: [1, 3, 8],
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

export const Loader = () => {
	const { progress, active } = useProgress();

	return (
		<Html center>
			<div
				className={`w-full flex justify-start items-end [-webkit-text-stroke:1px_#fdfdfd] text-transparent font-cotham font-bold opacity-[1] text-[9vw] md:text-5vw]`}
			>
				<p>{progress?.toFixed(1)}%</p>
			</div>
		</Html>
	);
};
