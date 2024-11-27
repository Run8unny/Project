'use client';
import { useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { cn } from '@/app/lib/utils';
export default function ParallaxScrollBox() {
	return (
		<>
			<ParallaxScroll images={images} />
			<div className='flex justify-center items-center'>
				<video className='w-full max-w-4xl' controls>
					<source src='/assets/playground_page/video1.mp4' type='video/mp4' />
					Your browser does not support the video tag.
				</video>
			</div>
		</>
	);
}

const images = [
	'/assets/playground_page/pic.png',
	'/assets/playground_page/pic1.png',
	'/assets/playground_page/pic2.png',
	'/assets/playground_page/pic3.png',
	'/assets/playground_page/pic4.png',
	'/assets/playground_page/pic5.png',
	'/assets/playground_page/pic6.png',
	'/assets/playground_page/pic7.png',
	'/assets/playground_page/pic8.png',
	'/assets/playground_page/pic9.png',
	'/assets/playground_page/pic11.png',
	'/assets/playground_page/pic12.png',
	'/assets/playground_page/pic13.png',
	'/assets/playground_page/pic14.png',
	'/assets/playground_page/pic15.png',
	'/assets/playground_page/pic16.png',
	'/assets/playground_page/pic17.png',
	'/assets/playground_page/pic18.png',
	'/assets/playground_page/pic19.png',
	'/assets/playground_page/pic21.png',
	'/assets/playground_page/pic23.png',
	'/assets/playground_page/pic25.png',
	'/assets/playground_page/pic28.png',
	'/assets/playground_page/pic29.png',
	'/assets/playground_page/pic30.png',
	'/assets/playground_page/pic35.png',
];

export const ParallaxScroll = ({ images, className }) => {
	const gridRef = useRef(null);
	const { scrollYProgress } = useScroll({
		container: gridRef, // remove this if your container is not fixed height
		offset: ['start start', 'end start'], // remove this if your container is not fixed height
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
			className={cn('h-[40rem] items-start overflow-y-auto w-full', className)}
			ref={gridRef}
		>
			<div
				className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 items-start  max-w-5xl mx-auto gap-10 py-40 px-10'
				ref={gridRef}
			>
				<div className='grid gap-10'>
					{firstPart.map((el, idx) => (
						<motion.div
							// Apply the translateY motion value here
							style={{ y: translateFirst }}
							key={'grid-1' + idx}
						>
							<Image
								src={el}
								className='h-80 w-full object-cover object-left-top rounded-lg gap-10 !m-0 !p-0'
								height='400'
								width='400'
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
								className='h-80 w-full object-cover object-left-top rounded-lg gap-10 !m-0 !p-0'
								height='400'
								width='400'
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
								className='h-80 w-full object-cover object-left-top gap-10 rounded-lg !m-0 !p-0'
								height='400'
								width='400'
								alt='creative coding images'
							/>
						</motion.div>
					))}
				</div>
			</div>
		</div>
	);
};
