import Image from 'next/image';
import Link from 'next/link';
import Nav from './components/Nav';
import dynamic from 'next/dynamic';
import Cursor from './components/Cursor';

const Scene = dynamic(() => import('./components/Scene'), { ssr: false });

export default function Home() {
	return (
		<div>
			<div>
				<Nav />
				<h1>Hello from homepage!</h1>
			</div>
			<main className='h-screen'>
				<Scene />
			</main>
		</div>
	);
}
