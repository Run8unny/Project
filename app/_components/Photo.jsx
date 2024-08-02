import PropTypes from 'prop-types';

const Photo = ({ className = '' }) => {
	return (
		<img
			className={`w-[601px] max-w-full overflow-hidden h-[738px] leading-[normal] tracking-[normal] ${className}`}
			loading='lazy'
			alt=''
			src='/photo.svg'
		/>
	);
};

Photo.propTypes = {
	className: PropTypes.string,
};

export default Photo;
