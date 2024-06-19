import ImageLogo from './ImageLogo';

export default function MissionBox({ text }) {
	return (
		<div className='flex items-center h-1/2 p-20 m-20'>
			<p className='text-green-600 text-9xl text-center'>{text}</p>
			<ImageLogo
				width={80}
				height={80}
				color='bg-green-600'
				className='m-20 p-20'
			/>
		</div>
	);
}
