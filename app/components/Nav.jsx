import Logo from './Logo';

export default function Nav({ children }) {
	const email = 'zaneta.wardaszka@gmail.com';
	const subject = 'Hello!';
	const body = 'I wanted to get in touch with you.';

	return (
		<div
			className='fixed top-0 left-0 z-50 w-screen flex-grow flex flex-row justify-between items-center mb-1 bg-transparent xs400:w-full py-8 pl-6 pr-12'
			data-scroll-to='top-of-page'
		>
			<div className='md:mb-0 hover:scale-105 xs400:hidden'>
				<Logo />
			</div>
			<div>{children}</div>
		</div>
	);
}
