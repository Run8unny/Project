const Cover = () => {
	return (
		<div className='w-full relative h-[18.75rem] text-left text-[1rem] text-black font-be-vietnam-pro'>
			<img
				className='absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] max-w-full overflow-hidden max-h-full'
				alt=''
				src='Rectangle 4.svg'
			/>
			<div className='absolute top-[0rem] left-[calc(50%_-_150px)] uppercase font-medium inline-block w-[18.125rem] h-[3.25rem]'>{`[COVER STH YOU DON’T LIKE] `}</div>
		</div>
	);
};
export default Cover;
