'use client';
import React, { useState, useEffect } from 'react';

const Loader = () => {
	const [progress, setProgress] = useState(0);

	useEffect(() => {
		const interval = setInterval(() => {
			setProgress((prevProgress) => {
				if (prevProgress >= 100) {
					clearInterval(interval);
					return 100;
				}
				return prevProgress + 1;
			});
		}, 100);

		return () => clearInterval(interval);
	}, []);

	return (
		<div className='w-full flex justify-end md:justify-start'>
			<div className='absolute bottom-0 left-0 md:static md:bottom-auto md:left-auto md:right-0 p-2'>
				<div
					className={`font-extrabold inline-block [-webkit-text-stroke:1px_#f6f6f6] opacity-[1] text-[10vw] md:text-7vw]`}
				>
					{progress}%
				</div>
			</div>
		</div>
	);
};

export default Loader;
