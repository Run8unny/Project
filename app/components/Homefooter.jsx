import PropTypes from 'prop-types';

const Homefooter = ({ className = '', children }) => {
	return (
		<ul className='flex gap-7 justify-center items-center text-lg mb-15'>
			<li>{children}</li>
		</ul>
	);
};

Homefooter.propTypes = {
	className: PropTypes.string,
};

export default Homefooter;
