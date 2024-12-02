import LogoIcon from './LogoIcon';
import Link from 'next/link';
import Image from 'next/image';

export default function Logo() {
	return (
		<div className={`pl-4`}>
			<Link href='/' className='flex flex-row'>
				<div className='text-[40px] hover:text-orange-500 self-center'>
					<Image
						width={105}
						height={90}
						src={'/assets/home/logo1.svg'}
						alt='logo sign'
					/>
				</div>
			</Link>
		</div>
	);
}
