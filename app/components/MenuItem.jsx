import Link from 'next/link';
import Button from './Button';

export default function MenuItem({ children }) {
	return (
		<li className='inline-flex h-full cursor-pointer items-center justify-center m-1'>
			<Button>
				<Link href='/about'>{children}</Link>
			</Button>
		</li>
	);
}
