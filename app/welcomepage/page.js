import Link from 'next/link';
import Scene from '../components/Scene';
import Box from '../components/Box';
import SceneTwo from '../components/SceneTwo';

export default function Page() {
	return (
		<div className='h-screen'>
			<h1>Hello From Welcome Page</h1>
			<SceneTwo />
			<Link href='/'>Home</Link>
		</div>
	);
}
