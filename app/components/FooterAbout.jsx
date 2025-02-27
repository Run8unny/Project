import FooterDiv from './FooterDiv';
import SpanTextBig from './SpanTextBig';
import SpanTextSmall from './SpanTextSmall';
import FooterItem from './FooterItem';

export default function Footer() {
	return (
		<div className='w-full flex flex-col justify-center items-center pt-6 pb-6 mb-1 bg-transparent border-t border-t-gray-400 px-10'>
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
					<FooterItem href='https://github.com/Run8unny'>github</FooterItem>
				</li>
				<li className='mq850:hidden'>
					<FooterDiv>
						<SpanTextSmall>[ Location ]</SpanTextSmall>
						<SpanTextBig>Warsaw PL</SpanTextBig>
					</FooterDiv>
				</li>
				<li>
					<FooterItem href='https://www.linkedin.com/'>linkedIn</FooterItem>
				</li>
				<li>
					<FooterItem href='https://pl.pinterest.com/zanwardaszka/'>
						pinterest
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
