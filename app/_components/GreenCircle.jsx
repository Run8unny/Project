import PropTypes from 'prop-types';

const GreenCircle = ({ className = '', children }) => {
	return (
		<div
			className={`rounded-full [background:radial-gradient(50%_50%_at_50%_50%,_rgba(217,_218,_217,_0)_36%,_#12bd42_96.5%)] border-darkgray border-[2px] border-solid box-border max-w-full max-h-full overflow-hidden leading-[normal] tracking-[normal] relative ${className}`}
			style={{
				width: '60vw',
				height: '60vw',
				minWidth: '200px',
				minHeight: '200px',
				maxWidth: '400px',
				maxHeight: '400px',
			}}
		>
			<div className='absolute inset-0 flex items-center justify-center z-[1] font-be-vietnam-pro'>
				{children}
			</div>
		</div>
	);
};

GreenCircle.propTypes = {
	className: PropTypes.string,
	children: PropTypes.node,
};

export default GreenCircle;
