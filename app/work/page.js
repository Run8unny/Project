import SecondCursor from '../_components/SecondCursor';
import Button from '../_components/Button';
import Link from 'next/link';

export default function Page() {
	return (
		<div className='relative bg-white w-full overflow-hidden flex flex-col items-start justify-start pt-[6.25rem] px-[0rem] pb-[0rem] box-border gap-[11.75rem] leading-[normal] tracking-[normal] text-left text-[8.625rem] text-[transparent] font-be-vietnam-pro gap-[2.938rem] gap-[5.875rem]'>
			<div className='w-[108.313rem] h-[77.875rem] absolute !m-[0] right-[-16.5rem] bottom-[-22.812rem] z-[1] flex items-center justify-center'>
				<img
					className='w-full h-full z-[1] object-contain absolute left-[0rem] top-[-4rem] [transform:scale(1.102)]'
					alt=''
					src='/ellipsegreen.svg'
				/>
			</div>

			<Button>
				<Link href='/'>back</Link>
			</Button>
			<SecondCursor />
		</div>
	);
}
