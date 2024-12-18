'use client';
import { useMotionValue } from 'framer-motion';
import React from 'react';
import { useMotionTemplate, motion } from 'framer-motion';
import { cn } from '@/app/lib/utils';
import CTA from '../CTA';

export default function EvervaultCardContainer() {
	return (
		<div className='w-full h-screen flex flex-col justify-center items-center px-4 bg-transparent mq750:p-3 my-80 xs400:p-0 xs400:my-36'>
			<EvervaultCard text={<CTA />} />
		</div>
	);
}

export const EvervaultCard = ({ text, className }) => {
	let mouseX = useMotionValue(0);
	let mouseY = useMotionValue(0);

	function onMouseMove({ currentTarget, clientX, clientY }) {
		let { left, top } = currentTarget.getBoundingClientRect();
		mouseX.set(clientX - left);
		mouseY.set(clientY - top);
	}

	return (
		<div
			className={cn(
				'bg-transparent aspect-square flex items-center justify-center relative isolate h-full',
				className
			)}
		>
			<div
				onMouseMove={onMouseMove}
				className='group/card w-full relative overflow-hidden bg-transparent flex items-center justify-center '
			>
				<CardPattern mouseX={mouseX} mouseY={mouseY} />
				{text}
			</div>
		</div>
	);
};

export function CardPattern({ mouseX, mouseY }) {
	let maskImage = useMotionTemplate`radial-gradient(150px at ${mouseX}px ${mouseY}px, white, transparent)`;
	let style = { maskImage, WebkitMaskImage: maskImage };

	return (
		<div className='pointer-events-none'>
			<div className='absolute inset-0 [mask-image:linear-gradient(white,transparent)] group-hover/card:opacity-50'></div>
			<motion.div
				className='absolute inset-0 bg-gradient-to-r from-orange-500 to-cyan-700 opacity-0 group-hover/card:opacity-100 backdrop-blur-xl transition duration-500'
				style={style}
			/>
			<motion.div
				className='absolute inset-0 opacity-0 mix-blend-overlay  group-hover/card:opacity-100'
				style={style}
			></motion.div>
		</div>
	);
}
