import FooterDiv from './FooterDiv';
import SpanTextBig from './SpanTextBig';
import SpanTextSmall from './SpanTextSmall';
import FooterItem from './FooterItem';
import ButtonTop from './ButtonTop';

export default function Footer() {
	return (
		<div className='px-1 py-5 m-3 bg-transparent felx justify-center items-center border-white border-t xs400:w-fit xs400:p-0 xs400:m-3'>
			<ul className='flex flex-row justify-evenly items-center gap-1 xs400:w-fit xs400:p-0 xs400:m-3 xs400:gap-2'>
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
