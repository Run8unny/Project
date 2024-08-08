import Cursor from '../_components/Cursor';
import Button from '../_components/Button';
import Link from 'next/link';
import SmallNav from '../_components/SmallNav';
import ContactButton from '../_components/ContactButton';

export default function Page() {
	return (
		<div className='h-full w-full overflow-hidden flex flex-col justify-between leading-[normal] tracking-[normal] font-be-vietnam-pro'>
			<SmallNav>
				<div className='flex-shrink-0 z-10'>
					<Button>
						<Link href='/'>back</Link>
					</Button>
				</div>
				<div className='flex-shrink-0 z-10'>
					<Button>
						<Link href='/playground'>playground</Link>
					</Button>
				</div>
			</SmallNav>
			<div className='flex-grow flex items-center justify-center relative'>
				<div className='w-full text-center mt-[50px] mx-[40px]'>
					{' '}
					{/* Added padding top here */}
					{[...Array(3)].map((_, index) => (
						<div
							key={index}
							className={`text-[13rem] uppercase font-extrabold font-be-vietnam-pro text-[transparent] [-webkit-text-stroke:1px_#fff] ${
								index === 1
									? '[text-shadow:2px_0_0_#fff,_0_2px_0_#fff,_-2px_0_0_#fff,_0_-2px_0_#fff]'
									: ''
							}`}
							style={{
								lineHeight: '-1rem',
								marginTop: '-18.7rem',
							}}
						>
							WORK IN PROGRESS
						</div>
					))}
				</div>
			</div>
			<div className='fixed bottom-5 right-5 text-green-500'>
				<ContactButton />
			</div>
			<Cursor />
		</div>
	);
}
