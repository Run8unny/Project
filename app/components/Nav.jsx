import Link from 'next/link';
import Logo from './Logo';

export default function Nav({ children }) {
	return (
		<div className='flex flex-row justify-between items-center gap-4 md:gap-10 px-4 py-5 mb-1 bg-transparent mq850:p-3'>
			<div className='mb-2 md:mb-0 mq850:hidden'>
				<Logo />
			</div>
			<div className='flex-grow'>{children}</div>
			<span className='text-[40px] font-array pr-4 hover:text-white mq850:hidden'>
				<Link href='/contact'>{`let's talk`}</Link>
			</span>
		</div>
	);
}
