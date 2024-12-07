'use client';
import PropTypes from 'prop-types';
import { useState } from 'react';

const Circle = ({ children }) => {
	return (
		<div
			className={`rounded-full aspect-square box-border max-w-full max-h-full overflow-hidden leading-[normal] tracking-[normal] relative`}
			style={{
				width: '35vw',
				height: '35vw',
				minWidth: '240px',
				minHeight: '240px',
				maxWidth: '280px',
				maxHeight: '280px',
				background:
					'radial-gradient(50% 50% at 50% 50%, rgba(217, 218, 217, 0) 38%, #189889 86.5%)',
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
