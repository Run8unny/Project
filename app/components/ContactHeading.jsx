'use client';
import PropTypes from 'prop-types';
import { motion } from 'framer-motion';

const ContactHeading = () => {
	return (
		<motion.div
			initial={{ x: '-100%' }} // Start off-screen on the left
			animate={{ x: '100%' }} // Move to off-screen on the right
			transition={{
				repeat: Infinity, // Infinite looping
				repeatType: 'loop', // Loop back to the start
				duration: 40, // Time to complete the animation
				ease: 'linear', // Smooth constant motion
			}}
			style={{
				position: 'absolute',
				whiteSpace: 'nowrap',
			}}
		>
			<div
				className={`overflow-hidden flex flex-row items-center justify-center box-border leading-[normal] tracking-[normal] text-center text-[6rem] pt-14 `}
			>
				<h1 className='w-auto uppercase flex justify-center items-center max-w-full text-[2.5rem] custom-font text-orange-500 neon'>
					* Let’s CHAT * MAIL ME * leave a msg * CALL ME * LET’S TALK * Let’s
					CHAT *
				</h1>
			</div>
		</motion.div>
	);
};

ContactHeading.propTypes = {
	className: PropTypes.string,
};

export default ContactHeading;
