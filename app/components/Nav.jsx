import Link from 'next/link';
import Logo from './Logo';

export default function Nav({ children }) {
	return (
		<div
			className='fixed top-0 left-0 z-50 bg-zinc-950 min-w-full text-white flex-grow flex flex-row justify-between items-center gap-4 md:gap-2 px-4 mb-1 bg-transparent mq750:p-3 xs400:p-0 xs400:m-0 xs400:w-full  '
			data-scroll-to='top-of-page'
		>
			<div className='md:mb-0 hover:scale-150 xs400:hidden'>
				<Logo />
			</div>
			<div className='flex-grow'>{children}</div>
			<span className='text-base pr-5 md:text-sm hover:text-white hover:scale-150 xs400:hidden '>
				<Link href='/contact'>{`let's talk`}</Link>
			</span>
		</div>
	);
}
