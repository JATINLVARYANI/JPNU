import mongoose from 'mongoose';

const jobPostingSchema = new mongoose.Schema({
    postId: {
        type: String,
        required: true,
        unique: true
    },
    jobDriveName: {
        type: String,
        required: true
    },
    companyName: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Company',
        required: true
    },
    roles: [
        {
            type: String,
            required: true
        }
    ],
    employmentType: {
        type: String,
        enum: ['internship', 'fulltime'],
        required: true
    },
    ctc: [
        {
            role: String,
            amount: Number
        }
    ],
    stipend: [
        {
            role: String,
            amount: Number
        }
    ],
    eligibleCourses: [
        {
            role: String,
            course: String
        }
    ],
    requiredCgpa: [
        {
            role: String,
            cgpa: Number
        }
    ],
    requiredBacklogs: [
        {
            role: String,
            backlogsAllowed: String
        }
    ],
    location: [
        {
            type: String,
            required: true
        }
    ],
    jobDescription: {
        type: String // Job description now stored as plain text
    },
    otherDetails: {
        type: String
    },
    otherBenefits: {
        type: String
    },
    schedule: {
        type: String
    },
    registrationOpenDate: {
        type: Date,
        required: true
    },
    registrationCloseDate: {
        type: Date,
        required: true
    },
    postDate: {
        type: Date,
        required: true
    },
    status: {
        type: String,
        enum: ['active', 'inactive'],
        default: 'active'
    },
    numberOfPositions: {
        type: Number
    },
    requiredSkills: [
        {
            type: String
        }
    ],
    appliedStudents: [
        {
            type: String
        }
    ]
});

export default mongoose.model('JobPosting', jobPostingSchema);
