import Image from 'next/image';
export default function LayoutGridWork() {
	return (
		<div className='w-full h-screen grid grid-rows-6 md:grid-rows-4 grid-cols-5 md:grid-cols-5 gap-10 text-[12px] relative overflow-hidden box-border leading-normal mt-6 tracking-normal'>
			<div className='row-start-1 row-end-5 col-start-3 col-end-7 flex flex-col flex-grow items-start justify-start p-6 outline'>
				<SkeletonOne />
			</div>
			<div className='row-start-2 row-end-4 col-start-1 col-end-3 flex flex-col flex-grow items-start justify-start p-6 outline'>
				<SkeletonTwo />
			</div>
			<div className='row-start-4 row-end-6 col-start-4 col-end-6 flex flex-col flex-grow items-start justify-start p-6 outline'>
				<SkeletonThree />
			</div>
			<div className='row-start-4 row-end-5 col-start-2 col-end-4 flex flex-col flex-grow items-start justify-start p-6 outline'>
				<SkeletonFour />
			</div>
		</div>
	);
}

const SkeletonOne = () => {
	return (
		<div className='flex flex-col justify-center items-center'>
			<Image
				width={700}
				height={500}
				src={'/assets/work_page/FunnyBunny.png'}
				alt='game pic'
			/>
			<p className='font-normal text-base my-1 max-w-lg mq850:hidden'>
				[ A desktop game developed using React Three Fiber, incorporating custom
				shaders and 3D assets designed in Blender. ]
			</p>
			<p className='uppercase'>
				<a href='https://funnybunny-r3f-game-lac.vercel.app/'>Play</a>
			</p>
		</div>
	);
};

const SkeletonTwo = () => {
	return (
		<div className='flex flex-col justify-center items-center'>
			<Image
				width={500}
				height={400}
				src={'/assets/work_page/VanillaJS.png'}
				alt='website'
			/>
			<p className='font-normal text-base my-4 max-w-lg mq850:hidden'>
				[ An interactive website built using Vanilla JavaScript. ]
			</p>
			<p className='uppercase'>
				<a href='https://vanillajspage.vercel.app/'>Check</a>
			</p>
		</div>
	);
};
const SkeletonThree = () => {
	return (
		<div className='flex flex-col justify-center items-center'>
			<Image
				width={500}
				height={400}
				src={'/assets/work_page/BestShop.png'}
				alt='website'
			/>
			<p className='font-normal text-base my-4 max-w-lg mq850:hidden'>
				[ A single-page website developed using HTML and SASS, featuring a fully
				responsive design. ]
			</p>
			<p className='uppercase'>
				<a href='https://run8unny.github.io/Workshop__BestShop/'>Check</a>
			</p>
		</div>
	);
};
const SkeletonFour = () => {
	return (
		<div className='flex flex-col justify-center items-center'>
			<Image
				width={390}
				height={300}
				src={'/assets/work_page/shader.png'}
				alt='website'
			/>
			<p className='font-normal text-base my-4 max-w-lg mq850:hidden'>
				[ A gallery built with React Three Fiber and WebGL, featuring custom
				shaders. ]
			</p>
			{/* <p className='uppercase'>TBC</p> */}
		</div>
	);
};
