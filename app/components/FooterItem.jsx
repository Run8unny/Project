import Button from './Button';
import Link from 'next/link';
export default function FooterItem({ children, href }) {
	return (
		<Link href={href} className='flex'>
			<Button>{children}</Button>
		</Link>
	);
}
