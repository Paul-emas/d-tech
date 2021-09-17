import React from 'react';

import LoginIcon from '../../assets/login.svg';
import GroupIcon from '../../assets/group.svg';
import ConnectIcon from '../../assets/connect.svg';

const aboutData = [
	{
		title: 'Cloud Solutions',
		content:
			'Cloud environments have not only revolutionized IT, but how businesses operate. Embracing cloud computing solutions can be challenging. D-Tech is uniquely positioned to help you define and implement smart cloud software strategy and optimize your cloud environment.',
		icon: LoginIcon,
	},
	{
		title: 'IT Service Management ',
		content:
			'ITSM (or IT Service Management) refers to all the activities involved in designing, creating, delivering, supporting and managing the lifecycle of IT services. Well, of course it does,They’re all services provided by your IT team. In other words – IT services.',
		icon: GroupIcon,
	},
	{
		title: 'Network Solutions',
		content:
			'Computer networks, including the Internet, play critical roles in business and communications. Without them, it would be impossible for companies to engage in e-commerce and the vast majority of business systems would come to a complete standstill.',
		icon: ConnectIcon,
	},
];

const About = ({}) => {
	return (
		<div id="about" className="bg-white py-16 lg:py-32">
			<div className="container mx-auto px-7 lg:px-10">
				<div className="max-w-2xl mx-auto lg:text-center">
					<h1 className="text-4xl lg:text-6xl font-bold">
						<span className="text-primary">Engage</span> with IdeaHub
					</h1>
					<p className="lg:text-lg text-gray-400 max-w-lg mx-auto mt-4">
						Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quidem ullam, ratione dolor ipsum
					</p>
				</div>
				<div className="grid lg:grid-cols-3 gap-y-10 max-w-7xl mx-auto mt-16">
					{aboutData.map(({ title, content, icon }) => {
						const Icon = icon;
						return (
							<div key={title} className="lg:text-center">
								<div className="flex lg:justify-center">
									<Icon height="280" />
								</div>
								<h1 className="text-xl lg:text-2xl mt-4 font-semibold capitalize text-gray-700">{title}</h1>
								<p className="text-sm lg:text-md mt-2 px-0 lg:px-10 text-gray-500">{content}</p>
							</div>
						);
					})}
				</div>
			</div>
		</div>
	);
};

export default About;
