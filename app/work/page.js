import Cursor from '../components/Cursor';
import SmallNav from '../components/SmallNav';
import MenuItem from '../components/MenuItem';
import SmallFooter from '../components/SmallFooter';
import FooterItem from '../components/FooterItem';
import LayoutWork from '../components/LayoutWork';

export default function Page() {
	return (
		<div className='felx flex-col justify-center items-center w-full'>
			<Cursor />
			<SmallNav>
				<MenuItem href='./home'>back</MenuItem>
				<MenuItem href='./about'>about</MenuItem>
				<MenuItem href='./contact'>contact</MenuItem>
				<MenuItem href='./playground'>playground</MenuItem>
			</SmallNav>
			<div className='flex flex-col font-bold items-start justify-center text-left px-10 leading-none text-2xl xl:text-2xl lg:text-2xl mq1225:text-2xl mq1050:text-2xl mq850:text-xl mq650:text-[6.5] xs400:text-[5.5rem] xs400:p-0 xs400:m-3 min-w-3.5'>
				<h1 className='uppercase mt-6 font-bold'>WORK</h1>
				<p className='text-lg md:hidden font-bold border-b-2 border-white'>
					work work work work work work
					<span className='text-[14rem] md:text-[10rem] font-bold'>WORK</span>
				</p>
			</div>
			<LayoutWork />
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
