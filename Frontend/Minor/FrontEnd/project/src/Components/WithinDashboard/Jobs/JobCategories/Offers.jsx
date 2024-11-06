import React from "react";
import JobCard from "./JobCard";

function Offers() {
  const offeredJobs = [
    {
      id: 4,
      companyName: "Data Analysts Inc.",
      ctc: "₹9,00,000",
      jobRole: "Data Scientist",
      location: "Hyderabad, India",
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
