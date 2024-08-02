import LogoIcon from './LogoIcon';
import Link from 'next/link';

export default function Logo({ arrayFont }) {
	return (
		<div className={`${arrayFont.className} hover:scale-125 pl-4`}>
			<Link href='/' className='flex items-center'>
				<span className='text-6xl hover:text-pink-400'>zan</span>
				<LogoIcon width={30} height={30} color='bg-white' />
			</Link>
		</div>
	);
}
