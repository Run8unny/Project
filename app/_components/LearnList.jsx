import Button from './Button';

export default function LearnList() {
	const learnList = [
		'blener',
		'react native',
		'docker',
		'node.js',
		'typescript',
		'C++',
		'unreal engine',
	];

	return (
		<div>
			<div className='flex items-start justify-start text-[4.75rem]  bg-silver h-[5.5rem] overflow-hidden text-black text-center px-5'>
				<h1 className='font-extrabold'>LEARN↘︎</h1>
			</div>
			<ul className='flex flex-wrap gap-0 justify-end items-center text-lg pb-10  bg-green-500 h-[7rem] overflow-hidden text-center px-5'>
				{learnList.map((learn, i) => (
					<li key={i} className='m-2'>
						<Button>{learn}</Button>
					</li>
				))}
			</ul>
		</div>
	);
}
