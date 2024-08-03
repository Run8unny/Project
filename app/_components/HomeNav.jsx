import Link from 'next/link';

export default function HomeMenu() {
	return (
		<ul className='flex gap-4 items-center text-lg space-x-2'>
			<li className='hover:text-pink-400'>
				<Link href='/about'>[ About ]</Link>
			</li>
			<li className='hover:text-pink-400'>
				<Link href='/gallery'>[ Gallery ]</Link>
			</li>
			<li className='hover:text-pink-400'>
				<Link href='/contact'>[ Contact ]</Link>
			</li>
			<li className='hover:text-pink-400'>
				<Link href='/cosmos'>[ Cosmos ]</Link>
			</li>
		</ul>
	);
}
