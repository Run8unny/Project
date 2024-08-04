'use client';
import PropTypes from 'prop-types';
import { useState } from 'react';
import { useTheme } from './ThemeProvider'; // Make sure the import path is correct
import '@/app/_styles/style.css';

const Circle = ({ className = '', children }) => {
	const [isAnimating, setIsAnimating] = useState(false);
	const { theme } = useTheme();

	const handleAnimation = () => {
		setIsAnimating(true);
		setTimeout(() => {
			setIsAnimating(false);
		}, 3000);
	};

	const backgroundColor =
		theme === 'light'
			? 'radial-gradient(50% 50% at 50% 50%, rgba(217, 218, 217, 0) 38%, #1134bd 86.5%)'
			: 'radial-gradient(50% 50% at 50% 50%, rgba(217, 218, 217, 0) 38%, #eded47 86.5%)';

	return (
		<div
			className={`rounded-full aspect-square box-border max-w-full max-h-full overflow-hidden leading-[normal] tracking-[normal] relative ${className}`}
			style={{
				width: '60vw',
				height: '60vw',
				minWidth: '300px',
				minHeight: '300px',
				maxWidth: '500px',
				maxHeight: '500px',
				background: backgroundColor,
			}}
		>
			<div
				className={`absolute inset-0 flex items-center justify-center z-30 font-be-vietnam-pro ${
					isAnimating ? 'animate-border' : ''
				}`}
				onMouseEnter={handleAnimation}
			>
				{children}
			</div>
		</div>
	);
};

Circle.propTypes = {
	className: PropTypes.string,
	children: PropTypes.node,
};

export default Circle;
