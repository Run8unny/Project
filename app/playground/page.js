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
			<div className='flex items-start justify-center px-10 outline text-[11rem] xl:text-[9.8rem] lg:text-[8.5rem] mq1225:text-[8rem] mq1050:text-[7.5rem] mq850:text-[5.5rem] mq650:text-[3rem] xs400:text-[2.8rem] text_shadow xs400:p-0 xs400:m-3'>
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
