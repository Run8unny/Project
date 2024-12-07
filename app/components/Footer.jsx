import Button from './Button';
import FooterDiv from './FooterDiv';
import SpanTextBig from './SpanTextBig';
import SpanTextSmall from './SpanTextSmall';
import FooterItem from './FooterItem';
import ButtonTop from './ButtonTop';

export default function Footer() {
	return (
		<div className='px-1 py-5 m-3 bg-transparent border-white border-t'>
			<ul className='flex flex-row justify-evenly items-center gap-1'>
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

// export default function Footer() {
// 	return (
// 		<div className='px-4 py-3 mb-5 bg-transparent'>
// 			<ul className='flex flex-col md:flex-row justify-evenly items-center gap-4 md:gap-10'>
// 				<li className='flex-1 md:flex-initial'>
// 					<FooterDiv>
// 						<SpanTextSmall>[ Copyrights ]</SpanTextSmall>
// 						<SpanTextBig>©folio 2024</SpanTextBig>
// 					</FooterDiv>
// 				</li>
// 				<li className='flex-1 md:flex-initial hover:bg-white hover:text-black rounded-full'>
// 					<Button>↖︎top</Button>
// 				</li>
// 				<li className='flex-1 md:flex-initial'>
// 					<Link
// 						className='hover:bg-white hover:text-black rounded-full'
// 						href='https://github.com/Run8unny'
// 					>
// 						<Button>github</Button>
// 					</Link>
// 				</li>
// 				<li className='flex-1 md:flex-initial'>
// 					<FooterDiv>
// 						<SpanTextSmall>[ Location ]</SpanTextSmall>
// 						<SpanTextBig>warsaw 13:45</SpanTextBig>
// 					</FooterDiv>
// 				</li>
// 				<li className='flex-1 md:flex-initial'>
// 					<Link
// 						className='hover:bg-white hover:text-black rounded-full'
// 						href=''
// 					>
// 						<Button>linkedIn</Button>
// 					</Link>
// 				</li>
// 				<li className='flex-1 md:flex-initial'>
// 					<Link
// 						className='hover:bg-white hover:text-black rounded-full'
// 						href='https://pl.pinterest.com/zanwardaszka/'
// 					>
// 						<Button>pinterest</Button>
// 					</Link>
// 				</li>
// 				<li className='flex-1 md:flex-initial'>
// 					<FooterDiv>
// 						<SpanTextSmall>[ Design&code by ]</SpanTextSmall>
// 						<SpanTextBig>zan wardaszka</SpanTextBig>
// 					</FooterDiv>
// 				</li>
// 			</ul>
// 		</div>
// 	);
// }
