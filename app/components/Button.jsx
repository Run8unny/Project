'use client';
import React from 'react';
import PropTypes from 'prop-types';
import { useTheme } from './ThemeProvider';
import classNames from 'classnames';

const Button = ({ onClick, children }) => {
	const { theme } = useTheme();

	const buttonClass = theme === 'light' ? 'border-black' : 'border-white';
	const buttonText = theme === 'light' ? 'text-black' : 'text-white';
	const buttonHover =
		theme === 'light' ? 'hover:bg-slate-100' : 'hover:bg-white';
	const buttonHoverText =
		theme === 'light' ? 'hover:text-black' : 'hover:text-black';
	const buttonHoverBorder = theme === 'light' ? 'hover:border-0' : '';

	return (
		<button
			onClick={onClick}
			className={classNames(
				'w-full px-4 rounded-[25px] border-[1px] border-solid box-border h-[2.35rem]',
				buttonClass,
				buttonText,
				buttonHover,
				buttonHoverText,
				buttonHoverBorder
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
