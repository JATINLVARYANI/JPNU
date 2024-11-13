import React from "react";
import {
  useNavigate,
  Routes,
  Route,
  useLocation,
  Outlet,
} from "react-router-dom";


function Jobs() {
  const navigate = useNavigate();
  const location = useLocation();

  const userAppliedJobs = [
    {
      id: "4",
      companyName: "Design Masters",
      role: "UX/UI Designer",
      internship: {
        name: "internship",
        duration: "5 months",
        stipend: 18000,
      },
      fulltime: {
        name: "fulltime",
        ctc: 400000,
      },
      location: ["Mumbai", "Bangalore"],
      NumberOfPositions: 1,
      requiredSkills: ["Adobe XD", "Figma", "Sketch", "User Research"],
      eligibleBranch: ["Design", "Computer Science"],
      BacklogsAllowed: "No",
      StartDate: "2024-05-01",
      EndDate: "2024-06-01",
      OtherDetails:
        "Strong portfolio and understanding of design principles required.",
    },
  ];

  const offeredJobs = [
    {
      id: "5",
      companyName: "GreenTech Innovations",
      role: "Environmental Engineer",
      internship: {
        name: "internship",
        duration: "6 months",
        stipend: 22000,
      },
      fulltime: {
        name: "fulltime",
        ctc: 350000,
      },
      location: ["Chennai", "Hyderabad"],
      NumberOfPositions: 2,
      requiredSkills: [
        "Environmental Impact Assessment",
        "Data Analysis",
        "Sustainability",
      ],
      eligibleBranch: ["Environmental Engineering", "Civil Engineering"],
      BacklogsAllowed: "Yes",
      StartDate: "2024-06-01",
      EndDate: "2024-07-01",
      OtherDetails:
        "Candidates should have an interest in sustainability and green technologies.",
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
      <h1 className="text-2xl font-bold mb-8 text-primary-dark">
        Available Job Opportunities
      </h1>
      <div className="mb-8">
        <div className="flex space-x-2 overflow-scroll scrollbar-hide">
          <button
            onClick={() => navigate("/d/jobs/")}
            className={`py-2 px-4 rounded-full ${
              getCurrentCategory() === "Opportunities"
                ? "bg-primary-dark text-white"
                : "bg-gray-200 text-primary-dark"
            }`}
          >
            Opportunities
          </button>
          <button
            onClick={() => navigate("/d/jobs/applications")}
            className={`py-2 px-4 rounded-full ${
              getCurrentCategory() === "Applications"
                ? "bg-primary-dark text-white"
                : "bg-gray-200 text-primary-dark"
            }`}
          >
            Applications
          </button>
          <button
            onClick={() => navigate("/d/jobs/offers")}
            className={`py-2 px-4 rounded-full ${
              getCurrentCategory() === "Offers"
                ? "bg-primary-dark text-white"
                : "bg-gray-200 text-primary-dark"
            }`}
          >
            Offers
          </button>
        </div>
      </div>

      {/* Dynamic job display based on the route */}
      <Outlet />
    </div>
  );
}

export default Jobs;
