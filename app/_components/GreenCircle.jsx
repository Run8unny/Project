import PropTypes from 'prop-types';

const GreenCircle = ({ className = '', children }) => {
	return (
		<div
			className={`w-[34.375rem] rounded-481xl [background:radial-gradient(50%_50%_at_50%_50%,_rgba(217,_218,_217,_0)_36%,_#12bd42_96.5%)] border-darkgray-300 border-[2px] border-solid box-border overflow-hidden shrink-0 flex flex-row items-start justify-center py-[15.812rem] px-[1.25rem] max-w-full text-left text-[1.938rem] text-black font-be-vietnam-pro mq750:pt-[10.25rem] mq750:pb-[10.25rem] mq750:box-border gap-[3.125rem] ${className}`}
		>
			<div className='flex flex-row items-start justify-start'>
				<div className='relative mq750:text-[1.563rem] mq450:text-[1.188rem]'>
					HOLD TO START
					{children}
				</div>
			</div>
		</div>
	);
};

GreenCircle.propTypes = {
	className: PropTypes.string,
};

export default GreenCircle;
