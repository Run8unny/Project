import Image from 'next/image';
export default function LayoutWork() {
	return (
		<div className='w-full h-full flex flex-col justify-center items-center gap-10 text-[15px] relative overflow-hidden box-border leading-normal mt-6 tracking-normal outline mq850:inline-block'>
			<SkeletonOne />
			<SkeletonTwo />
			<SkeletonThree />
			<SkeletonFour />
		</div>
	);
}

const SkeletonOne = () => {
	return (
		<div className='flex flex-col justify-center items-center outline'>
			<Image
				width={600}
				height={400}
				src={'/assets/work_page/FunnyBunny.png'}
				alt='game pic'
				className='rounded-lg'
			/>
			<p className='font-normal text-[0.9rem] my-1 max-w-lg mq850:hidden'>
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
		<div className='flex flex-col justify-center items-center outline'>
			<Image
				width={600}
				height={400}
				src={'/assets/work_page/VanillaJS.png'}
				alt='website'
				className='rounded-lg'
			/>
			<p className='font-normal text-[0.9rem] my-4 max-w-lg mq850:hidden'>
				[ An interactive website built using Vanilla JavaScript. ]
			</p>
			<p className='uppercase text-orange-500'>
				<a href='https://vanillajspage.vercel.app/'>Check</a>
			</p>
		</div>
	);
};
const SkeletonTwo = () => {
	return (
		<div className='flex flex-col justify-center items-center outline'>
			<Image
				width={600}
				height={400}
				src={'/assets/work_page/BestShop.png'}
				alt='website'
				className='rounded-lg'
			/>
			<p className='font-normal text-[0.9rem] my-4 max-w-lg mq850:hidden'>
				[ A single-page website developed using HTML and SASS, featuring a fully
				responsive design. ]
			</p>
			<p className='uppercase text-orange-500'>
				<a href='https://run8unny.github.io/Workshop__BestShop/'>Check</a>
			</p>
		</div>
	);
};
const SkeletonFour = () => {
	return (
		<div className='flex flex-col justify-center items-center outline'>
			<Image
				width={600}
				height={400}
				src={'/assets/work_page/shader.png'}
				alt='website'
				className='rounded-lg'
			/>
			<p className='font-normal text-[0.9rem] my-4 max-w-lg mq850:hidden'>
				[ A gallery built with React Three Fiber and WebGL, featuring custom
				shaders. Coming soon. Check PLAYGROUND.]
			</p>
			{/* <p className='uppercase'>TBC</p> */}
		</div>
	);
};
