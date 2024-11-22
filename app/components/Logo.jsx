import LogoIcon from './LogoIcon';
import Link from 'next/link';

export default function Logo() {
	return (
		<div className={`font-array pl-4`}>
			<Link href='/' className='flex flex-row'>
				<span className='text-[40px] hover:text-pink-400 self-center'>zan</span>
				<div>
					<LogoIcon />
				</div>
			</Link>
		</div>
	);
}
