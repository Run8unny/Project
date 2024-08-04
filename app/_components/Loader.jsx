'use client';
import { useTheme } from './ThemeProvider';
const Loader = () => {
	const { theme } = useTheme();
	const color = theme === 'light' ? '#000' : '#fff';

	return (
		<div className='w-full flex justify-end md:justify-start'>
			<div className='absolute bottom-0 left-0 md:static md:bottom-auto md:left-auto md:right-0 p-2'>
				<div
					className={`font-extrabold inline-block [-webkit-text-stroke:4px_${color}] opacity-[0.85] text-[10vw] md:text-7vw]`}
					style={{ color: color }}
				>
					100%
				</div>
			</div>
		</div>
	);
};

export default Loader;
