import Link from 'next/link';
import Image from 'next/image';

export default function Logo() {
	return (
		<div className={`pl-4`}>
			<Link href='/' className='flex flex-row'>
				<div className='text-[40px] hover:text-orange-500 self-center w-auto h-auto m-5'>
					<Image
						width={60}
						height={50}
						src={'/icons/zw_icon.svg'}
						alt='logo sign'
					/>
				</div>
			</Link>
		</div>
	);
}
