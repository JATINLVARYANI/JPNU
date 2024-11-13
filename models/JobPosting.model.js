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
        set: function (value) {
            // Ensure value is in DD/MM/YYYY format and convert to YYYY-MM-DD
            const [day, month, year] = value.split('/'); // Assuming the input is in DD/MM/YYYY format
            return new Date(`${year}-${month}-${day}`); // MongoDB expects the date in YYYY-MM-DD format
        },
    },
    endDate: {
        type: Date,
        
        set: function (value) {
            // Ensure value is in DD/MM/YYYY format and convert to YYYY-MM-DD
            const [day, month, year] = value.split('/'); // Assuming the input is in DD/MM/YYYY format
            return new Date(`${year}-${month}-${day}`); // MongoDB expects the date in YYYY-MM-DD format
        },
    },
    otherDetails: {
        type: String
    },
    registrationOpenDate: {
        type: Date,
        required: true,
        set: function (value) {
            // Ensure value is in DD/MM/YYYY format and convert to YYYY-MM-DD
            const [day, month, year] = value.split('/'); // Assuming the input is in DD/MM/YYYY format
            return new Date(`${year}-${month}-${day}`); // MongoDB expects the date in YYYY-MM-DD format
        },
    },
    registrationCloseDate: {
        type: Date,
        required: true,
        set: function (value) {
            // Ensure value is in DD/MM/YYYY format and convert to YYYY-MM-DD
            const [day, month, year] = value.split('/'); // Assuming the input is in DD/MM/YYYY format
            return new Date(`${year}-${month}-${day}`); // MongoDB expects the date in YYYY-MM-DD format
        },
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
export const JobPosting = mongoose.model('JobPosting', jobPostingSchema);
export const Application = mongoose.model('Application', applicationSchema);
