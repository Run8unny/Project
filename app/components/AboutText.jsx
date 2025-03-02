import Button from './Button';

export default function AboutText() {
	const can = [
		'react',
		'next.js',
		'three.js',
		'react-three-fiber',
		'GIT',
		'animation',
		'3D',
		'figma',
		'HTML',
		'CSS',
		'JS',
		'RWD',
		'tailwind & bootstrap',
		'webpack, parcel & vite',
	];

	const learn = [
		'docker',
		'C++',
		'node.js',
		'typescript',
		'react native',
		'blender',
		'unreal engine',
	];

	return (
		<div className='flex justify-between items-center w-full xs400:mb-10 mq1050:w-full px-12 mb-16'>
			<div>
				<h1 className='font-bold text-lg mb-4 flex justify-start text-blue-500'>
					can ⇢
				</h1>
				<div className='flex flex-wrap gap-2'>
					{can.map((el, index) => (
						<Button key={index}>{el}</Button>
					))}
				</div>
			</div>
			<div>
				<h1 className='font-bold text-lg mb-4 flex justify-end'>⇠ learn</h1>
				<div className='flex flex-wrap gap-2 justify-end'>
					{learn.map((el, index) => (
						<Button key={index}>{el}</Button>
					))}
				</div>
			</div>
		</div>
	);
}
