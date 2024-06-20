import LogoIcon from './LogoIcon';

export default function MissionBox({ text, color = 'text-green-600' }) {
	return (
		<div className='flex items-center h-1/2 p-40 m-20'>
			<p className={`${color} text-9xl text-center`}>{text}</p>
		</div>
	);
}
