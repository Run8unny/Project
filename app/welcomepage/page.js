import Link from 'next/link';

export default function Page() {
	return (
		<div className='h-screen'>
			<h1>Hello From Welcome Page</h1>

			<Link href='/'>Home</Link>
		</div>
	);
}
