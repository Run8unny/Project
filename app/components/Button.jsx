import React from 'react';

export default function Button({ onClick, children }) {
	return (
		<button
			type='button'
			aria-label='Custom Button'
			onClick={onClick}
			className='w-auto px-4 py-2 rounded-[25px] text-xs bg-transparent border border-white text-white border-solid box-border hover:text-black hover:bg-white hover:scale-105'
		>
			{children}
		</button>
	);
}
