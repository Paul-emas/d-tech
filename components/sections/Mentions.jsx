import React from 'react';

const recentMentors = [
  { name: 'Monday Miller', active: true },
  { name: 'Maria Luli', active: true },
  { name: 'Logan James' },
];

const mentors = [
  { name: 'Monday Miller', active: true },
  { name: 'Maria Luli', active: true },
  { name: 'Logan James' },
  { name: 'Ola Olaoluwa' },
  { name: 'Bolu James', active: true },
];

const Mentions = ({}) => {
  return (
    <div className="sticky pl-5 h-screen mentions bg-white border-l">
      <div className="pt-5">
        <div className="caption py-5 text-sm text-gray-400">Recent Mentors</div>
        <div className="links flex w-full flex-col">
          {recentMentors.map(({ name, active }, index) => (
            <div
              key={name}
              className="inline-flex items-center border-2 border-white duration-200 cursor-pointer hover:bg-gray-100 hover:px-4 rounded-2xl py-2"
            >
              <div>
                <div className="w-12 h-12 rounded-full font-bold text-center py-3 text-white gradient">FD</div>
              </div>
              <div className="ml-3">
                <h2 className="text-gray-700 inline-block text-sm 2xl:text-md">{name}</h2>
              </div>
              {active ? <div className="w-2 h-2 ml-auto rounded-full bg-primary"></div> : ''}
            </div>
          ))}
        </div>
        <div className="pt-5">
          <div className="caption py-5 text-sm text-gray-400">Mentors</div>
          <div className="links flex w-full flex-col">
            {mentors.map(({ name, active }, index) => (
              <div
                key={name}
                className="inline-flex items-center border-2 border-white duration-200 cursor-pointer hover:bg-gray-100 px-2 2xl:hover:px-4 rounded-2xl py-2"
              >
                <div>
                  <div className="w-12 h-12 rounded-full font-bold text-center py-3 text-white gradient">FD</div>
                </div>
                <div className="ml-3">
                  <h2 className="text-gray-700 inline-block text-sm 2xl:text-md">{name}</h2>
                </div>
                {active ? <div className="w-2 h-2 ml-auto rounded-full bg-primary"></div> : ''}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Mentions;
