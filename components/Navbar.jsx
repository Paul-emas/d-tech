import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';

import Button from './Button';

const NavBar = ({ className, align, children }) => {
	const [scrolled, setScrolled] = useState(false);

	useEffect(() => {
		window.onscroll = () => {
			if (window.scrollY > 10) {
				setScrolled(true);
			} else {
				setScrolled(false);
			}
		};
	}, []);

	return (
		<div
			className={`${
				scrolled ? 'bg-white border-b' : 'bg-white xl:bg-transparent'
			} ${className} w-full z-50 py-1.5 fixed left-0 top-0`}
		>
			<div className="container mx-auto px-7 md:px-0 xl:px-8">
				<div className={`${align} flex items-center h-16`}>
					<Link href="/">
						<a className="-ml-3">
							<Image
								src="/images/logo.jpg"
								width={60}
								height={60}
								className="object-contain transform scale-90 lg:scale-100 rounded-lg"
							/>
						</a>
					</Link>
					{children}
				</div>
			</div>
		</div>
	);
};

export default NavBar;
