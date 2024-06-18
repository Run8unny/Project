import ImageLogo from './ImageLogo';
import Link from 'next/link';

export default function Logo({ arrayFont }) {
	return (
		<div className={arrayFont.className}>
			<Link href='/' className='flex items-center'>
				<span className='text-4xl'>zan</span>
				<ImageLogo />
			</Link>
		</div>
	);
}
