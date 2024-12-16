import React from 'react';

export default function GridComponent({
	rows = 6,
	columns = 12,
	smallMobile = { rows: 2, columns: 2 },
	tablet = { rows: 3, columns: 3 },
}) {
	// const getBreakpointValues = () => {
	// 	if (window.matchMedia('(max-width: 640px)').matches) {
	// 		return smallMobile;
	// 	} else if (window.matchMedia('(max-width: 768px)').matches) {
	// 		return tablet;
	// 	}
	// 	return { rows, columns };
	// };

	// const { rows: currentRows, columns: currentColumns } = getBreakpointValues();

	const letters = ['C', 'O', 'N', 'T', 'A', 'C', 'T', 'M', 'E'];
	const letterPositions = new Set();

	// Randomly place letters in the grid
	while (letterPositions.size < letters.length) {
		const randomPosition = `${Math.floor(
			Math.random() * currentRows
		)}-${Math.floor(Math.random() * currentColumns)}`;
		letterPositions.add(randomPosition);
	}

	const renderGrid = () => {
		const grid = [];
		let letterIndex = 0;
		for (let row = 0; row < currentRows; row++) {
			const rowCells = [];
			for (let col = 0; col < currentColumns; col++) {
				const positionKey = `${row}-${col}`;
				const letter = letterPositions.has(positionKey)
					? letters[letterIndex++]
					: '';
				rowCells.push(
					<div
						key={positionKey}
						className='border w-16 h-16 xl:w-14 xl:h-14 lg:w-12 lg:h-12 md:w-10 md:h-10 mq1225:w-11 mq1225:h-11 mq1050:w-10 mq1050:h-10 mq850:w-9 mq850:h-9 mq650:w-8 mq650:h-8 xs400:w-7 xs400:h-7 bg-gray-300 hover:bg-white transition-colors duration-300 flex items-center justify-center text-black text-sm font-bold'
					>
						{letter}
					</div>
				);
			}
			grid.push(
				<div key={row} className='flex'>
					{rowCells}
				</div>
			);
		}
		return grid;
	};

	return (
		<div className='flex flex-col items-center justify-center'>
			{renderGrid()}
		</div>
	);
}
