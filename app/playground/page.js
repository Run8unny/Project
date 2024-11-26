import Image from 'next/image';
import Link from 'next/link';
import SecondCursor from '../components/SecondCursor';
import SmallNav from '../components/SmallNav';
import MenuItem from '../components/MenuItem';
import SmallFooter from '../components/SmallFooter';
import FooterItem from '../components/FooterItem';
// import LayoutGridPlayground from '../components/LayoutGridPlayground';
import ParallaxScrollBox from '../components/ui/ParallaxScroll';

export default function Page() {
	return (
		<div className='w-full h-full text-center outline'>
			<SmallNav>
				<MenuItem href='/'>back</MenuItem>
				<MenuItem href='./work'>work</MenuItem>
			</SmallNav>
			<div>
				<div className='flex items-start justify-center text-[10rem] px-10 outline'>
					<h1 className='custom-font uppercase outline'>PLAYGROUND</h1>
				</div>
			</div>
			<ParallaxScrollBox />

			<div className='w-full flex flex-row justify-between items-center mt-7 outline'>
				<SmallFooter>
					<FooterItem href='https://github.com/Run8unny'>github</FooterItem>
					<FooterItem href='https://www.linkedin.com/'>linkedIn</FooterItem>
					<FooterItem href='https://pl.pinterest.com/zanwardaszka/'>
						pinterest
					</FooterItem>
				</SmallFooter>
			</div>
			<SecondCursor />
		</div>
	);
}
