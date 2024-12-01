import React from 'react';
import Button from './Button';

const MailMeButton = () => {
	const email = 'zaneta.wardaszka@gmail.com';
	const subject = 'Hello!';
	const body = 'I wanted to get in touch with you.';

	return (
		<a
			href={`mailto:${email}?subject=${encodeURIComponent(
				subject
			)}&body=${encodeURIComponent(body)}`}
		>
			<Button>mail me</Button>
		</a>
	);
};

export default MailMeButton;
