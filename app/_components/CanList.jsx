import Button from './Button';

export default function CanList() {
	const canList = [
		'react',
		'next.js',
		'mobile first',
		'sass',
		'babel',
		'css',
		'html',
		'figma',
		'webpack&parcel&vite',
		'js',
		'animation&3D',
		'git&github',
	];

	return (
		<div className='px-20 py-5'>
			<div className='flex items-start justify-start text-[8rem]'>
				<h1 className='font-bold'>I CAN</h1>
			</div>
			<ul className='flex flex-wrap gap-0 justify-end items-center text-lg pb-10'>
				{canList.map((can, i) => (
					<li key={i} className='m-2'>
						<Button>{can}</Button>
					</li>
				))}
			</ul>
		</div>
	);
}
