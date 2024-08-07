import SmallNav from '../_components/SmallNav';
import Button from '../_components/Button';
import Link from 'next/link';
import ContactButton from '../_components/ContactButton';
import SecondCursor from '../_components/SecondCursor';

export default function Page() {
	return (
		<div className='w-full h-full text-center font-be-vietnam-pro p-10'>
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
				<div className='flex items-start justify-center text-[12rem]'>
					<h1 className='font-extrabold'>PLAYGROUND</h1>
				</div>
			</div>
			<div className='w-full h-screen grid grid-rows-4 md:grid-rows-4 grid-cols-5 md:grid-cols-5 gap-20 relative overflow-hidden box-border leading-normal tracking-normal font-be-vietnam-pro'></div>
			<div className='w-full h-screen grid grid-rows-4 md:grid-rows-4 grid-cols-5 md:grid-cols-5 gap-20 relative overflow-hidden box-border leading-normal tracking-normal font-be-vietnam-pro'></div>
			<div className='w-full flex flex-row justify-between items-center mt-10'>
				<div className='flex justify-center items-start gap-7'>
					<div className='flex-shrink-0'>
						<Button>↖︎top</Button>
					</div>
					<div className='flex-shrink-0'>
						<Button>
							<Link href='https://github.com/Run8unny'>github</Link>
						</Button>
					</div>
					<div className='flex-shrink-0'>
						<Button>
							<Link href='https://www.linkedin.com/'>linkedIn</Link>
						</Button>
					</div>
				</div>
				<div className='flex-shrink-0'>
					<ContactButton />
				</div>
			</div>
			<SecondCursor />
		</div>
	);
}
