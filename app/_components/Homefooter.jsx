import PropTypes from 'prop-types';
import Image from 'next/image';
import Button from './Button';

const Homefooter = ({ className = '' }) => {
	return (
		<div
			className={`max-w-full overflow-hidden flex flex-row items-start justify-evenly pt-[35px] px-[35px] pb-9 box-border leading-[normal] tracking-[normal] text-left text-[31px] text-black font-be-vietnam ${className}`}
		>
			<Image
				className='w-[537px] h-90px] object-contain'
				loading='lazy'
				alt=''
				src='public/assets/home/home/Frame79.png'
			/>

			<div>
				<Button>dark</Button>
			</div>

			<Image
				className='absolute h-[calc(100%_-_18px)] top-[9px] bottom-[9px] left-[calc(50%_-_69.5px)] rounded-[25px] max-h-full w-[139px] z-[1]'
				loading='lazy'
				alt=''
				src='public/assets/home/home/Frame78.png'
			/>
		</div>
	);
};

Homefooter.propTypes = {
	className: PropTypes.string,
};

export default Homefooter;
