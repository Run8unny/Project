import Link from 'next/link';
import Button from '../_components/Button';
import SecondCursor from '../_components/SecondCursor';
import Info from '../_components/Info';
import VideoComponent from '../_components/VideoComponent';

export default function Page() {
	return (
		<div lassName='w-full h-[74rem] flex flex-col justify-center items-center text-center text-[1.75rem] font-be-vietnam-pro mt-[20px] relative'>
			<div className='flex justify-between items-center w-full px-7 py-6 mb-1 bg-transparent'>
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
			</div>
			<div className='flex flex-row justify-between'>
				<div className='w-1/2'></div>
				<div className='w-1/2'>
					<Info />
				</div>
			</div>
			<SecondCursor />
		</div>
	);
}
