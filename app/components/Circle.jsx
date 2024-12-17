'use client';
import PropTypes from 'prop-types';

export default function Circle({ children }) {
	return (
		<div
			className={`
                rounded-full aspect-square box-border 
                overflow-hidden leading-normal tracking-normal 
                relative flex items-center justify-center 
                w-[50vw] h-[50vw] min-w-[100px] min-h-[70px] 
                max-w-[280px] max-h-[180px]
                bg-[radial-gradient(circle,_#050505_40%,_#ffffff_70%)]
            `}
		>
			{children}
		</div>
	);
}

Circle.propTypes = {
	className: PropTypes.string,
	children: PropTypes.node,
};
