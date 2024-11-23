import NewScene from '../components/NewScene';
import Cursor from '../components/Cursor';
import Picture from '../components/Picture';

export default function Page() {
	return (
		<div className='h-dvh'>
			<div className='h-auto flex justify-center items-center mt-20'>
				{/* <Picture
					width={2000}
					height={200}
					src='/images/Untitled.png'
					alt='title'
				/> */}
			</div>
			<main className='h-screen'>
				<NewScene />
			</main>
			<Cursor />
		</div>
	);
}
