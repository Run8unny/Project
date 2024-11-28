import PropTypes from 'prop-types';

const ContactHeading = () => {
	return (
		<div
			className={`overflow-hidden flex flex-row items-center justify-center box-border leading-[normal] tracking-[normal] text-center text-[6rem] mq675:pl-[50px] pt-14 outline`}
		>
			<h1 className='w-auto uppercase flex justify-center items-center max-w-full text-[2.5rem] custom-font text-orange-500'>
				Let’s CHAT * MAIL ME * leave a msg * CALL ME * LET’S TALK * Let’s CHAT
			</h1>
		</div>
	);
};

ContactHeading.propTypes = {
	className: PropTypes.string,
};

export default ContactHeading;
