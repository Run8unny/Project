import Image from 'next/image';

export default function LogoIcon({ width, height, color, src, alt }) {
	return (
		<div className='w-full relative h-[5.625rem] overflow-hidden text-left text-[3rem] text-black font-array'>
			<Image
				className='absolute top-[0rem] right-[0.031rem] w-[2.094rem] h-[1.188rem]'
				width={30}
				height={40}
				alt=''
				src='Polygon 2.svg'
			/>
			<div className='absolute top-[calc(50%_-_28px)] left-[calc(50%_-_54.5px)] w-[6.813rem] h-[3.563rem] overflow-hidden'>
				<div className='absolute top-[calc(50%_-_23.5px)] left-[calc(50%_-_35.5px)] inline-block w-[4.5rem] h-[3.063rem]'>
					zan
				</div>
			</div>
		</div>
	);
}
