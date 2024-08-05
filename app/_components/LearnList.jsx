import Button from './Button';

export default function LearnList() {
	const learnList = [
		'blener',
		'three.js',
		'react three fiber',
		'react native',
		'docker',
		'cyber security',
		'node.js',
		'typescript',
	];

	return (
		<div className='px-20 py-5'>
			<div className='flex items-start justify-start text-[8rem]'>
				<h1 className='font-bold'>I LEARN</h1>
			</div>
			<ul className='flex flex-wrap gap-0 justify-end items-center text-lg pb-10'>
				{learnList.map((learn, i) => (
					<li key={i} className='m-2'>
						<Button>{learn}</Button>
					</li>
				))}
			</ul>
		</div>
	);
}
