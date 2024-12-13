'use client';
import PropTypes from 'prop-types';
import { motion } from 'framer-motion';

export default function ContactHeading() {
	return (
		<div
			className={`overflow-hidden flex flex-row items-center justify-center box-border leading-[normal] tracking-[normal] text-center pt-0 px-24 border-t-2 border-b-2 border-white h-24 mt-2`}
		>
			<motion.div
				initial={{ x: '-100%' }}
				animate={{ x: '100%' }}
				transition={{
					repeat: Infinity,
					repeatType: 'loop',
					duration: 80,
					ease: 'linear',
				}}
				style={{
					position: 'absolute',
					whiteSpace: 'nowrap',
				}}
			>
				<h1 className='w-auto uppercase flex justify-center items-center max-w-full text-[5rem] custom-font text-white xs400:text-[2.5rem]'>
					* Let’s CHAT * MAIL ME * leave a msg * CALL ME * LET’S TALK * Let’s
					CHAT *
				</h1>
			</motion.div>
		</div>
	);
}

ContactHeading.propTypes = {
	className: PropTypes.string,
};
