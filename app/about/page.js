import MenuItem from '../components/MenuItem';
import Cursor from '../components/Cursor';
import AboutText from '../components/AboutText';
import FooterAbout from '../components/FooterAbout';
import Nav from '../components/Nav';
import NavMenu from '../components/NavMenu';
import CallMeButton from '../components/CallMeButton';
import MailMeButton from '../components/MailMeButton';
import Circle from '../components/Circle';
import Link from 'next/link';

export default function Page() {
	return (
		<div className='felx flex-col justify-center items-center w-full cursor-pointer'>
			<Nav>
				<NavMenu>
					<MenuItem href='./'>Home</MenuItem>
					<MenuItem href='./contact'>Contact</MenuItem>
					<MenuItem href='./playground'>Playground</MenuItem>
				</NavMenu>
			</Nav>
			<div>
				<main>
					<div className='top-20 relative flex font-bold items-center justify-center text-center leading-none text-xl mt-10 mq850:text-lg xs400:text-[5.5rem] xs400:p-0 xs400:mt-1'>
						<h1 className='my-8'>
							HELLO THERE <br /> (. ͡❛ ‿ ͡❛.)
						</h1>
					</div>
					<div className='flex flex-col font-bold items-start justify-center leading-none text-base mt-10 mq850:text-sm xs400:text-xs xs400:m-2'>
						<h3 className='my-4 py-20 px-10'>
							Hi! I’m Zan. Front-end developer who loves design, creative
							programming, and 3D art. I always strive to make a lasting
							positive impact on the digital landscape and business with a
							passion for problem-solving and development. I am happy to create
							custom-coded websites that are tailored to your brand. I also
							focus on accessibility, performance, and scalability. When I’m not
							working, I enjoy climbing & knitting. Dog lover.
						</h3>
					</div>
					<div className='flex justify-center items-center mq1050:flex-col'>
						<AboutText />
					</div>
				</main>
			</div>
			<div className='w-full h-[20rem] md:h-[35rem] pt-0 pb-10 flex flex-col justify-center items-center gap-8 md:gap-6 bg-transparent'>
				<div className='w-full grid grid-rows-3 md:grid-rows-3 grid-cols-5 md:grid-cols-4 relative overflow-hidden box-border leading-normal xs400:w-full xs400:gap-2 xs400:h-[35rem] mq850:h-[55rem] mq650:h-[45rem] mq1225:h-[55rem] '>
					<div className='row-start-2 row-end-3 col-start-1 col-end-2 flex justify-start items-center justify-self-center mq650:hidden'>
						<CallMeButton />
					</div>

					<div className='row-start-2 row-end-3 col-start-2 col-end-5 md:col-end-4 flex justify-center items-center hover:animate-bounce '>
						<Circle>
							<Link
								href='/contact'
								className='flex text-xs text-white font-cotham justify-center items-center p-20 text-center xs400:text-xs'
							>{`Contact Form`}</Link>
						</Circle>
					</div>
					<div className='row-start-2 row-end-3 col-start-5 col-end-6 flex justify-end items-center justify-self-center mq650:hidden'>
						<MailMeButton>mail me</MailMeButton>
					</div>
				</div>
			</div>
			<FooterAbout />
			<Cursor />
		</div>
	);
}
