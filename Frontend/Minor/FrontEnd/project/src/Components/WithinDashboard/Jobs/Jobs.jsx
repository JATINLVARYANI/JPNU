import React from "react";
import { useNavigate, Routes, Route, useLocation, Outlet } from "react-router-dom";

function JobCard({ job }) {
  return (
    <div className="bg-white shadow-lg p-4 rounded-lg flex items-center space-x-4 border">
      <div className="flex-1">
        <h3 className="text-lg font-semibold text-primary-dark">{job.jobRole}</h3>
        <p className="text-gray-700">{job.companyName}</p>
        <p className="text-gray-500">{job.location}</p>
        <p className="text-primary-dark mt-1">CTC: {job.ctc}</p>
      </div>
    </div>
  );
}

function Jobs() {
  const navigate = useNavigate();
  const location = useLocation();

  const newJobsOpportunity = [
    {
      id: 1,
      companyName: "Tech Innovators",
      ctc: "₹12,00,000",
      jobRole: "Full Stack Developer",
      location: "Bangalore, India",
    },
    {
      id: 2,
      companyName: "Creative Solutions",
      ctc: "₹8,00,000",
      jobRole: "UI/UX Designer",
      location: "Mumbai, India",
    },
    {
      id: 3,
      companyName: "Creative Solutions",
      ctc: "₹8,00,000",
      jobRole: "UI/UX Designer",
      location: "Mumbai, India",
    },
  ];

  const userAppliedJobs = [
    {
      id: 3,
      companyName: "Green Energy Ltd.",
      ctc: "₹10,00,000",
      jobRole: "Project Manager",
      location: "Delhi, India",
    },
  ];

  const offeredJobs = [
    {
      id: 4,
      companyName: "Data Analysts Inc.",
      ctc: "₹9,00,000",
      jobRole: "Data Scientist",
      location: "Hyderabad, India",
    },
  ];

  // Highlight the active category based on the current path
  const getCurrentCategory = () => {
    if (location.pathname.includes("applications")) return "Applications";
    if (location.pathname.includes("offers")) return "Offers";
    return "Opportunities";
  };

  return (
    <div className="p-8 min-h-screen">
      <h1 className="text-2xl font-bold mb-8 text-primary-dark">Available Job Opportunities</h1>
      <div className="mb-8">
        <div className="flex space-x-2 overflow-scroll scrollbar-hide">
          <button
            onClick={() => navigate("/d/jobs/")}
            className={`py-2 px-4 rounded-full ${getCurrentCategory() === "Opportunities" ? "bg-primary-dark text-white" : "bg-gray-200 text-primary-dark"}`}
          >
            Opportunities
          </button>
          <button
            onClick={() => navigate("/d/jobs/applications")}
            className={`py-2 px-4 rounded-full ${getCurrentCategory() === "Applications" ? "bg-primary-dark text-white" : "bg-gray-200 text-primary-dark"}`}
          >
            Applications
          </button>
          <button
            onClick={() => navigate("/d/jobs/offers")}
            className={`py-2 px-4 rounded-full ${getCurrentCategory() === "Offers" ? "bg-primary-dark text-white" : "bg-gray-200 text-primary-dark"}`}
          >
            Offers
          </button>
        </div>
      </div>

      
      {/* Dynamic job display based on the route */}
      <Outlet/>
    </div>
  );
}

export default Jobs;
