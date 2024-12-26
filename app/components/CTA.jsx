import React from 'react';
import FlipWords from './ui/FlipWords';

export default function CTA() {
	const words = ['CREATE', 'BUILD', 'DESIGN', 'WORK'];
	const subText =
		'TOGETHER. I’M NOT JUST AN EMPLOYEE. I TRULY AM IN YOUR TEAM. I’m your partner in the project and a helping hand when you need one. I always give my best to create something unique.';

	return (
		<div
			className={`
                flex flex-col justify-center items-center 
                text-2xl lg:text-xl relative z-80 
                xs400:p-0 xs400:my-40 xs400:w-full mq1225:text-center 
            `}
		>
			<div className='relative w-full md:w-8/12 mq1050:w-11/12'>
				<h1 className='mt-3 font-bold '>
					LET’S{' '}
					<span aria-live='polite'>
						<FlipWords words={words} />
					</span>
				</h1>

				<div
					className={`
                        text-sm text-left w-[30rem] h-[30rem] m-10 ml-auto pr-[20px] 
                        xs400:text-xs xs400:h-[5rem] xs400:m-0 xs400:w-9/12 relative 
                    `}
				>
					<p className='absolute top-10 left-20 md:left-36 xs400:mb-0 uppercase '>
						{subText}
					</p>
				</div>
			</div>
		</div>
	);
}
