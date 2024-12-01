import React from 'react';
import Button from './Button';

const CallMeButton = () => {
	const phoneNumber = '+48517452020';

	return (
		<a href={`tel:${phoneNumber}`}>
			<Button>call me</Button>
		</a>
	);
};

export default CallMeButton;
