'use client';

import React, { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { useProgress, Html, ScrollControls } from '@react-three/drei';
import Water from './Water';
import Disc from './Disc';

export default function Scene({ children }) {
	return (
		<div className='flex items-center justify-center h-full w-screen outline'>
			<div className='p-3 mb-5 relative w-[85vw] h-[85vh] md:w-2/3 md:h-2/3 outline'>
				<Canvas
					gl={{ antialias: true }}
					camera={{
						fov: 8,
						near: 0.3,
						far: 50,
						position: [1, 3, 3],
					}}
				>
					<Suspense fallback={<Loader />}>
						<Water />
						<ScrollControls damping={0.2} pages={3}>
							<Disc />
						</ScrollControls>

						{children}
					</Suspense>
				</Canvas>
			</div>
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
				{progress.toFixed(1)}%
			</div>
		</Html>
	);
};
