'use client';
import { useCallback } from 'react';
import Button from './Button';

const ButtonTop = ({ targetId, children }) => {
	const handleButtonClick = useCallback(() => {
		const anchor = document.querySelector(`[data-scroll-to='${targetId}']`);
		if (anchor) {
			anchor.scrollIntoView({ block: 'start', behavior: 'smooth' });
		}
	}, [targetId]);

	return <Button onClick={handleButtonClick}>{children}</Button>;
};

export default ButtonTop;
