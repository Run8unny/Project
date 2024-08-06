import SmallNav from '../_components/SmallNav';
import Button from '../_components/Button';
import Link from 'next/link';
import ContactButton from '../_components/ContactButton';

export default function Page() {
	return (
		<div className='w-full text-center font-be-vietnam-pro'>
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

			<div className='w-full flex flex-row justify-between items-center p-5'>
				<div className='flex justify-center items-center gap-7'>
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
				<ContactButton />
			</div>
		</div>
	);
}
