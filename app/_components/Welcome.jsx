import GreenCircle from '../components/green-circle';

const Welcome = () => {
	return (
		<div className='w-full relative bg-white overflow-hidden flex flex-col items-start justify-start pt-[2.812rem] pb-[0.062rem] pl-[1.75rem] pr-[1.375rem] box-border gap-[9.562rem] leading-[normal] tracking-[normal] text-left text-[1.563rem] text-black font-be-vietnam-pro gap-[4.75rem] gap-[2.375rem]'>
			<div className='self-stretch flex flex-row items-start justify-center py-[0rem] pl-[0rem] pr-[0.375rem]'>
				<a className='[text-decoration:none] relative text-[inherit] mq450:text-[1.25rem]'>
					[ WELCOME ]
				</a>
			</div>
			<main className='self-stretch flex flex-row items-start justify-between max-w-full gap-[1.25rem] text-left text-[1.563rem] text-black font-be-vietnam-pro mq1225:flex-wrap mq1225:justify-center'>
				<section className='w-[60.438rem] flex flex-col items-start justify-start gap-[0.937rem] max-w-full text-left text-[1.563rem] text-black font-be-vietnam-pro'>
					<div className='self-stretch flex flex-row items-start justify-start py-[0rem] pl-[1.687rem] pr-[0rem] box-border max-w-full'>
						<div className='flex-1 flex flex-row items-start justify-between max-w-full gap-[1.25rem] mq1050:flex-wrap'>
							<div className='w-[9.438rem] flex flex-col items-start justify-start pt-[17.187rem] px-[0rem] pb-[0rem] box-border'>
								<div className='self-stretch relative mq450:text-[1.25rem]'>
									[ ZANETA ]
								</div>
							</div>
							<GreenCircle />
						</div>
					</div>
					<div className='w-[49.563rem] flex flex-row items-start justify-between max-w-full gap-[1.25rem] text-right text-[11.563rem] text-[transparent] mq1050:flex-wrap'>
						<div className='w-[31.688rem] relative font-extrabold inline-block [-webkit-text-stroke:4px_#000] opacity-[0.85] min-w-[31.688rem] max-w-full mq750:text-[4.625rem] mq750:min-w-full mq450:text-[2.875rem] mq1050:flex-1'>
							100%
						</div>
						<div className='flex flex-col items-start justify-start pt-[9.937rem] px-[0rem] pb-[0rem] box-border min-w-[12.625rem] text-left text-[1.563rem] text-black mq1050:flex-1'>
							<div className='relative mq450:text-[1.25rem]'>
								[ TO MY SPACE ]
							</div>
						</div>
					</div>
				</section>
				<div className='flex flex-col items-start justify-start pt-[16.75rem] px-[0rem] pb-[0rem]'>
					<div className='relative mq450:text-[1.25rem]'>[ WARDASZKA ]</div>
				</div>
			</main>
		</div>
	);
};

export default Welcome;
