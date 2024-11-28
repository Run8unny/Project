import Cursor from '../components/Cursor';
import SmallNav from '../components/SmallNav';
import MenuItem from '../components/MenuItem';
import SmallFooter from '../components/SmallFooter';
import FooterItem from '../components/FooterItem';
import LayoutWork from '../components/LayoutWork';

export default function Page() {
	return (
		<div className='w-full text-center outline'>
			<Cursor />
			<SmallNav>
				<MenuItem href='/'>back</MenuItem>
				<MenuItem href='./playground'>playground</MenuItem>
			</SmallNav>
			<div className='flex items-start justify-center text-[10rem] px-10 outline'>
				<h1 className='font-extrabold uppercase outline'>WORK</h1>
			</div>

			<div className='w-full'>
				<LayoutWork />
			</div>
			<SmallFooter>
				<FooterItem href='https://github.com/Run8unny'>github</FooterItem>
				<FooterItem href='https://www.linkedin.com/'>linkedIn</FooterItem>
				<FooterItem href='https://pl.pinterest.com/zanwardaszka/'>
					pinterest
				</FooterItem>
			</SmallFooter>
		</div>
	);
}
