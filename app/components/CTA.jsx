import React from 'react';
import FlipWords from './ui/FlipWords';

export default function CTA() {
	const words = ['CREATE', 'BUILD', 'HAVE FUN', 'WORK'];
	return (
		<div className='flex flex-col justify-center items-center text-left text-[5rem] lg:text-[3.7rem] mq850:text-[2.5rem] relative z-20 mt-20 xs400:text-[1.8rem] xs400:p-0 xs400:my-20 xs400:w-full'>
			<div className='relative w-full md:w-7/12'>
				<h1 className='mt-3'>
					LET’S <FlipWords words={words} /> TOGETHER. <br /> I’M NOT JUST AN
					EMPLOYEE. <br /> I TRULY AM IN YOUR TEAM.
				</h1>

				<div className='text-[1.4rem] text-left w-[30rem] h-[11.25rem] m-10 ml-auto pr-[20px] xs400:text-[1.2rem] xs400:h-[7rem] xs400:m-0 md:w-[24rem]'>
					<p className='xs400:m-14 xs400:mb-0 mq850:[w-24rem]'>
						I’m your partner in the project and a helping hand when you need
						one. <br /> I always give my best to create something unique
						together.
					</p>
				</div>
			</div>
		</div>
	);
}
