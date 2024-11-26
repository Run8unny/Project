import Image from 'next/image';
import Link from 'next/link';
import SecondCursor from '../components/SecondCursor';
import SmallNav from '../components/SmallNav';
import MenuItem from '../components/MenuItem';
import SmallFooter from '../components/SmallFooter';
import FooterItem from '../components/FooterItem';

export default function Page() {
	return (
		<div className='w-full h-full text-center'>
			<SmallNav>
				<MenuItem href='/'>back</MenuItem>
				<MenuItem href='./work'>work</MenuItem>
			</SmallNav>
			<div>
				<div className='flex items-start justify-center text-[11rem] px-10'>
					<h1 className='custom-font uppercase'>PLAYGROUND</h1>
				</div>
			</div>
			<div className='w-full h-screen grid grid-rows-4 md:grid-rows-4 grid-cols-5 md:grid-cols-5 gap-16 text-[12px] relative overflow-hidden box-border leading-normal tracking-normal'>
				<div className='row-start-1 row-end-2 col-start-1 col-end-2 flex flex-col items-start justify-start p-6'>
					<Link href='/gallery'>
						<Image
							src={'/assets/playground_page/pic1.png'}
							alt={'item'}
							width={350}
							height={350}
						/>
					</Link>
				</div>
				<div className='row-start-1 row-end-2 col-start-3 col-end-4 flex flex-col items-start justify-start p-6'>
					<Image
						src={'/assets/playground_page/pic5.png'}
						alt={'item'}
						width={350}
						height={350}
					/>
				</div>
				<div className='row-start-1 row-end-2 col-start-3 col-end-4 flex flex-col items-start justify-start p-6'>
					<Image
						src={'/assets/playground_page/pic5.png'}
						alt={'item'}
						width={350}
						height={350}
					/>
				</div>
				<div className='row-start-1 row-end-2 col-start-4 col-end-5 flex flex-col items-start justify-start p-6'>
					<Image
						src={'/assets/playground_page/pic3.png'}
						alt={'item'}
						width={350}
						height={350}
					/>
				</div>
				<div className='row-start-2 row-end-3 col-start-4 col-end-5 flex flex-col items-start justify-start p-6'>
					<Image
						src={'/assets/playground_page/pic2.png'}
						alt={'item'}
						width={350}
						height={350}
					/>
				</div>
				<div className='row-start-3 row-end-4 col-start-1 col-end-2 flex flex-col items-start justify-start p-6'>
					<Image
						src={'/assets/playground_page/pic12.png'}
						alt={'item'}
						width={400}
						height={400}
					/>
				</div>
				<div className='row-start-2 row-end-4 col-start-2 col-end-4 flex flex-col items-start justify-start p-20'>
					<p>[ CREATIVE CODING 1 ]</p>
					<video className='w-full max-w-4xl' controls>
						<source src='/assets/playground_page/video1.mp4' type='video/mp4' />
						Your browser does not support the video tag.
					</video>
				</div>
				<div className='row-start-4 row-end-5 col-start-4 col-end-5 flex flex-col items-start justify-start p-6'>
					<Image
						src={'/assets/playground_page/pic10.png'}
						alt={'item'}
						width={350}
						height={350}
					/>
				</div>
			</div>
			<div className='w-full h-screen grid grid-rows-4 md:grid-rows-4 grid-cols-5 md:grid-cols-5 gap-20 text-[12px] relative overflow-hidden box-border leading-normal tracking-normal'>
				<div className='row-start-1 row-end-2 col-start-1 col-end-2 flex flex-col items-start justify-start p-6'>
					<p>[ CODE VARIATION ]</p>
					<Image
						src={'/assets/playground_page/pic11.png'}
						alt={'item'}
						width={400}
						height={400}
					/>
				</div>
				<div className='row-start-1 row-end-2 col-start-3 col-end-4 flex flex-col items-start justify-start p-6'>
					<Image
						src={'/assets/playground_page/pic4.png'}
						alt={'item'}
						width={350}
						height={350}
					/>
				</div>
				<div className='row-start-2 row-end-3 col-start-2 col-end-4 flex flex-col items-start justify-start p-20'>
					<p>[ CREATIVE CODING 2 ]</p>
					<video className='w-full max-w-4xl' controls>
						<source src='/assets/playground_page/video2.mp4' type='video/mp4' />
						Your browser does not support the video tag.
					</video>
				</div>
				<div className='row-start-2 row-end-3 col-start-4 col-end-5 flex flex-col items-start justify-start p-6'>
					<Link href='https://github.com/Run8unny/HappyPage'>
						<Image
							src={'/assets/playground_page/pic9.png'}
							alt={'item'}
							width={400}
							height={400}
						/>
					</Link>
				</div>
				<div className='row-start-3 row-end-4 col-start-1 col-end-2 flex flex-col items-start justify-start p-6'>
					<Image
						src={'/assets/playground_page/pic8.png'}
						alt={'item'}
						width={400}
						height={400}
					/>
				</div>
			</div>
			<div className='w-full flex flex-row justify-between items-center mt-7'>
				<SmallFooter>
					<FooterItem href='https://github.com/Run8unny'>github</FooterItem>
					<FooterItem href='https://www.linkedin.com/'>linkedIn</FooterItem>
					<FooterItem href='https://pl.pinterest.com/zanwardaszka/'>
						pinterest
					</FooterItem>
				</SmallFooter>
			</div>
			<SecondCursor />
		</div>
	);
}
