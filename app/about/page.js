import Scene from '../components/Scene';
import FadingImages from '../components/FadeImages';
import MenuItem from '../components/MenuItem';
import SmallNav from '../components/SmallNav';
import SmallFooter from '../components/SmallFooter';
import FooterItem from '../components/FooterItem';
import Cursor from '../components/Cursor';
import Nav from '../components/Nav';
import NavMenu from '../components/NavMenu';
import Footer from '../components/Footer';

export default function Page() {
	return (
		<div className='felx flex-col justify-center items-center w-full'>
			<Cursor />
			<div>
				<SmallNav>
					<MenuItem href='./home'>back</MenuItem>
					<MenuItem href='./playground'>playground</MenuItem>
				</SmallNav>
				<main>
					<Scene>
						<FadingImages />
					</Scene>
				</main>
			</div>
			<div className='w-full flex flex-row justify-between items-center mt-7 outline'>
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
