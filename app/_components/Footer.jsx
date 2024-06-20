import Logo from './Logo';
import Link from 'next/link';
import { faCircle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default function Footer({ arrayFont }) {
	return (
		<div>
			<ul
				className={`${arrayFont.className} flex justify-evenly gap-40 text-4xl py-4`}
			>
				<li>
					<FontAwesomeIcon icon={faCircle} className='px-2 text-sm' />
					<Link href='https://github.com/Run8unny'>Github</Link>
				</li>
				<li>
					<FontAwesomeIcon icon={faCircle} className='px-2 text-sm' />
					<Link href=''>LinkedIn</Link>
				</li>
				<li>
					<FontAwesomeIcon icon={faCircle} className='px-2 text-sm' />
					<Link href='https://pl.pinterest.com/zanwardaszka/'>Pinterest</Link>
				</li>
				<li>
					<FontAwesomeIcon icon={faCircle} className='px-2 text-sm' />
					<Link href=''>Facebook</Link>
				</li>
			</ul>
		</div>
	);
}
