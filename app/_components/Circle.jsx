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
			className={`rounded-full animate-border aspect-square [background:radial-gradient(50%_50%_at_50%_50%,_rgba(217,_218,_217,_0)_36%,_#f5f6f5_96.5%)] box-border max-w-full max-h-full overflow-hidden leading-[normal] tracking-[normal] relative ${className}`}
			style={{
				width: '60vw',
				height: '60vw',
				minWidth: '300px',
				minHeight: '300px',
				maxWidth: '500px',
				maxHeight: '500px',
			}}
		>
			<div
				className={`absolute inset-0 flex items-center justify-center z-[1] font-be-vietnam-pro ${
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
