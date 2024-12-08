'use client';
import { useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { cn } from '@/app/lib/utils';

export default function ParallaxScrollBox() {
	return (
		<div className='flex flex-col justify-center items-center mt-10'>
			<div className='outline w-2/3 h-50 grid grid-rows-1 grid-cols-2 mq1050:grid-rows-2 mq1050:grid-cols-1 box-border'>
				<div className='row-start-1 row-end-2 col-start-1 col-end-2 flex flex-col items-center justify-center'>
					<video className='w-80 max-w-md rounded-lg' controls>
						<source src='/assets/playground_page/video2.mp4' type='video/mp4' />
						Your browser does not support the video tag.
					</video>
				</div>
				<div className='row-start-1 row-end-2 col-start-2 col-end-3 mq1050:row-start-2 mq1050:col-start-1 flex flex-col items-center justify-center'>
					<video className='w-80 max-w-md rounded-lg' controls>
						<source src='/assets/playground_page/video1.mp4' type='video/mp4' />
						Your browser does not support the video tag.
					</video>
				</div>
			</div>

			<ParallaxScroll images={images} />
		</div>
	);
}

const images = [
	'/assets/playground_page/pic19.png',
	'/assets/playground_page/pic27.png',
	'/assets/playground_page/pic15.png',
	'/assets/playground_page/pic.png',
	'/assets/playground_page/pic1.png',
	'/assets/playground_page/pic2.png',
	'/assets/playground_page/pic3.png',
	'/assets/playground_page/pic4.png',
	'/assets/playground_page/pic5.png',
	'/assets/playground_page/pic6.png',
	'/assets/playground_page/pic7.png',
	'/assets/playground_page/pic9.png',
	'/assets/playground_page/pic11.png',
	'/assets/playground_page/pic13.png',
	'/assets/playground_page/pic16.png',
	'/assets/playground_page/pic17.png',
	'/assets/playground_page/pic18.png',
	'/assets/playground_page/pic22.png',
	'/assets/playground_page/pic23.png',
	'/assets/playground_page/pic25.png',
	'/assets/playground_page/pic26.png',
	'/assets/playground_page/pic28.png',
	'/assets/playground_page/pic29.png',
	'/assets/playground_page/pic30.png',
	'/assets/playground_page/pic35.png',
	'/assets/playground_page/pic14.png',
	'/assets/playground_page/pic12.png',
	'/assets/playground_page/pic24.png',
	'/assets/playground_page/pic8.png',
	'/assets/playground_page/pic21.png',
];

export const ParallaxScroll = ({ images, className }) => {
	const gridRef = useRef(null);
	const { scrollYProgress } = useScroll({
		// container: gridRef, // remove this if your container is not fixed height
		// offset: ['start start', 'end start'], // remove this if your container is not fixed height
	});

	const translateFirst = useTransform(scrollYProgress, [0, 1], [0, -200]);
	const translateSecond = useTransform(scrollYProgress, [0, 1], [0, 200]);
	const translateThird = useTransform(scrollYProgress, [0, 1], [0, -200]);

	const third = Math.ceil(images.length / 3);

	const firstPart = images.slice(0, third);
	const secondPart = images.slice(third, 2 * third);
	const thirdPart = images.slice(2 * third);

	return (
		<div
			className={cn('h-[90vw] items-start overflow-y-auto w-full', className)}
			ref={gridRef}
		>
			<div
				className='grid grid-cols-3 md:grid-cols-1 lg:grid-cols-3 items-start max-w-6xl mx-auto gap-16 py-40 px-10'
				ref={gridRef}
			>
				<div className='grid gap-10 md:p-20'>
					{firstPart.map((el, idx) => (
						<motion.div
							// Apply the translateY motion value here
							style={{ y: translateFirst }}
							key={'grid-1' + idx}
						>
							<Image
								src={el}
								className='h-90 w-full object-cover object-left-top rounded-lg gap-10 !m-0 !p-0'
								height='400'
								width='500'
								alt='creative coding images'
							/>
						</motion.div>
					))}
				</div>
				<div className='grid gap-10'>
					{secondPart.map((el, idx) => (
						<motion.div style={{ y: translateSecond }} key={'grid-2' + idx}>
							<Image
								src={el}
								className='h-90 w-full object-cover object-left-top rounded-lg gap-10 !m-0 !p-0'
								height='400'
								width='500'
								alt='creative coding images'
							/>
						</motion.div>
					))}
				</div>
				<div className='grid gap-10'>
					{thirdPart.map((el, idx) => (
						<motion.div style={{ y: translateThird }} key={'grid-3' + idx}>
							<Image
								src={el}
								className='h-90 w-full object-cover object-left-top gap-10 rounded-lg !m-0 !p-0'
								height='400'
								width='500'
								alt='creative coding images'
							/>
						</motion.div>
					))}
				</div>
			</div>
		</div>
	);
};
