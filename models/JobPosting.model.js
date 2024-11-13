import mongoose from 'mongoose';

const jobPostingSchema = new mongoose.Schema({
    postId: {
        type: String,
        required: true,
        unique: true
    },
    title: {
        type: String,
        required: true
    },
    companyName: {
        type: String,
        required: true
    },
    role: {
        type: String,
        required: true
    },
    internship: {
        duration: {
            type: String
        },
        stipend: {
            type: Number
        }
    },
    fulltime: {
        ctc: {
            type: Number
        }
    },
    locations: [
        {
            type: String,
            required: true
        }
    ],
    numberOfPositions: {
        type: Number,
        required: true
    },
    requiredSkills: [
        {
            type: String
        }
    ],
    eligibleBranch: [
        {
            type: String
        }
    ],
    backlogsAllowed: {
        type: String,
        enum: ['Yes', 'No'],
        default: 'No'
    },
    startDate: {
        type: Date,
        required: true
    },
    endDate: {
        type: Date,
        required: true
    },
    otherDetails: {
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
        default: Date.now
    },
    status: {
        type: String,
        enum: ['active', 'inactive'],
        default: 'active'
    }
}, { timestamps: true });

const applicationSchema = new mongoose.Schema({
    userId: {
        type: String, // UUID as a string
        required: true
    },
    postId: {
        type: String, // UUID as a string
        required: true
    },
    appliedDate: {
        type: Date,
        default: Date.now
    }
});
export default mongoose.model('JobPosting', jobPostingSchema);
export const Application = mongoose.model('Application', applicationSchema);
