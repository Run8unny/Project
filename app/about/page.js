import Scene from '../components/Scene';
import FadingImages from '../components/FadeImages';
import MenuItem from '../components/MenuItem';
import SmallNav from '../components/SmallNav';
import SmallFooter from '../components/SmallFooter';
import FooterItem from '../components/FooterItem';
import Cursor from '../components/Cursor';

export default function Page() {
	return (
		<div className='w-full text-center font-be-vietnam-pro '>
			<Cursor />
			<SmallNav>
				<MenuItem href='/'>back</MenuItem>
				<MenuItem href='./playground'>playground</MenuItem>
			</SmallNav>
			<Scene>
				<FadingImages />
			</Scene>
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
