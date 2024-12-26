import React from 'react';

export default function Button({ onClick, children }) {
	return (
		<button
			type='button'
			aria-label='Custom Button'
			onClick={onClick}
			className='w-auto px-4 rounded-[25px] border-[1px] text-xs border-white border-solid box-border h-[2.3rem] hover:text-black hover:bg-white hover:scale-115'
		>
			{children}
		</button>
	);
}
