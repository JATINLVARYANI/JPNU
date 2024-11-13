import React from "react";
import JobCard from "./JobCard";
function Application() {
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
  // simply use useEffect and dispatch the getJobOppotunites 

  return (
    <div className="space-y-4">
      {userAppliedJobs.map((job) => (
        <JobCard key={job.id} job={job} />
      ))}
    </div>
  );
}

export default Application;
