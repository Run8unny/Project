import Cursor from '../components/Cursor';
import SmallNav from '../components/SmallNav';
import MenuItem from '../components/MenuItem';
import SmallFooter from '../components/SmallFooter';
import FooterItem from '../components/FooterItem';
import ParallaxScrollBox from '../components/ui/ParallaxScroll';
import ButtonTop from '../components/ButtonTop';
import ContactHeading from '../components/ContactHeading';

export default function Page() {
	return (
		<div
			className='felx flex-col justify-center items-center w-full'
			data-scroll-to='top-of-page2'
		>
			<SmallNav>
				<MenuItem href='./home'>back</MenuItem>
				<MenuItem href='./about'>about</MenuItem>
				<MenuItem href='./contact'>contact</MenuItem>
				<MenuItem href='./work'>work</MenuItem>
			</SmallNav>
			<div className='flex flex-col font-bold items-start justify-center text-left px-10 leading-none text-2xl xl:text-2xl lg:text-2xl mq1225:text-2xl mq1050:text-2xl mq850:text-xl mq650:text-[6.5] xs400:text-[5.5rem] xs400:p-0 xs400:m-3'>
				<h1 className='uppercas mt-6'>PLAY GROUND</h1>
			</div>

			<ParallaxScrollBox />

			<div className='flex flex-col font-bold items-start justify-center text-left px-10 leading-none text-xl  mq850:text-lg xs400:text-[5.5rem] xs400:p-0 xs400:m-3'>
				<h3 className='uppercas mt-6'>
					I’ve done all of these |except my dog| with shaders, R3F, and creative
					coding. It’s 3d & it’s moving. There’ll be the gallery soon.
				</h3>
			</div>
			<div className='w-full flex flex-row justify-between items-center mt-7 border-white border-t'>
				<SmallFooter>
					<FooterItem href='https://github.com/Run8unny'>github</FooterItem>
					<FooterItem href='https://www.linkedin.com/'>linkedIn</FooterItem>
					<FooterItem href='https://pl.pinterest.com/zanwardaszka/'>
						pinterest
					</FooterItem>
					<ButtonTop targetId={'top-of-page2'}>↖︎top</ButtonTop>
				</SmallFooter>
			</div>
			<Cursor />
		</div>
	);
}
