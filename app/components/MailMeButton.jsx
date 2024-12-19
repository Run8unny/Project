import React from 'react';
import Button from './Button';

export default function MailMeButton() {
	const email = 'zaneta.wardaszka@gmail.com';
	const subject = 'Hello!';
	const body = 'I wanted to get in touch with you.';

	return (
		<a
			href={`mailto:${email}?subject=${encodeURIComponent(
				subject
			)}&body=${encodeURIComponent(body)}`}
			className='hover:scale-175'
		>
			<Button>mail me</Button>
		</a>
	);
}
