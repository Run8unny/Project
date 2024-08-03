import Link from 'next/link';
import SecondCursor from '../_components/SecondCursor';

export default function Page() {
	return (
		<div className='w-full relative overflow-hidden flex flex-col items-start justify-start pt-[1.25rem] px-[0rem] pb-[0rem] box-border leading-[normal] tracking-[normal] text-left text-[1rem] text-black font-be-vietnam-pro gap-[3.938rem]'>
			<div className='self-stretch flex flex-row items-center justify-center py-[1rem] pl-[1.25rem] pr-[1.375rem]'>
				<p>[ WELCOME ]</p>
			</div>
			<main className='w-[100%] flex flex-col items-center justify-between py-[0rem] pl-[2.2rem] pr-[2.2rem] box-border max-w-full gap-[1.25rem] text-left text-[1rem] text-black font-be-vietnam-pro'>
				<section className='flex flex-row items-start justify-evenly max-w-full text-[1rem] text-black font-be-vietnam-pro w-full'>
					<div className='pt-[15rem] px-[0rem] md:block'>
						<p>[ ŻANETA]</p>
					</div>
					<div className='h-[31.25rem] w-[31.25rem] text-[1.25rem] flex justify-center items-center'>
						<GreenCircle>
							<Link href='/'>{`HOLD TO ENTER`}</Link>
						</GreenCircle>
					</div>
					<div className='pt-[15rem] px-[0rem] md:block'>
						<p>[ WARDASZKA ]</p>
					</div>
				</section>
			</main>
			<div className='self-stretch flex flex-row items-center justify-center pl-[1.25rem] pr-[1.375rem]'>
				<p>[ TO MY SPACE ]</p>
			</div>
			<div className='w-[48.969rem] flex flex-row items-start justify-between max-w-full gap-[0.75rem] text-right text-[10rem] text-[transparent] mq750:flex-wrap'>
				<div className='h-[11.375rem] w-[29.25rem] overflow-hidden shrink-0 flex flex-row items-start justify-start pt-[0rem] pb-[0.312rem] box-border max-w-full gap-[1.563rem]'>
					<div className='mt-[-0.563rem] flex-1 relative font-extrabold inline-block [-webkit-text-stroke:4px_#000] opacity-[0.85] max-w-full mq450:text-[1.875rem] mq1025:text-[3.625rem]'>
						100%
					</div>
				</div>
			</div>
			<SecondCursor />
		</div>
	);
}

