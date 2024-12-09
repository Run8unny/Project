import FooterDiv from './FooterDiv';
import SpanTextBig from './SpanTextBig';
import SpanTextSmall from './SpanTextSmall';
import FooterItem from './FooterItem';
import ButtonTop from './ButtonTop';

export default function Footer() {
	return (
		<div className='flex flex-col justify-center items-center px-4 py-5 mb-1 bg-transparent border-white border-t xs400:w-fit xs400:p-0 xs400:m-3'>
			<ul className='flex flex-row justify-evenly w-full items-center mq1225:w-auto mq1225:gap-6 xs400:w-fit xs400:p-0 xs400:m-3 xs400:gap-2'>
				<li className='mq850:hidden'>
					<FooterDiv>
						<SpanTextSmall>[ Copyrights ]</SpanTextSmall>
						<SpanTextBig>©folio 2024</SpanTextBig>
					</FooterDiv>
				</li>
				<li>
					<ButtonTop targetId={'top-of-page'}>↖︎top</ButtonTop>
				</li>
				<li>
					<FooterItem href='https://github.com/Run8unny'>github</FooterItem>
				</li>
				<li className='mq850:hidden'>
					<FooterDiv>
						<SpanTextSmall>[ Location ]</SpanTextSmall>
						<SpanTextBig>warsaw PL</SpanTextBig>
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
						<SpanTextSmall>[ Design&code by ]</SpanTextSmall>
						<SpanTextBig>zan wardaszka</SpanTextBig>
					</FooterDiv>
				</li>
			</ul>
		</div>
	);
}
