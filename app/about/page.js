import Link from 'next/link';
import Button from '../_components/Button';
import SecondCursor from '../_components/SecondCursor';
import Info from '../_components/Info';
import Picture from '../_components/Picture';

export default function Page() {
	return (
		<div lassName='w-full h-[64rem] flex flex-col justify-center items-center text-center text-[1.75rem] font-be-vietnam-pro mt-[20px] relative'>
			<div className='flex justify-between items-center w-full px-7 py-6 mb-5 bg-transparent'>
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
			<div className='flex flex-row'>
				<Picture
					width={600}
					height={700}
					src={'/public/assets/about/me.mp4'}
					alt={'author picture'}
				></Picture>
				<Info />
			</div>
			<SecondCursor />
		</div>
	);
}
