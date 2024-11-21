'use client';
import PropTypes from 'prop-types';
import { useState } from 'react';
import '@/app/_styles/style.css';

const Circle = ({ className = '', children }) => {
	const [isAnimating, setIsAnimating] = useState(false);

	const handleAnimation = () => {
		setIsAnimating(true);
		setTimeout(() => {
			setIsAnimating(false);
		}, 3000);
	};

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
				background:
					'radial-gradient(50% 50% at 50% 50%, rgba(217, 218, 217, 0) 38%, #0028CC 86.5%)',
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
