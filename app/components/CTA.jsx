import React from 'react';
import FlipWords from './ui/FlipWords';

export default function CTA() {
	const words = ['CREATE', 'BUILD', 'HAVE FUN', 'WORK'];
	return (
		<div className='h-[45rem] flex flex-col justify-center items-center text-center text-[4rem] lg:text-[3.7rem] mq850:text-[3rem] relative z-20 mt-36 xs400:text-[1.9rem] xs400:mt-10 xs400:m-0 xs400:p-0 '>
			<div className='relative w-3/4 xs400:p-0 xs400:m-0 xs400:w-[25rem]'>
				<h1 className='mt-3 custom-font'>
					LET’S <FlipWords words={words} /> <br />
					TOGETHER. I’M NOT JUST AN EMPLOYEE. I TRULY AM IN YOUR TEAM.
				</h1>

				<div className='text-[1.4rem] text-left w-[26rem] h-[11.25rem] m-10 ml-auto pr-[20px] xs400:text-[1.4rem] xs400:h-[3rem] '>
					<p className='xs400:m-14 xs400:mb-0'>
						I’m your partner in the project and a helping hand when you need
						one. I always give my best to create something unique together.
					</p>
				</div>
			</div>
		</div>
	);
}
