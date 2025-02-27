import React from 'react';
import Button from './Button';

export default function CallMeButton() {
	const phoneNumber = '+48517452020';

	return (
		<a
			href={`tel:${phoneNumber}`}
			aria-label={`Call us at ${phoneNumber}`}
			className='hover:scale-105'
		>
			<Button>call me</Button>
		</a>
	);
}
