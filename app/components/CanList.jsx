import Button from './Button';

export default function CanList() {
	const canList = [
		'react',
		'next.js',
		'mobile first',
		'css/tailwind/bootstrap',
		'html',
		'figma',
		'webpack&parcel&vite',
		'babel',
		'js',
		'animation',
		'git&github',
		'three.js',
		'react three fiber',
	];

	return (
		<div>
			<div className='flex items-start justify-start text-[4.75rem] bg-white h-[5.5rem] overflow-hidden text-black text-center px-5'>
				<h1 className='font-extrabold'>CAN ↘︎</h1>
			</div>
			<ul className='flex flex-wrap gap-0 justify-end items-center text-lg  h-[7rem] bg-silver overflow-hidden text-center px-5'>
				{canList.map((can, i) => (
					<li key={i} className='m-2'>
						<Button>{can}</Button>
					</li>
				))}
			</ul>
		</div>
	);
}
