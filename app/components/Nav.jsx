import Link from 'next/link';
import Logo from './Logo';

export default function Nav({ children }) {
	return (
		<div
			className='w-full flex flex-row justify-between items-center gap-4 md:gap-2 px-4 py-5 mb-1 bg-transparent mq750:p-3 xs400:p-0 xs400:m-0 xs400:w-full'
			data-scroll-to='top-of-page'
		>
			<div className='mb-2 md:mb-0 '>
				<Logo />
			</div>
			<div className='flex-grow'>{children}</div>
			<span className='text-[2rem] pr-5 md:text-[1.5rem] hover:text-white '>
				<Link href='/contact'>{`let's talk`}</Link>
			</span>
		</div>
	);
}
