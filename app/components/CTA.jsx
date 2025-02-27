import React from 'react';
import FlipWords from './ui/FlipWords';

export default function CTA() {
	const words = ['REACT', 'R3F', 'THREE.JS', 'WEBGL', 'V5V'];

	return (
		<div
			className={`
                flex justify-center items-center text-center
                text-xl z-80 py-16
            `}
		>
			<FlipWords words={words} />
		</div>
	);
}
