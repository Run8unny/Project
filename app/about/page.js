import SceneTwo from '../components/SceneTwo';
import FadingImages from '../components/FadeImages';
import MenuItem from '../components/MenuItem';
import SmallNav from '../components/SmallNav';
import SmallFooter from '../components/SmallFooter';
import FooterItem from '../components/FooterItem';
import Cursor from '../components/Cursor';

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
					<div className='flex font-bold items-center justify-center text-center leading-none text-xl lg:text-[9rem] mq1225:text[8.5rem] mq1050:text-[8rem] mq850:text-[6rem] xs400:text-[3.5rem] xs400:p-0 xs400:m-3'>
						<h1 className='mt-6'>HELLO (. ͡❛ ‿ ͡❛.)</h1>
					</div>
					<SceneTwo>
						<FadingImages />
					</SceneTwo>
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
