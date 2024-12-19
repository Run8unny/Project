import Cursor from '../components/Cursor';
import SmallNav from '../components/SmallNav';
import MenuItem from '../components/MenuItem';
import LayoutWork from '../components/LayoutWork';
import Footer from '../components/Footer';
import Image from 'next/image';

export default function Page() {
	return (
		<div className='felx flex-col justify-center items-center w-full h-screen bg-dot-zinc-950/[0.25]'>
			<Cursor />
			<SmallNav>
				<MenuItem href='./home'>back</MenuItem>
				<MenuItem href='./about'>about</MenuItem>
				<MenuItem href='./contact'>contact</MenuItem>
				<MenuItem href='./playground'>playground</MenuItem>
			</SmallNav>
			<div className='flex inset-0 sticky z-100 flex-col font-bold items-center justify-center px-10 my-20 leading-none text-2xl mq850:text-xl xs400:text-[7.5rem] xs400:p-0 xs400:m-3 min-w-3.5 hover:animate-bounce '>
				<h1 className='uppercase font-bold'>WORK</h1>
			</div>
			{/* <LayoutWork /> */}
			<div className='inset-2 flex justify-center sticky items-center z-30'>
				<SkeletonOne />
			</div>
			<div className=' inset-1 flex justify-center sticky items-center z-20'>
				<SkeletonTwo />
			</div>
			<div className='sticky inset-0 flex justify-center items-center z-10'>
				<SkeletonThree />
			</div>
			<Footer />
		</div>
	);
}

const SkeletonOne = () => {
	return (
		<div className='flex flex-col justify-center items-center bg-light-bg dark:bg-dark-bg p-30'>
			<Image
				width={900}
				height={450}
				src={'/assets/work_page/FunnyBunny.png'}
				alt='game pic'
				className='md:w-[35rem] rounded-3xl'
			/>
			<p className='font-normal text-xxs my-1 max-w-[26rem] hover:scale-125'>
				A desktop game developed using React Three Fiber, incorporating custom
				shaders and 3D assets designed in Blender.
			</p>
			<p className='uppercase text-orange-500 pb-20'>
				<a href='https://funnybunny-r3f-game-lac.vercel.app/'>Play</a>
			</p>
		</div>
	);
};

const SkeletonThree = () => {
	return (
		<div className='flex flex-col justify-center items-center bg-light-bg dark:bg-dark-bg p-30'>
			<Image
				width={900}
				height={450}
				src={'/assets/work_page/VanillaJS.png'}
				alt='website'
				className='md:w-[35rem] rounded-3xl'
			/>
			<p className='font-normal text-xxs my-4 max-w-[26rem] hover:scale-125'>
				An interactive website built using Vanilla JavaScript.
			</p>
			<p className='uppercase text-orange-500 pb-20'>
				<a href='https://vanillajspage.vercel.app/'>Check</a>
			</p>
		</div>
	);
};
const SkeletonTwo = () => {
	return (
		<div className='flex flex-col justify-center items-center bg-light-bg dark:bg-dark-bg p-30'>
			<Image
				width={900}
				height={450}
				src={'/assets/work_page/BestShop.png'}
				alt='website'
				className='md:w-[35rem] rounded-3xl'
			/>
			<p className='font-normal text-xxs my-4 max-w-[26rem] hover:scale-125'>
				A single-page website developed using HTML and SASS, featuring a fully
				responsive design.
			</p>
			<p className='uppercase text-orange-500 pb-20 '>
				<a href='https://run8unny.github.io/Workshop__BestShop/'>Check</a>
			</p>
		</div>
	);
};
