import Link from 'next/link';

export default function MenuItem({ children, href }) {
	return (
		<li className='inline-flex h-full cursor-pointer text-xs items-center justify-center hover:text-black'>
			<Link href={href}>{children}</Link>
		</li>
	);
}
