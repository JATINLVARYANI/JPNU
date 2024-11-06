import React, { useState } from "react";
import { FaEdit, FaTrashAlt } from "react-icons/fa";
import { useForm } from "react-hook-form"; // Import react-hook-form

const ExperienceDetailForm = () => {
  const [experiences, setExperiences] = useState([
    {
      id: 1,
      company: "Bestwave Technologies Private Limited",
      title: "React.js Technology Trainee Intern",
      dates: "May 27, 2024 - Jul 12, 2024",
      location: "Jamnagar, Gujarat, India",
      industry: "IT / Computers - Software",
      mentor: "Ashish Butani",
      mentorDesignation: "Director",
      mentorNumber: "+91-7990950048",
      mentorEmail: "ashishbutani1@gmail.com",
      academicGuide: "Vivek Kumar Prasad",
      techStack: ["MongoDB", "ReactJS", "Javascript"],
      description:
        "Collaborated with team members on real-world project to gain hands-on experience. Tested certain APIs and contributed with the team to make routes in Express and Mongoose.",
    },
  ]);

  const [showForm, setShowForm] = useState(false);
  const [currentExperience, setCurrentExperience] = useState(null);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const handleAddExperience = () => {
    setCurrentExperience(null);
    reset();
    setShowForm(true);
  };

  const handleEditExperience = (experience) => {
    setCurrentExperience(experience);
    reset({
      company: experience.company,
      title: experience.title,
      dates: experience.dates,
      location: experience.location,
      industry: experience.industry,
      mentor: experience.mentor,
      mentorDesignation: experience.mentorDesignation,
      mentorNumber: experience.mentorNumber,
      mentorEmail: experience.mentorEmail,
      academicGuide: experience.academicGuide,
      techStack: experience.techStack.join(", "),
      description: experience.description,
    });
    setShowForm(true);
  };

  const handleDeleteExperience = (id) => {
    setExperiences(experiences.filter((experience) => experience.id !== id));
  };

  const onSubmit = (data) => {
    const newExperience = {
      id: currentExperience ? currentExperience.id : Date.now(),
      ...data,
      techStack: data.techStack.split(","),
    };

    if (currentExperience) {
      setExperiences(
        experiences.map((exp) =>
          exp.id === currentExperience.id ? newExperience : exp
        )
      );
    } else {
      setExperiences([...experiences, newExperience]);
    }

    setShowForm(false);
  };

  return (
    <div className="p-8">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold">Experiences</h1>
        <button
          className="bg-primary text-white px-4 py-2 rounded"
          onClick={handleAddExperience}
        >
          + Add New
        </button>
      </div>

      {experiences.length === 0 ? (
        <p>No experiences available. Add one using the button above.</p>
      ) : (
        <div className="grid gap-8">
          {experiences.map((experience) => (
            <div
              key={experience.id}
              className="p-6 border rounded-lg shadow-md bg-white"
            >
              <div className="flex justify-between">
                <div>
                  <h3 className="text-xl font-semibold">{experience.title}</h3>
                  <p className="text-blue-500">{experience.company}</p>
                  <p className="text-gray-500">{experience.dates}</p>
                  <p>
                    <strong>Location:</strong> {experience.location}
                  </p>
                  <p>
                    <strong>Industry:</strong> {experience.industry}
                  </p>
                  <p>
                    <strong>Mentor:</strong> {experience.mentor} |{" "}
                    <strong>Designation:</strong> {experience.mentorDesignation}{" "}
                    | <strong>Contact:</strong> {experience.mentorNumber} |{" "}
                    <strong>Email:</strong> {experience.mentorEmail}
                  </p>
                  <p>
                    <strong>Academic Guide:</strong> {experience.academicGuide}
                  </p>
                  <div className="flex space-x-2 mt-2">
                    {experience.techStack.map((tech, idx) => (
                      <span
                        key={idx}
                        className="bg-gray-200 text-sm px-2 py-1 rounded"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  <p className="mt-4">{experience.description}</p>
                </div>
                <div className="flex space-x-2">
                  <button
                    onClick={() => handleEditExperience(experience)}
                    className="text-blue-500"
                  >
                    <FaEdit />
                  </button>
                  <button
                    onClick={() => handleDeleteExperience(experience.id)}
                    className="text-red-500"
                  >
                    <FaTrashAlt />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}

      {showForm && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50 overflow-y-auto ">
          <div className="bg-white  my-8 p-6 rounded-lg shadow-lg max-w-lg w-full overflow-y-auto max-h-screen">
            <h2 className="text-2xl mb-4">
              {currentExperience ? "Edit Experience" : "Add New Experience"}
            </h2>
            <form onSubmit={handleSubmit(onSubmit)}>
              <div className="mb-4">
                <label className="block text-sm font-medium mb-2">
                  Company Name
                </label>
                <input
                  {...register("company", { required: true })}
                  className="border px-4 py-2 rounded w-full"
                />
                {errors.company && (
                  <p className="text-red-500 text-sm">Company is required</p>
                )}
              </div>

              <div className="mb-4">
                <label className="block text-sm font-medium mb-2">
                  Title
                </label>
                <input
                  {...register("title", { required: true })}
                  className="border px-4 py-2 rounded w-full"
                />
                {errors.title && (
                  <p className="text-red-500 text-sm">Title is required</p>
                )}
              </div>

              <div className="mb-4">
                <label className="block text-sm font-medium mb-2">Dates</label>
                <input
                  {...register("dates", { required: true })}
                  type="text"
                  className="border px-4 py-2 rounded w-full"
                />
                {errors.dates && (
                  <p className="text-red-500 text-sm">Dates are required</p>
                )}
              </div>

              <div className="mb-4">
                <label className="block text-sm font-medium mb-2">Location</label>
                <input
                  {...register("location", { required: true })}
                  type="text"
                  className="border px-4 py-2 rounded w-full"
                />
                {errors.location && (
                  <p className="text-red-500 text-sm">Location is required</p>
                )}
              </div>

              <div className="mb-4">
                <label className="block text-sm font-medium mb-2">Industry</label>
                <input
                  {...register("industry", { required: true })}
                  type="text"
                  className="border px-4 py-2 rounded w-full"
                />
                {errors.industry && (
                  <p className="text-red-500 text-sm">Industry is required</p>
                )}
              </div>

              <div className="mb-4">
                <label className="block text-sm font-medium mb-2">Mentor</label>
                <input
                  {...register("mentor", { required: true })}
                  type="text"
                  className="border px-4 py-2 rounded w-full"
                />
                {errors.mentor && (
                  <p className="text-red-500 text-sm">Mentor is required</p>
                )}
              </div>

              <div className="mb-4">
                <label className="block text-sm font-medium mb-2">
                  Mentor Designation
                </label>
                <input
                  {...register("mentorDesignation", { required: true })}
                  type="text"
                  className="border px-4 py-2 rounded w-full"
                />
                {errors.mentorDesignation && (
                  <p className="text-red-500 text-sm">
                    Mentor Designation is required
                  </p>
                )}
              </div>

              <div className="mb-4">
                <label className="block text-sm font-medium mb-2">
                  Mentor Phone Number
                </label>
                <input
                  {...register("mentorNumber", { required: true })}
                  type="text"
                  className="border px-4 py-2 rounded w-full"
                />
                {errors.mentorNumber && (
                  <p className="text-red-500 text-sm">
                    Mentor Phone Number is required
                  </p>
                )}
              </div>

              <div className="mb-4">
                <label className="block text-sm font-medium mb-2">
                  Mentor Email
                </label>
                <input
                  {...register("mentorEmail", { required: true })}
                  type="email"
                  className="border px-4 py-2 rounded w-full"
                />
                {errors.mentorEmail && (
                  <p className="text-red-500 text-sm">Mentor Email is required</p>
                )}
              </div>

              <div className="mb-4">
                <label className="block text-sm font-medium mb-2">
                  Academic Guide
                </label>
                <input
                  {...register("academicGuide", { required: true })}
                  type="text"
                  className="border px-4 py-2 rounded w-full"
                />
                {errors.academicGuide && (
                  <p className="text-red-500 text-sm">
                    Academic Guide is required
                  </p>
                )}
              </div>

              <div className="mb-4">
                <label className="block text-sm font-medium mb-2">
                  Tech Stack (comma separated)
                </label>
                <input
                  {...register("techStack", { required: true })}
                  type="text"
                  className="border px-4 py-2 rounded w-full"
                />
                {errors.techStack && (
                  <p className="text-red-500 text-sm">Tech Stack is required</p>
                )}
              </div>

              <div className="mb-4">
                <label className="block text-sm font-medium mb-2">
                  Description
                </label>
                <textarea
                  {...register("description", { required: true })}
                  className="border px-4 py-2 rounded w-full"
                  rows="4"
                />
                {errors.description && (
                  <p className="text-red-500 text-sm">Description is required</p>
                )}
              </div>

              <div className="flex justify-end space-x-2">
                <button
                  type="button"
                  className="bg-gray-300 px-4 py-2 rounded"
                  onClick={() => setShowForm(false)}
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="bg-primary text-white px-4 py-2 rounded"
                >
                  {currentExperience ? "Update" : "Add"}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default ExperienceDetailForm;
