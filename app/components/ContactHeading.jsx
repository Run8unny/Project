import PropTypes from 'prop-types';

const ContactHeading = () => {
	return (
		<div
			className={`h-full overflow-hidden flex flex-row items-center justify-center box-border leading-[normal] tracking-[normal] text-center text-[6rem] mq675:pl-[50px] pt-6`}
		>
			<h1 className='w-auto custom-font minh-[100px] relative text-inherit uppercase flex justify-center items-center max-w-full mq675:min-w-full mq450:text-[46px] mq900:text-[74px]'>
				Let’s CHAT
			</h1>
			<div className='w-1/3 flex flex-col items-center justify-center box-border min-w-[275px] text-justify text-[24px] mq450:pt-[155px] mq450:box-border mq900:flex-1 ml-12'>
				<div className=' w-[400px] self-stretch relative mq450:text-[19px]'>
					I’m always excited to discuss new project and opportunities. Feel free
					to reach out and let’s have a nice chat!
				</div>
			</div>
		</div>
	);
};

ContactHeading.propTypes = {
	className: PropTypes.string,
};

export default ContactHeading;
