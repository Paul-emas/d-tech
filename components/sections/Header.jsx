import React from 'react';

import TeamIcon from '../../assets/team.svg';
import BlobIcon from '../../assets/blob.svg';
import Button from '../Button';
import Link from 'next/link';

const Header = ({}) => {
	return (
		<section className="header">
			<BlobIcon className="blob hidden lg:block" />
			<div className="container mx-auto px-8 md:px-0 xl:px-10 pt-10 xl:pt-32 2xl:pt-32">
				<div className="grid xl:grid-cols-2">
					<div className="md:text-center xl:text-left mx-auto xl:ml-0 mt-16 lg:mt-28 xl:mt-36 2xl:mt-44">
						<h1 className="text-5xl lg:text-7xl text-gray-800 font-bold max-w-xs lg:max-w-xl leading-tight lg:leading-snug">
							IT <span className="text-primary">Consulting</span> <span className="text-primary">Services</span>
						</h1>
						<p className="text-base lg:text-xl font-medium text-gray-500 lg:leading-snug max-w-lg mt-3">
							IT Consulting & Services We consult on business analysis, modeling and business process optimization |
							Project management | Quality Assurance | Business Intelligence.
						</p>
						<Link href="/register">
							<a>
								<Button className="bg-primary text-base lg:text-xl px-14 py-4 border-white text-white mt-7 lg:mt-10">
									Get Started
								</Button>
							</a>
						</Link>
					</div>
					<div className="mt-8 lg:mt-0">
						<TeamIcon />
					</div>
				</div>
			</div>
		</section>
	);
};

export default Header;
