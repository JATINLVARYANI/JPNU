import mongoose from 'mongoose';
import JobPosting from '../models/JobPosting.model.js'; // Assuming you have the model separated
import jwt from 'jsonwebtoken';


// Middleware to check if the user is an admin
export const verifyAdminRole = (req, res, next) => {
    try {
        const token = req.cookies.token; // Get JWT token from cookies
        if (!token) {
            return res.status(401).json({ message: "Access denied. No token provided." });
        }

        // Verify the token
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        req.user = decoded;

        // Check if the user role is admin
        if (req.user.role !== 'admin') {
            return res.status(403).json({ message: "Access denied. You must be an admin to perform this action." });
        }

        next(); // Proceed to the next middleware/route handler
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Failed to authenticate token." });
    }
};

// Controller to create a new job posting (Admin only)
export const createJobPosting = async (req, res) => {
    try {
        // Check if all required fields are present in the body
        const {
            postId, jobDriveName, companyName, roles, employmentType, ctc, stipend,
            eligibleCourses, requiredCgpa, requiredBacklogs, location, jobDescription,
            otherDetails, otherBenefits, schedule, registrationOpenDate, registrationCloseDate,
            postDate, status, numberOfPositions, requiredSkills, appliedStudents
        } = req.body;

        // Create new Job Posting document
        const newJobPosting = new JobPosting({
            postId, jobDriveName, companyName, roles, employmentType, ctc, stipend,
            eligibleCourses, requiredCgpa, requiredBacklogs, location, jobDescription,
            otherDetails, otherBenefits, schedule, registrationOpenDate, registrationCloseDate,
            postDate, status, numberOfPositions, requiredSkills, appliedStudents
        });

        await newJobPosting.save();
        res.status(201).json({ message: "Job posting created successfully", newJobPosting });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Error creating job posting", error });
    }
};

// Controller to get all job postings (No role restriction)
export const getJobPostings = async (req, res) => {
    try {
        // Fetch all job postings
        const jobPostings = await JobPosting.find({})
            .populate('companyName') // Populates company details
            .exec();

        // Check if there are any job postings
        if (!jobPostings || jobPostings.length === 0) {
            return res.status(404).json({ message: "No job postings found" });
        }

        // Return the job postings
        res.status(200).json(jobPostings);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Error retrieving job postings", error });
    }
};

// Controller to delete a job posting (Admin only)
export const deleteJobPosting = async (req, res) => {
    try {
        const { postId } = req.params;

        // Check if the job posting exists
        const jobPosting = await JobPosting.findOne({ postId });
        if (!jobPosting) {
            return res.status(404).json({ message: "Job posting not found" });
        }

        // Delete the job posting
        await jobPosting.remove();
        res.status(200).json({ message: "Job posting deleted successfully" });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Error deleting job posting", error });
    }
};

// Controller to update a job posting (Admin only)
export const updateJobPosting = async (req, res) => {
    try {
        const { postId } = req.params;
        const updateData = req.body;

        // Check if the job posting exists
        const jobPosting = await JobPosting.findOne({ postId });
        if (!jobPosting) {
            return res.status(404).json({ message: "Job posting not found" });
        }

        // Update job posting details
        await JobPosting.updateOne({ postId }, updateData);
        res.status(200).json({ message: "Job posting updated successfully" });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Error updating job posting", error });
    }
};