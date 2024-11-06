import React, { useState } from "react";
import { FaEdit, FaTrashAlt } from "react-icons/fa";
import { useForm } from "react-hook-form"; // Import react-hook-form

const ProjectDetailForm = () => {
  const [projects, setProjects] = useState([
    {
      id: 1,
      title: "Ecommerce-FullStack",
      link: "https://github.com/Dboy3/Project",
      dates: "Jun 22, 2024 - Jul 18, 2024",
      teamSize: 1,
      mentor: "self",
      techStack: ["MongoDB", "ReactJs", "Redux", "Express.js", "Javascript"],
      description:
        "A full-stack e-commerce platform with advanced features, including Redux Toolkit for state management.",
    },
    {
      id: 2,
      title: "Hypersepectral Image Classification",
      link: "https://github.com/Dboy3/Project",
      dates: "Jun 22, 2023 - Jul 18, 2023",
      teamSize: 1,
      mentor: "self",
      techStack: ["CNN" , "Image Classification" , "EDA" , "Python" , "Numpy" , "Panda"],
      description:
        "A full-stack e-commerce platform with advanced features, including Redux Toolkit for state management.",
    },
  ]);

  const [showForm, setShowForm] = useState(false);
  const [currentProject, setCurrentProject] = useState(null);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const handleAddProject = () => {
    setCurrentProject(null);
    reset();
    setShowForm(true);
  };

  const handleEditProject = (project) => {
    setCurrentProject(project);
    reset({
      title: project.title,
      link: project.link,
      dates: project.dates,
      teamSize: project.teamSize,
      mentor: project.mentor,
      techStack: project.techStack.join(", "),
      description: project.description,
    });
    setShowForm(true);
  };

  const handleDeleteProject = (id) => {
    setProjects(projects.filter((project) => project.id !== id));
  };

  const onSubmit = (data) => {
    const newProject = {
      id: currentProject ? currentProject.id : Date.now(),
      ...data,
      techStack: data.techStack.split(","),
    };

    if (currentProject) {
      setProjects(
        projects.map((proj) =>
          proj.id === currentProject.id ? newProject : proj
        )
      );
    } else {
      setProjects([...projects, newProject]);
    }

    setShowForm(false);
  };

  return (
    <div className="p-8">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold">Projects</h1>
        <button
          className="bg-primary text-white px-4 py-2 rounded"
          onClick={handleAddProject}
        >
          + Add New
        </button>
      </div>

      {projects.length === 0 ? (
        <p>No projects available. Add one using the button above.</p>
      ) : (
        <div className="grid gap-8">
          {projects.map((project) => (
            <div
              key={project.id}
              className="p-6 border rounded-lg shadow-md bg-white"
            >
              <div className="flex justify-between">
                <div>
                  <h3 className="text-xl font-semibold">{project.title}</h3>
                  <a href={project.link} className="text-blue-500" target="_blank" rel="noreferrer">
                    {project.link}
                  </a>
                  <p className="text-gray-500">{project.dates}</p>
                  <p>
                    <strong>Team Size:</strong> {project.teamSize} |{" "}
                    <strong>Mentor:</strong> {project.mentor}
                  </p>
                  <div className="flex space-x-2 mt-2">
                    {project.techStack.map((tech, idx) => (
                      <span
                        key={idx}
                        className="bg-gray-200 text-sm px-2 py-1 rounded"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  <p className="mt-4">{project.description}</p>
                </div>
                <div className="flex space-x-2">
                  <button
                    onClick={() => handleEditProject(project)}
                    className="text-blue-500"
                  >
                    <FaEdit />
                  </button>
                  <button
                    onClick={() => handleDeleteProject(project.id)}
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
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
          <div className="bg-white p-6 rounded-lg shadow-lg max-w-lg w-full">
            <h2 className="text-2xl mb-4">
              {currentProject ? "Edit Project" : "Add New Project"}
            </h2>
            <form onSubmit={handleSubmit(onSubmit)}>
              <div className="mb-4">
                <label className="block text-sm font-medium mb-2">
                  Project Title
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
                <label className="block text-sm font-medium mb-2">
                  Project Link
                </label>
                <input
                  {...register("link", { required: true })}
                  type="url"
                  className="border px-4 py-2 rounded w-full"
                />
                {errors.link && (
                  <p className="text-red-500 text-sm">Link is required</p>
                )}
              </div>

              <div className="mb-4">
                <label className="block text-sm font-medium mb-2">
                  Dates (e.g., Feb 5, 2023 - Aug 17, 2023)
                </label>
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
                <label className="block text-sm font-medium mb-2">
                  Team Size
                </label>
                <input
                  {...register("teamSize", { required: true })}
                  type="number"
                  className="border px-4 py-2 rounded w-full"
                />
                {errors.teamSize && (
                  <p className="text-red-500 text-sm">Team Size is required</p>
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
                  {currentProject ? "Update" : "Add"}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProjectDetailForm;
