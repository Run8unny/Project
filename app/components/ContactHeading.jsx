import PropTypes from 'prop-types';

const ContactHeading = () => {
	return (
		<div
			className={`h-full overflow-hidden flex flex-row items-center justify-end box-border leading-[normal] tracking-[normal] text-left text-[8rem] text-darkblue font-be-vietnam-pro mq675:pl-[50px]`}
		>
			<h1 className='w-1/2 minh-[400px] flex-1 relative text-inherit uppercase font-extrabold font-[inherit] flex items-center max-w-full mq675:min-w-full mq450:text-[46px] mq900:text-[74px]'>
				<span>
					Let’s
					<span className='tracking-[0.05em]'> CHAT</span>
				</span>
			</h1>
			<div className='w-1/2 flex flex-col items-center justify-center px-6 pt-[8rem] pb-0 box-border min-w-[275px] text-justify text-[24px] mq450:pt-[155px] mq450:box-border mq900:flex-1'>
				<div className=' w-[275px] self-stretch font-extralight relative mq450:text-[19px]'>
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
