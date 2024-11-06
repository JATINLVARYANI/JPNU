import React from "react";

const JD = () => {
  const job = {
    title: "Graduate Engineer Trainee",
    company: "State Street Corporation",
    employmentType: "Internship + Full-Time",
    locations: ["Hyderabad", "Bangalore"],
    ctc: "INR 8,60,000",
    stipend: "INR 30,000",
    internshipDuration: "6 Months",
    attachments: [
      { name: "Student List", link: "/path/to/student-list.pdf" },
      { name: "Consolidated", link: "/path/to/consolidated.pdf" },
      { name: "State Street CTC", link: "/path/to/statestreet-ctc.pdf" },
    ],
    eligibleCourses: [
      "B.Tech - Mechanical Engineering",
      "B.Tech - Electronics & Instrumentation Engineering",
      "B.Tech - Electronics And Communication Engineering",
      "B.Tech - Electrical Engineering",
      "B.Tech - Computer Science and Engineering",
      "B.Tech - Civil Engineering",
      "B.Tech - Chemical Engineering",
    ],
    eligibilityCriteria: "60% and above in their current Course/Program",
    selectionProcess: [
      "Virtual Day 1 - Online Assessment",
      "In-Campus Day 2 & 3 - Pre-Placement talk & Panel Interviews",
    ],
    registrationSchedule: {
      open: "01:30 PM, 12-Sep-2024",
      close: "01:30 PM, 13-Sep-2024",
    },
  };

  return (
    <div className="container mx-auto p-6 bg-gray-50">
      {/* Header */}
      <div className="flex justify-between items-center border-b pb-4 border-gray-200">
        <div>
          <h1 className="text-xl font-bold text-gray-800">{job.title}</h1>
          <p className="text-sm text-gray-600">{job.company}</p>
        </div>
        <div className="flex space-x-2 items-center">
          <span className="text-sm bg-green-200 text-green-800 px-2 py-1 rounded-full">
            On Campus
          </span>
          <span className="text-sm bg-green-200 text-green-800 px-2 py-1 rounded-full">
            Eligible
          </span>
        </div>
      </div>

      {/* Job Details */}
      <div className="grid grid-cols-3 gap-4 py-4">
        <div>
          <h2 className="font-bold text-gray-800">Employment Type</h2>
          <p className="text-gray-600">{job.employmentType}</p>
        </div>
        <div>
          <h2 className="font-bold text-gray-800">Locations</h2>
          <p className="text-gray-600">{job.locations.join(", ")}</p>
        </div>
        <div>
          <h2 className="font-bold text-gray-800">Cost to Company</h2>
          <p className="text-gray-600">{job.ctc}</p>
        </div>
      </div>

      {/* Stipend */}
      {job.stipend && (
        <div className="my-4">
          <h2 className="font-bold text-gray-800">Stipend</h2>
          <p className="text-gray-600">{job.stipend}</p>
        </div>
      )}

      {/* Internship Duration */}
      {job.internshipDuration && (
        <div className="my-4">
          <h2 className="font-bold text-gray-800">Internship Duration</h2>
          <p className="text-gray-600">{job.internshipDuration}</p>
        </div>
      )}

      {/* Attachments */}
      <div className="my-4">
        <h2 className="font-bold text-gray-800">Attachments</h2>
        <div className="flex space-x-4">
          {job.attachments.map((file, index) => (
            <a
              href={file.link}
              key={index}
              className="block bg-primary-lightest text-primary-darker rounded px-4 py-2 shadow hover:bg-primary-light"
              target="_blank"
              rel="noopener noreferrer"
              download={file.name} // Enable download option
            >
              {file.name}
            </a>
          ))}
        </div>
      </div>

      {/* Eligible Courses */}
      <div className="my-4">
        <h2 className="font-bold text-gray-800">Eligible Courses</h2>
        <p className="text-gray-600">{job.eligibleCourses.join(", ")}</p>
      </div>

      {/* Eligibility Criteria */}
      <div className="my-4">
        <h2 className="font-bold text-gray-800">Eligibility Criteria</h2>
        <p className="text-gray-600">{job.eligibilityCriteria}</p>
      </div>

      {/* Selection Process */}
      <div className="my-4">
        <h2 className="font-bold text-gray-800">Selection Process Details</h2>
        <ul className="list-disc pl-5 text-gray-600">
          {job.selectionProcess.map((step, index) => (
            <li key={index}>{step}</li>
          ))}
        </ul>
      </div>

      {/* Registration Schedule */}
      <div className="my-4">
        <h2 className="font-bold text-gray-800">Registration Schedule</h2>
        <p className="text-gray-600">Opens: {job.registrationSchedule.open}</p>
        <p className="text-gray-600">Closes: {job.registrationSchedule.close}</p>
      </div>

      {/* Apply Button */}
      <div className="my-6">
        <button className="bg-primary-dark text-white px-4 py-2 rounded hover:bg-primary-darker">
          Apply Now
        </button>
      </div>
    </div>
  );
};

export default JD;
