const CTA = () => {
	return (
		<div className='w-full h-[64rem] flex flex-col justify-center items-center text-center text-[4.75rem] font-be-vietnam-pro mt-[20px] relative'>
			{/* <div
				className='absolute inset-0 w-full h-full'
				style={{
					backgroundImage: 'url(/assets/home/Rectangle5.png)',
					backgroundSize: 'cover',
					backgroundPosition: 'center',
					backgroundRepeat: 'no-repeat',
					backgroundAttachment: 'fixed',
					marginTop: 0,
					paddingTop: 0,
					zIndex: 1,
					// transform: 'translateX(-90px)',
				}}
			></div> */}
			<div className='relative z-10'>
				<h1 className='font-bold mt-3'>
					LET’S WORK TOGETHER. I’M NOT ONLY AN EMPLOYEE. I REALLY AM IN YOUR
					TEAM
				</h1>
				<div className='text-[1.938rem] text-left w-[31.25rem] h-[11.25rem] mt-4 ml-auto pr-[30px]'>
					<p className='font-light'>
						I’m your partner in the project, and a helping hand when you need
						one. Always giving my best to create together something unique.
					</p>
				</div>
			</div>
		</div>
	);
};

export default CTA;
