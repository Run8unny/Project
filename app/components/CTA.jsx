import React from 'react';
import { FlipWords } from './ui/FlipWords';

const CTA = () => {
	const words = ['CREATE', 'BUILD', 'HAVE FUN', 'WORK'];
	return (
		<div className='h-[45rem] flex flex-col justify-center items-center text-center text-[4rem] lg:text-[3.7rem] mq850:text-[3rem] relative z-20 mt-36'>
			<div className='relative w-3/4'>
				<h1 className='mt-3 custom-font'>
					LET’S <FlipWords words={words} /> <br />
					TOGETHER. I’M NOT JUST AN EMPLOYEE. I TRULY AM IN YOUR TEAM.
				</h1>

				<div className='text-[1.4rem] text-left w-[26rem] h-[11.25rem] m-10 ml-auto pr-[20px] '>
					<p>
						I’m your partner in the project and a helping hand when you need
						one. I always give my best to create something unique together.
					</p>
				</div>
			</div>
		</div>
	);
};

export default CTA;
