import React from 'react';

import ExploreIcon from '../../assets/explore.svg';
import BulbIcon from '../../assets/bulb.svg';
import BookIcon from '../../assets/book.svg';
import ChatIcon from '../../assets/chat.svg';
import IQIcon from '../../assets/development.svg';

const exploreData = [
	{ title: 'Cloud Desktop', content: 'Fine tune and share your business ideas', icon: BulbIcon },
	{ title: 'Support Consulting', content: 'Get business mentorship and development processes', icon: BookIcon },
	{ title: 'Network Solutions', content: 'Connect with enterpreneurs and mentors', icon: ChatIcon },
	{ title: 'Disaster Recovery', content: 'Connect with enterpreneurs and mentors', icon: IQIcon },
];

const Explore = () => {
	return (
		<section id="explore" className="bg-white mt-10 py-10 xl:mt-44 lg:py-16">
			<div className="container mx-auto px-7 lg:px-10">
				<div className="max-w-2xl mx-auto text-left lg:text-center">
					<h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mt-16">
						Let's <span className="text-primary">Explore</span> Together
					</h1>
					<p className="lg:text-lg text-gray-400 max-w-lg mx-auto mt-4">
						Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quidem ullam, ratione dolor ipsum
					</p>
				</div>
				<div className="grid xl:grid-cols-2 mt-6 gap-x-20">
					<div className="hidden xl:block">
						<ExploreIcon />
					</div>
					<div className="grid lg:grid-cols-2 gap-x-5 md:gap-x-10 mt-8 lg:mt-16 xl:gap-x-12 flex-wrap gap-y-10 xl:gap-y-2">
						{exploreData.map(({ title, content, icon }) => {
							const Icon = icon;
							return (
								<div
									key={title}
									className="w-full xl:w-60 h-52 px-6 py-6 text-center border-2 rounded-2xl border-dotted hover:border-primary hover:border-solid explore-card"
								>
									<Icon width={80} height={80} className="mx-auto mt-1" />
									<h1 className="text-lg lg:text-xl mt-2 font-semibold text-gray-700 group-hover:text-white">
										{title}
									</h1>
									<p className="text-xs sm:text-sm text-gray-400 group-hover:text-white">{content}</p>
								</div>
							);
						})}
					</div>
				</div>
			</div>
		</section>
	);
};

export default Explore;
