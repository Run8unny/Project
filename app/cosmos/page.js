import Link from 'next/link';

export default async function Page() {
	const API_KEY = 'uD6B2AG1NlHimHwrFMLmyNRhS0QmiNgOLuIPe00Z';
	const q = 'neptun photo';
	const res = await fetch(
		`https://api.nasa.gov/planetary/apod?api_key=${API_KEY}`
	);
	const data = await res.json();
	console.log(data);

	return (
		<div className='h-dvh'>
			<h1>This is Cosomos</h1>
			<Link href='/'>Home</Link>
			<div className='h-dvh w-auto'>
				<img
					src={data.url}
					alt='cosmos image from NASA'
					className='h-4/5 w-auto'
				/>
			</div>
		</div>
	);
}
