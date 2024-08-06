import Cursor from '../_components/Cursor';
import Footer from '../_components/Footer';
import AboutMe from '../_components/AboutMe';
import CanList from '../_components/CanList';
import LearnList from '../_components/LearnList';
import AboutLetters from '../_components/AboutLetters';

export default function Page() {
	return (
		<div className='w-full text-center font-be-vietnam-pro'>
			<AboutMe />
			<CanList />
			<LearnList />
			<AboutLetters />
			<Footer />
			<Cursor />
		</div>
	);
}
