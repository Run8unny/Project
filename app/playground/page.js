import Cursor from '../components/Cursor';
import MenuItem from '../components/MenuItem';
import ParallaxScrollBox from '../components/ui/ParallaxScroll';
import Footer from '../components/Footer';
import Nav from '../components/Nav';
import NavMenu from '../components/NavMenu';

export default function Page() {
	return (
		<div
			className='felx flex-col justify-center items-center w-full'
			data-scroll-to='top-of-page2'
		>
			<Cursor />
			<Nav>
				<NavMenu>
					<MenuItem href='./home'>home</MenuItem>
					<MenuItem href='/about'>about</MenuItem>
					<MenuItem href='./contact'>contact</MenuItem>
					<MenuItem href='./work'>work</MenuItem>
				</NavMenu>
			</Nav>
			<div className='flex flex-col font-bold items-start justify-center text-left px-10 leading-none text-2xl mq850:text-xl xs400:text-[7.5rem] xs400:p-0 xs400:m-3'>
				<h1 className='uppercas mt-6'>PLAY GROUND</h1>
			</div>

			<ParallaxScrollBox />

			<div className='flex flex-col font-bold items-start justify-center text-left px-10 leading-none text-xl mt-10 mq850:text-lg xs400:p-0 xs400:m-2 mb-3'>
				<h3 className=''>
					I’ve done all of these [except my dog] with shaders, R3F, and creative
					coding. It’s 3d & it’s moving. There’ll be the gallery soon.
				</h3>
			</div>
			<Footer />
		</div>
	);
}
