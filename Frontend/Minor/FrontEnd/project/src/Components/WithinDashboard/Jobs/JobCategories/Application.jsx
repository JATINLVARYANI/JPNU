import React from "react";
import JobCard from "./JobCard";
function Application() {
  const userAppliedJobs = [
    {
      id: 3,
      companyName: "Green Energy Ltd.",
      ctc: "₹10,00,000",
      jobRole: "Project Manager",
      location: "Delhi, India",
    },
  ];

  return (
    <div className="space-y-4">
      {userAppliedJobs.map((job) => (
        <JobCard key={job.id} job={job} />
      ))}
    </div>
  );
}

export default Application;
