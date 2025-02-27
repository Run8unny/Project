import React from 'react';
import FlipWords from './ui/FlipWords';

export default function CTA() {
	const words = ['REACT', 'R3F', 'THREE.JS', 'WEBGL', 'V5V'];

	return (
		<div
			className={`
                flex justify-center items-center text-center
                text-2xl z-80 py-16  mq1225:text-[11rem] mq850:text-[8rem] xs400:text-[5rem]xs400:mt-1 xs400:p-0'
            `}
		>
			<FlipWords words={words} />
		</div>
	);
}
