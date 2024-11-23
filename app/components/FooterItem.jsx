import Button from './Button';
import Link from 'next/link';
export default function FooterItem({ children, href }) {
	return (
		<Link href={href}>
			<Button>{children}</Button>
		</Link>
	);
}