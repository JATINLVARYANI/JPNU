import React from 'react';
import { useForm } from 'react-hook-form';

function GeneralDetailsForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
    // Handle form submission logic
  };

  return (
    <div className="container mx-auto p-6">
      <h2 className="text-xl font-bold mb-4">General Details Form</h2>
      <form onSubmit={handleSubmit(onSubmit)} className="grid grid-cols-1 gap-4">
        
        {/* Name Fields */}
        <div className="grid grid-cols-3 gap-4">
          <div>
            <label htmlFor="firstName" className="block text-gray-700">
              First Name
            </label>
            <input
              {...register('firstName', { required: 'First Name is required' })}
              id="firstName"
              className="w-full p-2 border rounded"
            />
            {errors.firstName && <p className="text-red-600">{errors.firstName.message}</p>}
          </div>

          <div>
            <label htmlFor="middleName" className="block text-gray-700">
              Middle Name
            </label>
            <input
              {...register('middleName')}
              id="middleName"
              className="w-full p-2 border rounded"
            />
          </div>

          <div>
            <label htmlFor="lastName" className="block text-gray-700">
              Last Name
            </label>
            <input
              {...register('lastName', { required: 'Last Name is required' })}
              id="lastName"
              className="w-full p-2 border rounded"
            />
            {errors.lastName && <p className="text-red-600">{errors.lastName.message}</p>}
          </div>
        </div>

        {/* Roll No */}
        <div>
          <label htmlFor="rollNo" className="block text-gray-700">Roll No</label>
          <input
            {...register('rollNo', { required: 'Roll Number is required' })}
            id="rollNo"
            className="w-full p-2 border rounded"
          />
          {errors.rollNo && <p className="text-red-600">{errors.rollNo.message}</p>}
        </div>

        {/* Course */}
        <div>
          <label htmlFor="course" className="block text-gray-700">Course</label>
          <input
            {...register('course', { required: 'Course is required' })}
            id="course"
            className="w-full p-2 border rounded"
          />
          {errors.course && <p className="text-red-600">{errors.course.message}</p>}
        </div>

        {/* Gender */}
        <div>
          <label className="block text-gray-700">Gender</label>
          <div className="flex space-x-4">
            <label>
              <input
                {...register('gender', { required: 'Gender is required' })}
                type="radio"
                value="Male"
                className="mr-2"
              />
              Male
            </label>
            <label>
              <input
                {...register('gender', { required: 'Gender is required' })}
                type="radio"
                value="Female"
                className="mr-2"
              />
              Female
            </label>
            <label>
              <input
                {...register('gender', { required: 'Gender is required' })}
                type="radio"
                value="Other"
                className="mr-2"
              />
              Other
            </label>
          </div>
          {errors.gender && <p className="text-red-600">{errors.gender.message}</p>}
        </div>

        {/* Date of Birth */}
        <div>
          <label htmlFor="dob" className="block text-gray-700">Date of Birth</label>
          <input
            {...register('dob', { required: 'Date of Birth is required' })}
            type="date"
            id="dob"
            className="w-full p-2 border rounded"
          />
          {errors.dob && <p className="text-red-600">{errors.dob.message}</p>}
        </div>

        {/* Blood Group */}
        <div>
          <label htmlFor="bloodGroup" className="block text-gray-700">Blood Group</label>
          <select
            {...register('bloodGroup', { required: 'Blood Group is required' })}
            id="bloodGroup"
            className="w-full p-2 border rounded"
          >
            <option value="">Select Blood Group</option>
            <option value="A+">A+</option>
            <option value="A-">A-</option>
            <option value="B+">B+</option>
            <option value="B-">B-</option>
            <option value="O+">O+</option>
            <option value="O-">O-</option>
            <option value="AB+">AB+</option>
            <option value="AB-">AB-</option>
          </select>
          {errors.bloodGroup && <p className="text-red-600">{errors.bloodGroup.message}</p>}
        </div>

        {/* Known Languages */}
        <div>
          <label htmlFor="languages" className="block text-gray-700">Known Languages</label>
          <input
            {...register('languages', { required: 'Known Languages are required' })}
            id="languages"
            className="w-full p-2 border rounded"
            placeholder="e.g., English, Hindi"
          />
          {errors.languages && <p className="text-red-600">{errors.languages.message}</p>}
        </div>

        {/* Brief Introduction */}
        <div>
          <label htmlFor="introduction" className="block text-gray-700">Brief Introduction (Max 100 words)</label>
          <textarea
            {...register('introduction', {
              required: 'Introduction is required',
              maxLength: { value: 100, message: 'Max 100 words allowed' },
            })}
            id="introduction"
            className="w-full p-2 border rounded"
          />
          {errors.introduction && <p className="text-red-600">{errors.introduction.message}</p>}
        </div>

        {/* Profile Photo */}
        <div>
          <label htmlFor="profilePhoto" className="block text-gray-700">Profile Photo</label>
          <input
            {...register('profilePhoto', { required: 'Profile photo is required' })}
            type="file"
            id="profilePhoto"
            className="w-full p-2 border rounded"
          />
          {errors.profilePhoto && <p className="text-red-600">{errors.profilePhoto.message}</p>}
        </div>

        {/* Submit Button */}
        <div className="my-6">
          <button type="submit" className="bg-primary-dark text-white px-4 py-2 rounded hover:bg-primary-darker">
            Submit
          </button>
        </div>
      </form>
    </div>
  );
}

export default GeneralDetailsForm;
