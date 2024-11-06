const express = require('express');
const cors = require('cors');

const app = express();
const PORT = 5050;

// Middleware
app.use(cors());
app.use(express.json());

// Sample form fields data (this can be replaced with a database call)
let formFields = [
  {
    id: 'firstName',
    name: 'firstName',
    label: 'First Name',
    type: 'input',
    required: true,
  },
  {
    id: 'middleName',
    name: 'middleName',
    label: 'Middle Name',
    type: 'input',
    required: false,
  },
  {
    id: 'lastName',
    name: 'lastName',
    label: 'Last Name',
    type: 'input',
    required: true,
  },
  {
    id: 'rollNo',
    name: 'rollNo',
    label: 'Roll No',
    type: 'input',
    required: true,
  },
  // {
  //   id: 'course',
  //   name: 'course',
  //   label: 'Course',
  //   type: 'input',
  //   required: true,
  // },
  // {
  //   id: 'gender',
  //   name: 'gender',
  //   label: 'Gender',
  //   type: 'select',
  //   required: true,
  //   options: [
  //     { value: 'Male', label: 'Male' },
  //     { value: 'Female', label: 'Female' },
  //     { value: 'Other', label: 'Other' },
  //   ],
  // },
  // {
  //   id: 'dob',
  //   name: 'dob',
  //   label: 'Date of Birth',
  //   type: 'input',
  //   required: true,
  // },
  {
    id: 'bloodGroup',
    name: 'bloodGroup',
    label: 'Blood Group',
    type: 'select',
    required: true,
    options: [
      { value: 'A+', label: 'A+' },
      { value: 'A-', label: 'A-' },
      { value: 'B+', label: 'B+' },
      { value: 'B-', label: 'B-' },
      { value: 'O+', label: 'O+' },
      { value: 'O-', label: 'O-' },
      { value: 'AB+', label: 'AB+' },
      { value: 'AB-', label: 'AB-' },
    ],
  },
  {
    id: 'languages',
    name: 'languages',
    label: 'Known Languages',
    type: 'input',
    required: true,
  },
  {
    id: 'introduction',
    name: 'introduction',
    label: 'Brief Introduction (Max 100 words)',
    type: 'textarea',
    required: true,
  },
  {
    id: 'profilePhoto',
    name: 'profilePhoto',
    label: 'Profile Photo',
    type: 'input',
    required: true,
  },
];

// Endpoint to fetch form fields
app.get('/api/formFields', (req, res) => {
  res.json(formFields);
});

// Endpoint to handle form submission (example)
app.post('/api/submitForm', (req, res) => {
  const formData = req.body;
  console.log('Received form data:', formData);
  // Here you can add logic to save formData to a database
  res.status(200).send({ message: 'Form submitted successfully!' });
});

// Start server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
