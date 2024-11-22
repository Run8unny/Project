import Image from 'next/image';
import SmallNav from '../components/SmallNav';
import Button from '../components/Button';
import Link from 'next/link';
import ContactButton from '../components/ContactButton';
import SecondCursor from '../components/SecondCursor';

export default function Page() {
	return (
		<div className='w-full h-full text-center font-be-vietnam-pro'>
			<SmallNav>
				<div className='flex-shrink-0'>
					<Button>
						<Link href='/'>back</Link>
					</Button>
				</div>
				<div className='flex-shrink-0'>
					<Button>
						<Link href='/work'>work</Link>
					</Button>
				</div>
			</SmallNav>
			<div>
				<div className='flex items-start justify-center text-[12rem] px-10'>
					<h1 className='font-extrabold'>PLAYGROUND</h1>
				</div>
			</div>
			<div className='w-full h-screen grid grid-rows-4 md:grid-rows-4 grid-cols-5 md:grid-cols-5 gap-16 text-[12px] relative overflow-hidden box-border leading-normal tracking-normal font-be-vietnam-pro'>
				<div className='row-start-1 row-end-2 col-start-1 col-end-2 flex flex-col items-start justify-start p-6'>
					<p>[ 3D HEAVEN MODEL]</p>
					<Link href='/gallery'>
						<Image
							src={'/assets/playground_page/pic1.png'}
							alt={'item'}
							width={300}
							height={300}
						/>
					</Link>
				</div>
				<div className='row-start-1 row-end-2 col-start-3 col-end-4 flex flex-col items-start justify-start p-6'>
					<p>[ 3D FUN ]</p>
					<Image
						src={'/assets/playground_page/pic5.png'}
						alt={'item'}
						width={250}
						height={250}
					/>
				</div>
				<div className='row-start-1 row-end-2 col-start-4 col-end-5 flex flex-col items-start justify-start p-6'>
					<p>[ PLAY WITH BOXES ]</p>
					<Link href='https://github.com/Run8unny/SimpleJs'>
						<Image
							src={'/assets/playground_page/pic3.png'}
							alt={'item'}
							width={300}
							height={300}
						/>
					</Link>
				</div>
				<div className='row-start-2 row-end-3 col-start-4 col-end-5 flex flex-col items-start justify-start p-6'>
					<p>[ TODO LIST ]</p>
					<Link href='https://github.com/Run8unny/SimpleJs'>
						<Image
							src={'/assets/playground_page/pic2.png'}
							alt={'item'}
							width={300}
							height={300}
						/>
					</Link>
				</div>
				<div className='row-start-3 row-end-4 col-start-1 col-end-2 flex flex-col items-start justify-start p-6'>
					<p>[ MY BRAIN ]</p>
					<Image
						src={'/assets/playground_page/pic12.png'}
						alt={'item'}
						width={300}
						height={300}
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
					<Link href='https://run8unny.github.io/Workshop__BestShop/'>
						<p>[ CALCULATOR ]</p>
						<Image
							src={'/assets/playground_page/pic10.png'}
							alt={'item'}
							width={300}
							height={300}
						/>
					</Link>
				</div>
			</div>
			<div className='w-full h-screen grid grid-rows-4 md:grid-rows-4 grid-cols-5 md:grid-cols-5 gap-20 text-[12px] relative overflow-hidden box-border leading-normal tracking-normal font-be-vietnam-pro'>
				<div className='row-start-1 row-end-2 col-start-1 col-end-2 flex flex-col items-start justify-start p-6'>
					<p>[ CODE VARIATION ]</p>
					<Image
						src={'/assets/playground_page/pic11.png'}
						alt={'item'}
						width={300}
						height={300}
					/>
				</div>
				<div className='row-start-1 row-end-2 col-start-3 col-end-4 flex flex-col items-start justify-start p-6'>
					<Link href='https://run8unny.github.io/Workshop__BestShop/'>
						<p>[ PRICE BOX ]</p>
						<Image
							src={'/assets/playground_page/pic4.png'}
							alt={'item'}
							width={300}
							height={300}
						/>
					</Link>
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
						<p>[ FIRST PAGE EVER ]</p>
						<Image
							src={'/assets/playground_page/pic9.png'}
							alt={'item'}
							width={300}
							height={300}
						/>
					</Link>
				</div>
				<div className='row-start-3 row-end-4 col-start-1 col-end-2 flex flex-col items-start justify-start p-6'>
					<p>[ MY LOVELY DOG ]</p>
					<Image
						src={'/assets/playground_page/pic8.png'}
						alt={'item'}
						width={300}
						height={300}
					/>
				</div>
			</div>
			<div className='w-full flex flex-row justify-between items-center mt-10'>
				<div className='flex justify-center items-start gap-7'>
					<div className='flex-shrink-0 my-10 mx-10'>
						<Button>↖︎top</Button>
					</div>
					<div className='flex-shrink-0 my-10 mx-5'>
						<Button>
							<Link href='https://github.com/Run8unny'>github</Link>
						</Button>
					</div>
					<div className='flex-shrink-0 my-10 mx-5'>
						<Button>
							<Link href='https://www.linkedin.com/'>linkedIn</Link>
						</Button>
					</div>
				</div>
				<div className='flex-shrink-0 fixed bottom-5 right-5'>
					<ContactButton />
				</div>
			</div>
			<SecondCursor />
		</div>
	);
}
