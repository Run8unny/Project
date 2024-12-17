import Image from 'next/image';
export default function LayoutWork() {
	return (
		<div className='w-full h-screen grid grid-rows-5 md:grid-rows-3 grid-cols-4 md:grid-cols-2 gap-6 text-[12px] relative overflow-hidden box-border leading-normal tracking-normal md:h-fit mt-10 mb-10 '>
			<div className='row-start-1 row-end-2 col-start-3 col-end-5 md:col-start-1'>
				<SkeletonOne />
			</div>
			<div className='row-start-4 row-end-6 col-start-3 col-end-5 md:col-start-1 md:row-start-2'>
				<SkeletonThree />
			</div>
			<div className='row-start-2 row-end-3 col-start-1 col-end-3 md:col-start-1 md:row-start-4'>
				<SkeletonTwo />
			</div>

			<div className='row-start-4 row-end-6 col-start-1 col-end-2 flex flex-col font-bold items-start justify-center text-left px-10 leading-none text-xl xs400:p-0 xs400:m-3'>
				<h1 className='uppercase mt-6'>TBC</h1>
			</div>
		</div>
	);
}

const SkeletonOne = () => {
	return (
		<div className='flex flex-col justify-center items-center p-10'>
			<Image
				width={500}
				height={450}
				src={'/assets/work_page/FunnyBunny.png'}
				alt='game pic'
				className='md:w-[35rem]'
			/>
			<p className='font-normal text-xxs my-1 max-w-[26rem]'>
				[ A desktop game developed using React Three Fiber, incorporating custom
				shaders and 3D assets designed in Blender. ]
			</p>
			<p className='uppercase text-orange-500'>
				<a href='https://funnybunny-r3f-game-lac.vercel.app/'>Play</a>
			</p>
		</div>
	);
};

const SkeletonThree = () => {
	return (
		<div className='flex flex-col justify-center items-center p-10'>
			<Image
				width={500}
				height={450}
				src={'/assets/work_page/VanillaJS.png'}
				alt='website'
				className='md:w-[35rem]'
			/>
			<p className='font-normal text-xxs my-4 max-w-[26rem]'>
				[ An interactive website built using Vanilla JavaScript. ]
			</p>
			<p className='uppercase text-orange-500 '>
				<a href='https://vanillajspage.vercel.app/'>Check</a>
			</p>
		</div>
	);
};
const SkeletonTwo = () => {
	return (
		<div className='flex flex-col justify-center items-center p-10 mb-16'>
			<Image
				width={500}
				height={450}
				src={'/assets/work_page/BestShop.png'}
				alt='website'
				className='md:w-[35rem]'
			/>
			<p className='font-normal text-xxs my-4 max-w-[26rem]'>
				[ A single-page website developed using HTML and SASS, featuring a fully
				responsive design. ]
			</p>
			<p className='uppercase text-orange-500 '>
				<a href='https://run8unny.github.io/Workshop__BestShop/'>Check</a>
			</p>
		</div>
	);
};
const SkeletonFour = () => {
	return (
		<div className='flex flex-col justify-center items-center p-10'>
			<Image
				width={500}
				height={450}
				src={'/assets/work_page/shader.png'}
				alt='website'
			/>
			<p className='font-normal text-xxs my-4 max-w-lg mq850:hidden'>
				[ A gallery built with React Three Fiber and WebGL, featuring custom
				shaders. Coming soon. Check PLAYGROUND.]
			</p>
			{/* <p className='uppercase'>TBC</p> */}
		</div>
	);
};
