import React from 'react';

export default function Button({ onClick, children }) {
	return (
		<button
			onClick={onClick}
			className='w-full px-4 rounded-[25px] border-[1px] text-xs border-white border-solid box-border h-[2.3rem] hover:text-black hover:bg-white'
		>
			{children}
		</button>
	);
}
