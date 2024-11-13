import React from "react";
import JobCard from "./JobCard";

const newJobsOpportunity = [
  {
    id: "1",
    companyName: "Tech Solutions Ltd.",
    role: "Frontend",
    internship: {
      name: "internship",
      duration: "6 months",
      stipend: 20000,
    },
    fulltime: {
      name: "fulltime",
      ctc: 300000,
    },
    location: ["Ahmedabad"],
    NumberOfPositions: 1,
    requiredSkills: [],
    eligibleBranch: ["Mechanical", "Civil"],
    BacklogsAllowed: "Yes",
    StartDate: "2024-03-01",
    EndDate: "2024-03-31",
    OtherDetails: "2 rounds of interviews and a coding assessment",
  },
  {
    id: "2",
    companyName: "Innovative Tech Corp.",
    role: "Backend Developer",
    internship: {
      name: "internship",
      duration: "3 months",
      stipend: 25000,
    },
    fulltime: {
      name: "fulltime",
      ctc: 500000,
    },
    location: ["Mumbai", "Pune"],
    NumberOfPositions: 2,
    requiredSkills: ["Node.js", "Express", "SQL"],
    eligibleBranch: ["Computer Science", "Information Technology"],
    BacklogsAllowed: "No",
    StartDate: "2024-04-15",
    EndDate: "2024-05-15",
    OtherDetails: "Requires strong understanding of backend systems.",
  },
  {
    id: "3",
    companyName: "Global Analytics",
    role: "Data Analyst",
    internship: {
      name: "internship",
      duration: "4 months",
      stipend: 15000,
    },
    fulltime: {
      name: "fulltime",
      ctc: 450000,
    },
    location: ["Bangalore", "Delhi"],
    NumberOfPositions: 3,
    requiredSkills: ["Python", "SQL", "Excel", "Tableau"],
    eligibleBranch: ["Statistics", "Economics", "Computer Science"],
    BacklogsAllowed: "Yes",
    StartDate: "2024-02-10",
    EndDate: "2024-03-10",
    OtherDetails: "Candidates should be comfortable with large data sets.",
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
