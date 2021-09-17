import Link from 'next/link';
import React from 'react';

import Button from '../Button';

const CTA = ({}) => {
	return (
		<div className="py-10 px-7 xl:px-10">
			<div className="container mx-auto lg:px-10 rounded-2xl banner overflow-hidden">
				<div className="w-full pb-10 lg:h-56 px-5 text-center lg:text-left  xl:px-10 rounded-2xl">
					<div className="flex flex-wrap justify-center lg:justify-between">
						<h1 className="text-white text-3xl xl:text-5xl mt-10 max-w-xl xl:leading-snug font-bold">
							Find out more about us? Sign up now!
						</h1>
						<div>
							<Link href="/register">
								<a>
									<Button className="bg-white lg:bg-primary px-10 py-3 mt-5 lg:text-xl lg:mt-20 border-primary text-primary lg:text-white">
										Get Started
									</Button>
								</a>
							</Link>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default CTA;
