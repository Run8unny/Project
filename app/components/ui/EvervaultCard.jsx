'use client';
import { useMotionValue } from 'framer-motion';
import React from 'react';
import { useMotionTemplate, motion } from 'framer-motion';
import { cn } from '@/app/lib/utils';

export default function EvervaultCardContainer() {
	return (
		<div className='h-[42rem] w-full flex justify-center items-center text-center text-[4.75rem] relative z-20 p-5'>
			<EvervaultCard text='hover' />
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
				'bg-transparent aspect-square flex items-center justify-center w-full h-full relative isolate p-30',
				className
			)}
		>
			<div
				onMouseMove={onMouseMove}
				className='group/card w-full relative overflow-hidden bg-transparent flex items-center justify-center h-auto'
			>
				<CardPattern mouseX={mouseX} mouseY={mouseY} />
				<div className='relative z-10 flex items-center justify-center'>
					<div className='relative h-auto w-auto rounded-full flex items-center justify-center text-white font-bold text-3xl'>
						<div className='h-[45rem] flex flex-col justify-center items-center text-center text-[4.55rem] mq750:text-[3.55rem] relative z-20'>
							<div className='relative w-3/4 '>
								<h1 className='mt-3'>
									LET’S WORK TOGETHER. I’M NOT JUST AN EMPLOYEE. I TRULY AM IN
									YOUR TEAM.
								</h1>

								<div className='text-[1.5rem] text-left w-[28rem] h-[11.25rem] mt-4 ml-auto pr-[20px]'>
									<p>
										I’m your partner in the project and a helping hand when you
										need one. I always give my best to create something unique
										together.
									</p>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export function CardPattern({ mouseX, mouseY }) {
	let maskImage = useMotionTemplate`radial-gradient(350px at ${mouseX}px ${mouseY}px, white, transparent)`;
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
