import SecondCursor from '../components/SecondCursor';
import SmallNav from '../components/SmallNav';
import MenuItem from '../components/MenuItem';
import SmallFooter from '../components/SmallFooter';
import FooterItem from '../components/FooterItem';
import ParallaxScrollBox from '../components/ui/ParallaxScroll';
import ButtonTop from '../components/ButtonTop';

export default function Page() {
	return (
		<div
			className='w-full h-full text-center outline'
			data-scroll-to='top-of-page2'
		>
			<SmallNav>
				<MenuItem href='./home'>back</MenuItem>
				<MenuItem href='./work'>work</MenuItem>
			</SmallNav>
			<div className='flex items-start justify-center text-[10rem] px-10 outline xl:text-[9.8rem] lg:text-[8.5rem] mq1225:text-[7.5rem] mq1050:text-[6rem] mq850:text-[4.5rem] mq650:text-[3.8rem]'>
				<h1 className='w-full custom-font font-bold uppercase outline px-6 bg-black shadow_one'>
					PLAYGROUND
				</h1>
			</div>
			<ParallaxScrollBox />

			<div className='w-full flex flex-row justify-between items-center mt-7 outline'>
				<SmallFooter>
					<FooterItem href='https://github.com/Run8unny'>github</FooterItem>
					<FooterItem href='https://www.linkedin.com/'>linkedIn</FooterItem>
					<FooterItem href='https://pl.pinterest.com/zanwardaszka/'>
						pinterest
					</FooterItem>
					<ButtonTop targetId={'top-of-page2'}>↖︎top</ButtonTop>
				</SmallFooter>
			</div>
			<SecondCursor />
		</div>
	);
}
