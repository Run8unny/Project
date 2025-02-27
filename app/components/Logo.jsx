import Link from 'next/link';
import Image from 'next/image';

export default function Logo() {
	return (
		<div className={`pl-4`}>
			<Link href='/' className='flex flex-row'>
				<div className='hover:text-orange-500 w-auto h-auto'>
					<Image
						width={65}
						height={50}
						src={'/icons/logo_white.svg'}
						alt='logo sign'
					/>
				</div>
			</Link>
		</div>
	);
}
