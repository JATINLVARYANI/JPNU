import React, { useState } from "react";
import { useForm, Controller } from "react-hook-form";
import { FaEye, FaTrashAlt, FaUpload } from "react-icons/fa"; // Import icons

const AcademicDetailsForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    control,
    setValue,
  } = useForm();

  const [uploadedFiles, setUploadedFiles] = useState({});

  const onSubmit = (data) => {
    console.log("Form Data:", data);
  };

  const handleFileChange = (e, semester) => {
    const file = e.target.files[0];
    if (file && (file.type === "application/pdf" || file.type === "image/jpeg")) {
      const updatedFiles = { ...uploadedFiles, [semester]: file };
      setUploadedFiles(updatedFiles);
      setValue(`marksheet_${semester}`, file); // Update form state with file
    } else {
      alert("Please upload a valid PDF or JPG file.");
    }
  };

  const handleFileDelete = (semester) => {
    const updatedFiles = { ...uploadedFiles };
    delete updatedFiles[semester];
    setUploadedFiles(updatedFiles);
    setValue(`marksheet_${semester}`, null); // Remove from form state
  };

  const handleFileView = (semester) => {
    const file = uploadedFiles[semester];
    if (file) {
      const fileURL = URL.createObjectURL(file);
      window.open(fileURL);
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="p-4">
      <div className="flex flex-col max-h-screen overflow-y-auto">
        <h2 className="text-xl font-bold mb-4">B.Tech - Computer Science and Engineering 2021 - 2025 Academics</h2>
        
        {/* Map through each semester */}
        {["I", "II", "III", "IV", "V", "VI", "VII", "VIII"].map((sem, index) => (
          <div key={sem} className="grid grid-cols-6 gap-4 mb-4">
            <div>
              <label className="block font-medium">Year {Math.floor(index / 2) + 1}</label>
            </div>
            <div>
              <label className="block font-medium">Semester {sem}</label>
            </div>
            <div>
              <Controller
                name={`cgpa_${sem}`}
                control={control}
                defaultValue=""
                render={({ field }) => (
                  <input
                    {...field}
                    type="number"
                    step="0.01"
                    min="0"
                    max="10"
                    placeholder="CGPA"
                    className="border rounded p-2 w-full"
                  />
                )}
              />
            </div>
            <div>
              <input
                {...register(`closed_backlogs_${sem}`)}
                type="number"
                placeholder="Closed Backlogs"
                className="border rounded p-2 w-full"
                min="0"
              />
            </div>
            <div>
              <input
                {...register(`live_backlogs_${sem}`)}
                type="number"
                placeholder="Live Backlogs"
                className="border rounded p-2 w-full"
                min="0"
              />
            </div>
            <div className="flex space-x-2 items-center">
              <input
                type="file"
                accept=".pdf,.jpg"
                className="hidden"
                id={`marksheet_${sem}`}
                onChange={(e) => handleFileChange(e, sem)}
              />
              <label htmlFor={`marksheet_${sem}`} className="cursor-pointer text-primary-dark">
                <FaUpload size={20} />
              </label>
              {uploadedFiles[sem] && (
                <>
                  <button type="button" onClick={() => handleFileView(sem)} className="text-primary-darker">
                    <FaEye size={20} />
                  </button>
                  <button type="button" onClick={() => handleFileDelete(sem)} className="text-red-500">
                    <FaTrashAlt size={20} />
                  </button>
                </>
              )}
            </div>
          </div>
        ))}

        <div className="flex justify-end mt-4">
          <button type="submit" className="px-4 py-2 bg-primary-dark text-white rounded-lg">
            Submit
          </button>
        </div>
      </div>
    </form>
  );
};

export default AcademicDetailsForm;
