import LogoIcon from './LogoIcon';
import Link from 'next/link';

export default function Logo() {
	return (
		<div className={`font-array pl-4`}>
			<Link href='/' className='flex flex-row'>
				<span className='text-[40px] hover:text-pink-400 self-center'>zan</span>
				<div>
					<LogoIcon width={27} height={30} />
				</div>
		<div className={`${arrayFont.className} hover:scale-125 pl-4`}>
			<Link href='/' className='flex items-center'>
				<span className='text-6xl hover:text-pink-400'>zan</span>
				<LogoIcon width={30} height={30} color='bg-white' />
			</Link>
		</div>
	);
}
