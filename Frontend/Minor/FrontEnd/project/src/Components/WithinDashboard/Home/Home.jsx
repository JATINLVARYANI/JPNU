import React from 'react';
import { useNavigate } from 'react-router-dom'; // Assuming you are using react-router-dom for navigation

const notifications = [
  {
    id: 1,
    companyName: 'Tech Corp',
    jobRole: 'Software Developer',
    description: 'Develop and maintain web applications.',
    openTime: '12/08/2024 7:30AM',
    closeTime: '14/08/2024 12:00AM',
  },
  {
    id: 2,
    companyName: 'InnovateX',
    jobRole: 'Data Scientist',
    description: 'Analyze complex data to drive decision-making.',
    openTime: '13/08/2024 9:00AM',
    closeTime: '15/08/2024 6:00PM',
  },
  {
    id: 2,
    companyName: 'InnovateX',
    jobRole: 'Data Scientist',
    description: 'Analyze complex data to drive decision-making.',
    openTime: '13/08/2024 9:00AM',
    closeTime: '15/08/2024 6:00PM',
  },
  {
    id: 2,
    companyName: 'InnovateX',
    jobRole: 'Data Scientist',
    description: 'Analyze complex data to drive decision-making.',
    openTime: '13/08/2024 9:00AM',
    closeTime: '15/08/2024 6:00PM',
  },
  {
    id: 2,
    companyName: 'InnovateX',
    jobRole: 'Data Scientist',
    description: 'Analyze complex data to drive decision-making.',
    openTime: '13/08/2024 9:00AM',
    closeTime: '15/08/2024 6:00PM',
  },
  {
    id: 2,
    companyName: 'InnovateX',
    jobRole: 'Data Scientist',
    description: 'Analyze complex data to drive decision-making.',
    openTime: '13/08/2024 9:00AM',
    closeTime: '15/08/2024 6:00PM',
  },
  {
    id: 2,
    companyName: 'InnovateX',
    jobRole: 'Data Scientist',
    description: 'Analyze complex data to drive decision-making.',
    openTime: '13/08/2024 9:00AM',
    closeTime: '15/08/2024 6:00PM',
  },
  {
    id: 2,
    companyName: 'InnovateX',
    jobRole: 'Data Scientist',
    description: 'Analyze complex data to drive decision-making.',
    openTime: '13/08/2024 9:00AM',
    closeTime: '15/08/2024 6:00PM',
  },
  {
    id: 2,
    companyName: 'InnovateX',
    jobRole: 'Data Scientist',
    description: 'Analyze complex data to drive decision-making.',
    openTime: '13/08/2024 9:00AM',
    closeTime: '15/08/2024 6:00PM',
  },
  // Add more notifications as needed
];

const NotificationCard = ({ companyName, jobRole, description, openTime, closeTime, onClick }) => (
  <div
    onClick={onClick}
    className="p-5 bg-gray-50 rounded-lg shadow-md mb-6   cursor-pointer transition-transform duration-300 ease-in-out hover:scale-[1.02] hover:bg-primary-lightest hover:shadow-xl active:scale-95"
  >
    <h1 className="text-lg font-semibold text-primary-darkest mb-2">{companyName} - {jobRole}</h1>
    <h3 className="text-sm text-primary-dark mb-3">{description}</h3>
    <p className="text-xs text-primary-darker">
      Registration: {openTime} to {closeTime}
    </p>
  </div>
);

const Home = () => {
  const navigate = useNavigate();

  const handleGenerateClick = () => {
    navigate('/d/editprofile'); // Replace with the actual path to the page you want to redirect to
  };

  const handleCardClick = (id) => {
    navigate(`d/jobs/${id}`); // Replace with the actual path to the notification details page
  };

  return (
    <div className="flex flex-col md:flex-row p-4 gap-6">
      {/* Left Column: Notifications */}
      <div className="flex-1 md:w-2/3 bg-white p-6 rounded-lg shadow-lg overflow-y-auto h-auto md:h-screen  transition-shadow hover:shadow-xl">
        <h2 className="text-2xl font-bold text-primary-dark mb-6 border-b-2 border-primary-dark pb-2">
          Latest Notifications
        </h2>
        {notifications
          .sort((a, b) => new Date(a.openTime) - new Date(b.openTime)) // Sort by openTime
          .map((notification) => (
            <NotificationCard
              key={notification.id}
              {...notification}
              onClick={() => handleCardClick(notification.id)}
            />
          ))}
      </div>

      {/* Right Column: Generate Button */}
      <div className="flex-none md:w-1/3 bg-white p-6 rounded-lg shadow-lg flex items-center justify-center transition-shadow hover:shadow-xl">
        <button
          onClick={handleGenerateClick}
          className="bg-primary-dark hover:bg-primary-darker text-white font-semibold py-3 px-6 rounded-lg shadow-md transition duration-300 ease-in-out transform hover:scale-105 hover:shadow-lg"
        >
          Generate Resume
        </button>
      </div>
    </div>
  );
};

export default Home;
