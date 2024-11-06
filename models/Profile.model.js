import mongoose from 'mongoose';

const generalDetailsSchema = new mongoose.Schema({
    userId: { type: String, required: true }, // Reference to the User model
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    middleName: { type: String },
    rollNo: { type: String, required: true },
    course: { type: String, required: true },
    gender: { type: String, enum: ['Male', 'Female', 'Other'], required: true },
    dob: { type: Date, required: true },
    bloodGroup: { type: String, required: true, enum: ['A+', 'A-', 'B+', 'B-', 'O+', 'O-', 'AB+', 'AB-'] },
    skills: { type: [String], required: false }, // Array of strings for skills
    languages: { type: [String], required: false }, // Array of strings for known languages
    contact: {
        type: String,
        required: true,
        match: /^[0-9]{10}$/, // Regex to ensure the contact number is a 10-digit number
    },
    introduction: {
        type: String,
        required: true,
        maxlength: 100, // Maximum length of 100 characters
    },
}); // Automatically adds createdAt and updatedAt timestamps

export default mongoose.model('GeneralDetails', generalDetailsSchema);
