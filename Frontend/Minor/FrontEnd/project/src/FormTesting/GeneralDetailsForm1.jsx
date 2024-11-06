import React, { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import { fetchFormFields } from './formSlice';

function GeneralDetailsForm1() {
  const dispatch = useDispatch();
  const { fields, status, error } = useSelector((state) => state.form);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  useEffect(() => {
    if (status === 'idle') {
      dispatch(fetchFormFields());
    }
  }, [status, dispatch]);

  const onSubmit = (data) => {
    console.log(data);
    // Handle form submission logic, e.g., sending data to backend
  };

  if (status === 'loading') {
    return <p>Loading...</p>;
  }

  if (status === 'failed') {
    return <p>Error: {error}</p>;
  }

  return (
    <div className="container mx-auto p-6">
      <h2 className="text-xl font-bold mb-4">General Details Form</h2>
      <form onSubmit={handleSubmit(onSubmit)} className="grid grid-cols-1 gap-4">
        {fields.map((field) => (
          <div key={field.id}>
            <label htmlFor={field.id} className="block text-gray-700">{field.label}</label>
            {field.type === 'input' && (
              <input
                {...register(field.name, { required: field.required })}
                id={field.id}
                className="w-full p-2 border rounded"
              />
            )}
            {field.type === 'select' && (
              <select
                {...register(field.name, { required: field.required })}
                id={field.id}
                className="w-full p-2 border rounded"
              >
                <option value="">Select {field.label}</option>
                {field.options.map((option) => (
                  <option key={option.value} value={option.value}>
                    {option.label}
                  </option>
                ))}
              </select>
            )}
            {field.type === 'textarea' && (
              <textarea
                {...register(field.name, { required: field.required })}
                id={field.id}
                className="w-full p-2 border rounded"
              />
            )}
            {errors[field.name] && <p className="text-red-600">{errors[field.name].message}</p>}
          </div>
        ))}

        <div className="my-6">
          <button type="submit" className="bg-primary-dark text-white px-4 py-2 rounded hover:bg-primary-darker">
            Submit
          </button>
        </div>
      </form>
    </div>
  );
}

export default GeneralDetailsForm1;
