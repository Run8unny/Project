'use client';
import PropTypes from 'prop-types';
import { motion } from 'framer-motion';

export default function ContactHeading() {
	return (
		<div
			className={`overflow-hidden flex flex-row items-center justify-center box-border leading-[normal] tracking-[normal] text-center pt-0 px-24 border-b-2 border-white h-36 mt-2`}
		>
			<motion.div
				initial={{ x: '-60%' }}
				animate={{ x: '100%' }}
				transition={{
					repeat: Infinity,
					repeatType: 'loop',
					duration: 70,
					ease: 'linear',
				}}
				style={{
					position: 'absolute',
					whiteSpace: 'nowrap',
				}}
			>
				<h1 className='w-auto uppercase font-bold flex justify-center items-center max-w-full text-xl xs400:text-[5.5rem]'>
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
