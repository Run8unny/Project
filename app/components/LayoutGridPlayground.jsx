import Image from 'next/image';
import Link from 'next/link';
export default function LayoutGridPlayground() {
	return (
		<>
			<div className='w-full h-screen grid grid-rows-4 md:grid-rows-4 grid-cols-5 md:grid-cols-5 gap-6 text-[12px] relative overflow-hidden box-border leading-normal tracking-normal'>
				<div className='row-start-1 row-end-2 col-start-1 col-end-2 flex flex-col items-start justify-start p-4'>
					<ImagePlayground src='/assets/playground_page/pic.png' />
				</div>
				<div className='row-start-1 row-end-2 col-start-5 col-end-6 flex flex-col items-start justify-start p-6'>
					<ImagePlayground src='/assets/playground_page/pic1.png' />
				</div>
				<div className='row-start-1 row-end-2 col-start-3 col-end-4 flex flex-col items-start justify-start p-6'>
					<ImagePlayground src='/assets/playground_page/pic3.png' />
				</div>
				<div className='row-start-1 row-end-2 col-start-4 col-end-5 flex flex-col items-start justify-start p-6'>
					<ImagePlayground src='/assets/playground_page/pic5.png' />
				</div>
				<div className='row-start-2 row-end-3 col-start-4 col-end-5 flex flex-col items-start justify-start p-6'>
					<ImagePlayground src='/assets/playground_page/pic2.png' />
				</div>
				<div className='row-start-3 row-end-4 col-start-1 col-end-2 flex flex-col items-start justify-start p-6'>
					<ImagePlayground src='/assets/playground_page/pic6.png' />
				</div>
				<div className='row-start-2 row-end-4 col-start-2 col-end-4 flex flex-col items-start justify-start p-20'>
					<p>[ CREATIVE CODING 1 ]</p>
					<video className='w-full max-w-4xl' controls>
						<source src='/assets/playground_page/video1.mp4' type='video/mp4' />
						Your browser does not support the video tag.
					</video>
				</div>
				<div className='row-start-4 row-end-5 col-start-4 col-end-5 flex flex-col items-start justify-start p-6'>
					<ImagePlayground src='/assets/playground_page/pic8.png' />
				</div>
			</div>
			<div className='w-full h-screen grid grid-rows-4 md:grid-rows-4 grid-cols-5 md:grid-cols-5 gap-20 text-[12px] relative overflow-hidden box-border leading-normal tracking-normal'>
				<div className='row-start-1 row-end-2 col-start-1 col-end-2 flex flex-col items-start justify-start p-6'>
					<p>[ CODE VARIATION ]</p>

					<ImagePlayground src='/assets/playground_page/pic11.png' />
				</div>
				<div className='row-start-1 row-end-2 col-start-3 col-end-4 flex flex-col items-start justify-start p-6'>
					<ImagePlayground src='/assets/playground_page/pic13.png' />
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
						<ImagePlayground src='/assets/playground_page/pic2.png' />
					</Link>
				</div>
				<div className='row-start-3 row-end-4 col-start-1 col-end-2 flex flex-col items-start justify-start p-6'>
					<ImagePlayground src='/assets/playground_page/pic16.png' />
				</div>
			</div>
		</>
	);
}

export const ImagePlayground = ({ src }) => {
	return <Image src={src} alt={'item'} width={400} height={400} />;
};
