'use client';
import PropTypes from 'prop-types';

export default function Circle({ children }) {
	return (
		<div
			className={`
                rounded-full aspect-square box-border 
                overflow-hidden leading-normal tracking-normal 
                relative flex items-center justify-center 
                w-[50vw] h-[50vw] min-w-[60px] min-h-[60px] 
                max-w-[180px] max-h-[180px]
                bg-[radial-gradient(circle,_#050505_40%,_#ffffff_70%)] hover:animate-spin
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
