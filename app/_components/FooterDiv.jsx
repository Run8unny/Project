export default function FooterDiv({ children }) {
	return (
		<div className='w-[186px] overflow-hidden shrink-0 flex flex-col items-start justify-start gap-[3px]'>
			<div className='flex flex-row items-start justify-start py-0 pl-[11px] pr-3'>
				<a className='[text-decoration:none] relative text-[inherit] mq450:text-xl'>
					[ Copyrights ]{children}
				</a>
			</div>
			<a className='[text-decoration:none] self-stretch relative text-12xl leading-[40px] text-[inherit] mq450:text-lgi mq450:leading-[24px] mq750:text-6xl mq750:leading-[32px]'>
				©Folio 2024
				{children}
			</a>
		</div>
	);
}
