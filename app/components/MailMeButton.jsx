import React from 'react';
import Button from './Button';

export default function MailMeButton({ children }) {
	const email = 'zaneta.wardaszka@gmail.com';
	const subject = 'Hello!';
	const body = 'I wanted to get in touch with you.';

	return (
		<a
			href={`mailto:${email}?subject=${encodeURIComponent(
				subject
			)}&body=${encodeURIComponent(body)}`}
			className='hover:scale-105'
		>
			<Button>{children}</Button>
		</a>
	);
}
