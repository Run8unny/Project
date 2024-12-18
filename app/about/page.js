import SceneTwo from '../components/SceneTwo';
import FadingImages from '../components/FadeImages';
import MenuItem from '../components/MenuItem';
import SmallNav from '../components/SmallNav';
import SmallFooter from '../components/SmallFooter';
import FooterItem from '../components/FooterItem';
import Cursor from '../components/Cursor';
import AboutText from '../components/AboutText';

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
						<h1 className='mt-6'>
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
			<div className='w-full flex flex-row justify-between items-center mt-7 border-white border-t'>
				<SmallFooter>
					<FooterItem href='https://github.com/Run8unny'>github</FooterItem>
					<FooterItem href='https://www.linkedin.com/'>linkedIn</FooterItem>
					<FooterItem href='https://pl.pinterest.com/zanwardaszka/'>
						pinterest
					</FooterItem>
				</SmallFooter>
			</div>
		</div>
	);
}
