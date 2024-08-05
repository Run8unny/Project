import Link from 'next/link';
import NewScene from '../_components/NewScene';
import Cursor from '../_components/Cursor';
import Picture from '../_components/Picture';
import Button from '../_components/Button';
export default function Page() {
	return (
		<div className='h-dvh'>
			<div className='h-auto flex justify-center items-center mt-20'>
				<Picture
					width={2000}
					height={200}
					src='/images/Untitled.png'
					alt='title'
				/>
			</div>
			<main className='h-screen'>
				<NewScene />
			</main>
			<div className='h-60 flex justify-center items-center mt-20'>
				<Button color={'white'}>
					<Link href='/'>Home</Link>
				</Button>
			</div>

			<Cursor />
		</div>
	);
}
