'use client';
import PropTypes from 'prop-types';
import { useState } from 'react';

const Circle = ({ className = '', children }) => {
	return (
		<div
			className={`rounded-full aspect-square box-border max-w-full max-h-full overflow-hidden leading-[normal] tracking-[normal] relative ${className}`}
			style={{
				width: '35vw',
				height: '35vw',
				minWidth: '170px',
				minHeight: '170px',
				maxWidth: '270px',
				maxHeight: '270px',
				background:
					'radial-gradient(50% 50% at 50% 50%, rgba(217, 218, 217, 0) 38%, #2cb1c6 86.5%)',
			}}
		>
			<div
				className={`absolute inset-0 flex items-center justify-center z-30 `}
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
