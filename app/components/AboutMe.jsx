import Link from 'next/link';
import Button from './Button';
import Info from './Info';
import Image from 'next/image';
import SmallNav from './SmallNav';
export default function AboutMe() {
	return (
		<>
			<SmallNav>
				<div className='flex-shrink-0'>
					<Button>
						<Link href='/'>back</Link>
					</Button>
				</div>
				<div className='flex-shrink-0'>
					<Button>
						<Link href='/contact'>contact</Link>
					</Button>
				</div>
			</SmallNav>
			<div className='flex flex-row md:flex-row justify-center w-full p-16'>
				<div className='w-1/2 md:w-1/2 h-auto flex justify-end md:justify-end mb-10 md:mb-0'>
					<div
						className='relative w-full'
						style={{ maxWidth: '400px', aspectRatio: '550 / 671' }}
					>
						<Image
							src={'/assets/about/gifme.gif'}
							alt={'gif-author'}
							layout='fill'
							objectFit='contain'
						/>
					</div>
				</div>
				<div className='w-1/2 md:w-1/2'>
					<Info />
				</div>
			</div>
			{/* <div className='flex justify-center items-center pt-0 pb-10 px-6'>
				<Image
					src={'/assets/about/Frame 38.png'}
					alt={'decoration'}
					width={800}
					height={40}
				/>
			</div> */}
		</>
	);
}
