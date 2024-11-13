import React from "react";
import JobCard from "./JobCard";

function Offers() {
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

  
  return (
    <div className="space-y-4">
      {offeredJobs.map((job) => (
        <JobCard key={job.id} job={job} />
      ))}
    </div>
  );
}

export default Offers;
