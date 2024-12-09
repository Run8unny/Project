'use client';
import PropTypes from 'prop-types';
import { motion } from 'framer-motion';

export default function ContactHeading() {
	return (
		<motion.div
			initial={{ x: '-100%' }}
			animate={{ x: '100%' }}
			transition={{
				repeat: Infinity,
				repeatType: 'loop',
				duration: 40,
				ease: 'linear',
			}}
			style={{
				position: 'absolute',
				whiteSpace: 'nowrap',
			}}
		>
			<div
				className={`overflow-hidden flex flex-row items-center justify-center box-border leading-[normal] tracking-[normal] text-center pt-0 outline px-24 `}
			>
				<h1 className='w-auto uppercase flex justify-center items-center max-w-full text-[5rem] custom-font text-orange-500 neon xs400:text-[2.5rem]'>
					* Let’s CHAT * MAIL ME * leave a msg * CALL ME * LET’S TALK * Let’s
					CHAT *
				</h1>
			</div>
		</motion.div>
	);
}

ContactHeading.propTypes = {
	className: PropTypes.string,
};
