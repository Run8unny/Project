'use client';

import React from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';

export default function Scene({ children }) {
	return (
		<div className='flex items-center justify-center h-full w-screen'>
			<div className='p-3 mb-5 relative w-[95vw] h-[95vh] md:w-2/3 md:h-2/3'>
				<Canvas
					camera={{
						fov: 8,
						near: 0.3,
						far: 50,
						position: [1, 3, 5],
					}}
				>
					<OrbitControls minDistance={3} maxDistance={12} />
					{children}
				</Canvas>
			</div>
		</div>
	);
}
