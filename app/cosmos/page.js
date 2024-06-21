import Link from 'next/link';
import Button from '../_components/Button';
import SecondCursor from '../_components/SecondCursor';

export default async function Page() {
	const API_KEY = 'uD6B2AG1NlHimHwrFMLmyNRhS0QmiNgOLuIPe00Z';
	const res = await fetch(
		`https://api.nasa.gov/planetary/apod?api_key=${API_KEY}`
	);
	const data = await res.json();
	console.log(data);

	return (
		<div className='h-dvh flex w-auto flex-col justify-center items-center mt-40'>
			<h1 className='text-6xl text-slate-50 p-10'>{data.title}</h1>
			<div className='h-fit w-auto'>
				<img
					src={data.url}
					alt='cosmos image from NASA'
					className='h-4/5 w-fit'
				/>
				<p className='text-6xl  text-slate-50 p-10'>{data.date} Cosmos Image</p>
			</div>
			<Button color={'white'}>
				<Link href='/'>Home</Link>
			</Button>
			<SecondCursor />
		</div>
	);
}
