import React, { useRef } from "react";
import jsPDF from "jspdf";
import html2canvas from "html2canvas";

const Resume = () => {
  const resumeRef = useRef();

  // Sample data object
  const resumeData = {
    firstName: "Dhruvil",
    middleName: "C",
    lastName: "Rana",
    intro: "A proficient software developer with good knowledge in ReactJS, MongoDB, DSA...",
    github: "https://github.com/Dboy3",
    contact: "+91-7990950048",
    email: "dhruvil.rana@example.com",
    skills: ["MongoDB", "ReactJS", "JavaScript"],
    education: {
      university: "Nirma University",
      course: "B.Tech - Computer Science and Engineering",
      cgpa: "8.35/10",
      twelfth: {
        school: "Baroda High School",
        percentage: "84%",
      },
      tenth: {
        school: "Jeevan Sadhna",
        percentage: "85%",
      },
    },
    experience: {
      position: "React.js Technology Trainee Intern",
      company: "Bestwave Technologies Private Limited",
      dates: "May 27, 2024 - Jul 12, 2024",
      location: "Jamnagar, Gujarat, India",
      mentor: "Ashish Butani",
      contact: "+91-7990950048",
      email: "ashishbutani1@gmail.com",
      details:
        "Collaborated with team members on real-world projects, tested APIs, worked with Express and Mongoose.",
    },
    projects: [
      {
        title: "Ecommerce-FullStack",
        link: "https://github.com/Dboy3/Project",
        dates: "Jun 22, 2024 - Jul 18, 2024",
        skills: ["MongoDB", "ReactJS", "Redux", "Express.js", "JavaScript"],
      },
    ],
    achievements: [
      "Top 23% in LeetCode contests worldwide",
      "First place in Hackathon 2023",
    ],
  };

  // Function to download PDF
  const downloadPDF = () => {
    const input = resumeRef.current;
    html2canvas(input).then((canvas) => {
      const imgData = canvas.toDataURL("image/png");
      const pdf = new jsPDF();
      const imgProps = pdf.getImageProperties(imgData);
      const pdfWidth = pdf.internal.pageSize.getWidth();
      const pdfHeight = (imgProps.height * pdfWidth) / imgProps.width;

      pdf.addImage(imgData, "PNG", 0, 0, pdfWidth, pdfHeight);
      pdf.save("resume.pdf");
    });
  };

  return (
    <div className="p-8">
      <div className="flex justify-between">
        <h1 className="text-3xl font-bold">Resume</h1>
        <button
          className="bg-primary-dark text-white py-2 px-4 rounded hover:bg-primary-darker"
          onClick={downloadPDF}
        >
          Download PDF
        </button>
      </div>
      <div ref={resumeRef} className="mt-6 p-6 shadow-lg bg-white">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-black">
            {resumeData.firstName} {resumeData.middleName} {resumeData.lastName}
          </h1>
          <div className="text-black mt-2">
            {resumeData.github && (
              <a
                href={resumeData.github}
                className="text-primary-dark hover:underline"
              >
                {resumeData.github}
              </a>
            )}
            {resumeData.contact && <p>{resumeData.contact}</p>}
            {resumeData.email && <p>{resumeData.email}</p>}
          </div>
          {resumeData.intro && <p className="mt-4 text-black">{resumeData.intro}</p>}
        </div>

        <hr className="my-4 border-black" />

        {/* Skills Section */}
        {resumeData.skills && resumeData.skills.length > 0 && (
          <div>
            <h2 className="text-2xl font-semibold text-black">Skills</h2>
            <ul className="flex flex-wrap gap-4 mt-2">
              {resumeData.skills.map((skill, index) => (
                <li
                  key={index}
                  className="bg-primary-lighter text-primary-darkest px-3 py-1 rounded"
                >
                  {skill}
                </li>
              ))}
            </ul>
          </div>
        )}

        <hr className="my-4 border-black" />

        {/* Education Section */}
        {resumeData.education && (
          <div>
            <h2 className="text-2xl font-semibold text-black">Academic Details</h2>
            <div className="mt-2 text-black">
              {resumeData.education.university && (
                <h3 className="font-semibold">{resumeData.education.university}</h3>
              )}
              {resumeData.education.course && resumeData.education.cgpa && (
                <p>
                  {resumeData.education.course} | CGPA: {resumeData.education.cgpa}
                </p>
              )}
              {resumeData.education.twelfth && resumeData.education.twelfth.school && (
                <p>
                  {resumeData.education.twelfth.school} | Percentage:{" "}
                  {resumeData.education.twelfth.percentage}
                </p>
              )}
              {resumeData.education.tenth && resumeData.education.tenth.school && (
                <p>
                  {resumeData.education.tenth.school} | Percentage:{" "}
                  {resumeData.education.tenth.percentage}
                </p>
              )}
            </div>
          </div>
        )}

        <hr className="my-4 border-black" />

        {/* Experience Section */}
        {resumeData.experience && (
          <div>
            <h2 className="text-2xl font-semibold text-black">Experience</h2>
            <div className="mt-2 text-black">
              {resumeData.experience.position && (
                <h3 className="font-semibold">{resumeData.experience.position}</h3>
              )}
              {resumeData.experience.company && <p>{resumeData.experience.company}</p>}
              {resumeData.experience.dates && <p>{resumeData.experience.dates}</p>}
              {resumeData.experience.location && <p>{resumeData.experience.location}</p>}
              {resumeData.experience.mentor && resumeData.experience.contact && (
                <p>
                  Mentor: {resumeData.experience.mentor} | Contact:{" "}
                  {resumeData.experience.contact} | Email:{" "}
                  {resumeData.experience.email}
                </p>
              )}
              {resumeData.experience.details && <p>{resumeData.experience.details}</p>}
            </div>
          </div>
        )}

        <hr className="my-4 border-black" />

        {/* Projects Section */}
        {resumeData.projects && resumeData.projects.length > 0 && (
          <div>
            <h2 className="text-2xl font-semibold text-black">Projects</h2>
            {resumeData.projects.map((project, index) => (
              <div key={index} className="mt-2 text-black">
                <h3 className="font-semibold">{project.title}</h3>
                <a
                  href={project.link}
                  className="text-primary-dark hover:underline"
                >
                  {project.link}
                </a>
                <p>{project.dates}</p>
                <p>Skills: {project.skills.join(", ")}</p>
              </div>
            ))}
          </div>
        )}

        <hr className="my-4 border-black" />

        {/* Achievements Section */}
        {resumeData.achievements && resumeData.achievements.length > 0 && (
          <div>
            <h2 className="text-2xl font-semibold text-black">Achievements</h2>
            <ul className="list-disc ml-6 mt-2 text-black">
              {resumeData.achievements.map((achievement, index) => (
                <li key={index}>{achievement}</li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default Resume;