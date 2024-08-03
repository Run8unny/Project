import Link from 'next/link';
import Cursor from '../_components/Cursor';
import Button from '../_components/Button';
export default function Page() {
	return (
		<div className='h-dvh w-auto felx justify-center items-center'>
			<h1 className='text-9xl text-right m-10'>Hello From About</h1>
			<Button color={'green-600'}>
				<Link href='/'>Home</Link>
			</Button>
			<Cursor />
		</div>
	);
}
