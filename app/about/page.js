import SceneTwo from '../components/SceneTwo';
import FadingImages from '../components/FadeImages';
import MenuItem from '../components/MenuItem';
import SmallNav from '../components/SmallNav';
import Cursor from '../components/Cursor';
import AboutText from '../components/AboutText';
import Footer from '../components/Footer';

export default function Page() {
	return (
		<div className='felx flex-col justify-center items-center w-full cursor-pointer'>
			<Cursor />
			<div>
				<SmallNav>
					<MenuItem href='./home'>back</MenuItem>
					<MenuItem href='./contact'>contact</MenuItem>
					<MenuItem href='./playground'>playground</MenuItem>
					<MenuItem href='./work'>work</MenuItem>
				</SmallNav>
				<main>
					<div className='flex font-bold items-center justify-center text-center leading-none text-xl mt-10 mq850:text-lg xs400:text-[5.5rem] xs400:p-0 xs400:mt-3'>
						<h1 className='my-6'>
							HELLO THERE <br /> (. ͡❛ ‿ ͡❛.)
						</h1>
					</div>
					<div className='flex justify-center items-center mq1050:flex-col'>
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
