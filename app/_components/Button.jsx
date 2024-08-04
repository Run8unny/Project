import React from 'react';
import PropTypes from 'prop-types';

const Button = ({ onClick, children }) => {
	return (
		<button
			onClick={onClick}
			className='className="w-full px-3 rounded-[25px] bg-gray border-white border-[2px] border-solid box-border h-[2.5rem]'
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
