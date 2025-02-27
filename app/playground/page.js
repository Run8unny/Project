import Cursor from '../components/Cursor';
import MenuItem from '../components/MenuItem';
import ParallaxScrollBox from '../components/ui/ParallaxScroll';
import Nav from '../components/Nav';
import NavMenu from '../components/NavMenu';

export default function Page() {
	return (
		<div
			className='felx flex-col justify-center items-center w-full bg-myblack'
			data-scroll-to='top-of-page2'
		>
			<Nav>
				<NavMenu>
					<MenuItem href='./'>Home</MenuItem>
					<MenuItem href='/about'>About</MenuItem>
					<MenuItem href='./contact'>Contact</MenuItem>
				</NavMenu>
			</Nav>
			<Cursor />
			<div className='h-50 top-20 xs400:top-10 relative flex flex-col font-bold items-center justify-center text-xl mq850:text-lg xs400:text-[5.5rem] xs400:mt-1 xs400:p-0'>
				<h1 className='uppercase text-center mt-16'>
					<span>PLAY</span> <span>GROUND</span>
				</h1>
			</div>

			<ParallaxScrollBox />

			<div className='flex flex-col font-bold items-start justify-center leading-none text-lg mt-10 mq850:text-base xs400:p-0 xs400:m-2 mb-3 px-10'>
				<h3 className='mb-10'>
					I’ve done all of these [except my dog] with shaders, R3F, and creative
					coding. It’s 3d & it’s moving. There’ll be the gallery soon.
				</h3>
			</div>
		</div>
	);
}
