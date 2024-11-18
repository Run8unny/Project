'use client';
import React from 'react';
import PropTypes from 'prop-types';
import { useTheme } from './ThemeProvider';
import classNames from 'classnames';

const Button = ({ onClick, children }) => {
	const { theme } = useTheme();

	const buttonClass = theme === 'light' ? 'border-plum' : 'border-white';
	const buttonHover = theme === 'light' ? 'hover:bg-plum' : 'hover:bg-white';
	const buttonHoverText =
		theme === 'light' ? 'hover:text-white' : 'hover:text-black';

	return (
		<button
			onClick={onClick}
			className={classNames(
				'w-full px-3 rounded-[25px] bg-gray border-[2px] border-solid box-border h-[2.5rem]',
				buttonClass,
				buttonHover,
				buttonHoverText
			)}
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
