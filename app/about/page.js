import dynamic from 'next/dynamic';
import FadingImages from '../components/FadeImages';
import MenuItem from '../components/MenuItem';
import Cursor from '../components/Cursor';
import AboutText from '../components/AboutText';
import Footer from '../components/Footer';
import Nav from '../components/Nav';
import NavMenu from '../components/NavMenu';

const SceneTwo = dynamic(() => import('../components/SceneTwo'), {
	ssr: false,
});

export default function Page() {
	return (
		<div className='felx flex-col justify-center items-center w-full cursor-pointer'>
			<Nav>
				<NavMenu>
					<MenuItem href='./home'>home</MenuItem>
					<MenuItem href='./contact'>contact</MenuItem>
					<MenuItem href='./playground'>playground</MenuItem>
					<MenuItem href='./work'>work</MenuItem>
				</NavMenu>
			</Nav>
			<Cursor />
			<div>
				<main>
					<div className='top-20 relative flex font-bold items-center justify-center text-center leading-none text-xl mt-10 mq850:text-lg xs400:text-[5.5rem] xs400:p-0 xs400:mt-1'>
						<h1 className='my-8'>
							HELLO THERE <br /> (. ͡❛ ‿ ͡❛.)
						</h1>
					</div>
					<div className='flex flex-col font-bold items-start justify-center text-left px-10 leading-none text-base mt-10 mq850:text-sm xs400:text-xs xs400:p-0 xs400:m-2'>
						<h3 className='my-4 py-20'>
							Hi! I’m Zan. Front-end developer who loves design, creative
							programming, and 3D art. I always strive to make a lasting
							positive impact on the digital landscape and business with a
							passion for problem-solving and development. I am happy to create
							custom-coded websites that are tailored to your brand. I also
							focus on accessibility, performance, and scalability. When I’m not
							working, I enjoy climbing & knitting. Dog lover.
						</h3>
					</div>
					<div className='flex justify-center items-center mq1050:flex-col m-10'>
						<SceneTwo>
							<FadingImages />
						</SceneTwo>
						<AboutText />
					</div>
				</main>
			</div>
			<Footer />
		</div>
	);
}
