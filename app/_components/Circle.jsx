import PropTypes from 'prop-types';

const Circle = ({ className = '', children }) => {
	return (
		<div
			className={`rounded-full aspect-square [background:radial-gradient(50%_50%_at_50%_50%,_rgba(217,_218,_217,_0)_36%,_#f5f6f5_96.5%)] border-darkgray border-[2px] border-solid box-border max-w-full max-h-full overflow-hidden leading-[normal] tracking-[normal] relative ${className}`}
			style={{
				width: '60vw',
				height: '60vw',
				minWidth: '300px',
				minHeight: '300px',
				maxWidth: '500px',
				maxHeight: '500px',
			}}
		>
			<div className='absolute inset-0 flex items-center justify-center z-[1] font-be-vietnam-pro'>
				{children}
			</div>
		</div>
	);
};

Circle.propTypes = {
	className: PropTypes.string,
	children: PropTypes.node,
};

export default Circle;
