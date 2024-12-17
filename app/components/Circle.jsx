'use client';
import PropTypes from 'prop-types';

export default function Circle({ children }) {
	return (
		<div
			className={`
                rounded-full aspect-square box-border 
                overflow-hidden leading-normal tracking-normal 
                relative flex items-center justify-center 
                w-[50vw] h-[50vw] min-w-[360px] min-h-[180px] 
                max-w-[240px] max-h-[240px]
                bg-[radial-gradient(circle,_#050505_35%,_#ffffff_70%)]
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
