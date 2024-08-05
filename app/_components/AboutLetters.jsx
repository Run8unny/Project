const AboutLetters = () => {
	return (
		<div className='w-full relative bg-silver flex flex-col h-[22rem] overflow-hidden text-left text-[4.75rem] text-black font-be-vietnam-pro my-10'>
			<div className='bg-white w-[80rem] h-[5.5rem] overflow-hidden px-5'>
				<p className='font-extrabold inline-block maxw-[16.125rem]'>I WORK</p>
			</div>
			<div className='bg-silver h-[5.5rem] overflow-hidden flex flex-row justify-between px-5'>
				<p className='font-extrabold inline-block maxw-[4.125rem]'>TO</p>
				<p className='font-extrabold inline-block maxw-[19.125rem]'>CREATE</p>
			</div>
			<div className='bg-white h-[5.5rem] overflow-hidden text-center px-5'>
				<p className='w-full inline-block font-extrabold maxw-[19.125rem]'>
					GREAT THINGS
				</p>
			</div>

			<div className='bg-limegreen h-[6rem] overflow-hidden flex flex-row justify-between px-5'>
				<p className='font-extrabold inline-block w-[4.125rem] h-[5.5rem]'>
					WITH
				</p>
				<p className='font-extrabold inline-block maxw-[14.125rem] h-[5.5rem]'>
					COOL PEOPLE
				</p>
			</div>
		</div>
	);
};
export default AboutLetters;
