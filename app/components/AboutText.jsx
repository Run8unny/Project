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
		<div className='flex flex-col justify-between items-center w-1/2 mb-20 xs400:mb-10 p-20 mq1050:p-10 mq1050:w-full'>
			<div className='mb-20'>
				<h1 className='font-bold text-lg mb-4 flex justify-start'>I can</h1>
				<div className='flex flex-wrap gap-2'>
					{can.map((el, index) => (
						<Button key={index}>{el}</Button>
					))}
				</div>
			</div>
			<div>
				<h1 className='font-bold text-lg mb-4 mt-10 flex justify-end'>
					I learn
				</h1>
				<div className='flex flex-wrap gap-2 justify-end'>
					{learn.map((el, index) => (
						<Button key={index}>{el}</Button>
					))}
				</div>
			</div>
		</div>
	);
}
