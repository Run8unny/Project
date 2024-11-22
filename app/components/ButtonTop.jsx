// components/ScrollButton.js

import { useCallback } from 'react';

const ButtonTop = ({ targetId, children }) => {
	const handleButtonClick = useCallback(() => {
		const anchor = document.querySelector(`[data-scroll-to='${targetId}']`);
		if (anchor) {
			anchor.scrollIntoView({ block: 'start', behavior: 'smooth' });
		}
	}, [targetId]);

	return <button onClick={handleButtonClick}>{children}</button>;
};

export default ButtonTop;
