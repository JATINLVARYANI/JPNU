import React from "react";
import JobCard from "./JobCard";

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
function Opportunites() {
  return (
    <div className="space-y-4">
      {newJobsOpportunity.map((job) => (
        <JobCard key={job.id} job={job} />
      ))}
    </div>
  );
}

export default Opportunites;
