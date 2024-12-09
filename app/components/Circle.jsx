'use client';
import PropTypes from 'prop-types';

export default function Circle({ children }) {
	return (
		<div
			className={`rounded-full aspect-square box-border max-w-full max-h-full overflow-hidden leading-[normal] tracking-[normal] relative`}
			style={{
				width: '40vw',
				height: '40vw',
				minWidth: '240px',
				minHeight: '240px',
				maxWidth: '270px',
				maxHeight: '270px',
				background: 'radial-gradient(circle, #050505 35%, #ffffff 70%',
			}}
		>
			<div className={`absolute inset-0 flex items-center justify-center`}>
				{children}
			</div>
		</div>
	);
}

Circle.propTypes = {
	className: PropTypes.string,
	children: PropTypes.node,
};
