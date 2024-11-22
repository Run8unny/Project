import React from 'react';

export function DotBackground() {
	return (
		<div className='h-[50rem] w-full light:bg-black light:bg-white bg-dot-white/[0.3] light:bg-dot-black/[0.2] relative flex items-center justify-center'>
			{/* Radial gradient for the container to give a faded look */}
			<div className='absolute pointer-events-none inset-0 flex items-center justify-center bg-black light:bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]'></div>
		</div>
	);
}
