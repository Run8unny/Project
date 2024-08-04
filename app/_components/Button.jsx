'use client';
import React from 'react';
import PropTypes from 'prop-types';
import { useTheme } from './ThemeProvider';

const Button = ({ onClick, children }) => {
	const { theme } = useTheme();

	const buttonClass = theme === 'light' ? 'border-black' : 'border-white';

	return (
		<button
			onClick={onClick}
			className={`w-full px-3 rounded-[25px] bg-gray border ${buttonClass} border-[2px] border-solid box-border h-[2.5rem] hover:bg-white hover:text-black rounded-full`}
		>
			{children}
		</button>
	);
};

Button.propTypes = {
	onClick: PropTypes.func,
	children: PropTypes.node.isRequired,
};

export default Button;
