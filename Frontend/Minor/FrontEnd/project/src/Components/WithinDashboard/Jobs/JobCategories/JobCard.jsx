import React from "react";
import { NavLink } from "react-router-dom";

function JobCard({ job }) {
  return (
    <NavLink  className="space-x-4 border bg-white shadow-lg p-4 rounded-lg flex items-center" to={`/d/jobs/${job.id}`}>
      <div className="">
        <div className="flex-1">
          <h3 className="text-lg font-semibold text-primary-dark">
            {job.jobRole}
          </h3>
          <p className="text-gray-700">{job.companyName}</p>
          <p className="text-gray-500">{job.location}</p>
          <p className="text-primary-dark mt-1">CTC: {job.ctc}</p>
        </div>
      </div>
    </NavLink>
  );
}

export default JobCard;
