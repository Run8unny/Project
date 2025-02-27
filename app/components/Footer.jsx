import FooterDiv from './FooterDiv';
import SpanTextBig from './SpanTextBig';
import SpanTextSmall from './SpanTextSmall';
import FooterItem from './FooterItem';
import ButtonTop from './ButtonTop';

export default function Footer() {
	return (
		<div className='w-full flex flex-col justify-center items-center pt-4 pb-6 bg-transparent border-t border-t-gray-400 px-16'>
			<ul className='flex flex-row justify-between w-full items-center mq1225:w-auto mq1225:gap-6 xs400:w-fit xs400:gap-2'>
				<li className='mq850:hidden'>
					<FooterDiv>
						<SpanTextSmall>[ Copyrights ]</SpanTextSmall>
						<SpanTextBig>©foliowebsite 2024</SpanTextBig>
					</FooterDiv>
				</li>
				{/* <li>
					<ButtonTop targetId={'top-of-page'}>⇡top</ButtonTop>
				</li> */}
				<li>
					<FooterItem href='https://react.dev/'>React</FooterItem>
				</li>
				<li>
					<FooterItem href='https://webglfundamentals.org/'>WebGL</FooterItem>
				</li>
				<li>
					<FooterItem href='https://r3f.docs.pmnd.rs/getting-started/introduction'>
						R3F
					</FooterItem>
				</li>
				<li className='mq850:hidden'>
					<FooterDiv>
						<SpanTextSmall>[ Design&Code by ]</SpanTextSmall>
						<SpanTextBig>Zan Wardaszka</SpanTextBig>
					</FooterDiv>
				</li>
			</ul>
		</div>
	);
}
