import express from "express";
import { createJobPosting, getJobPostings, deleteJobPosting, updateJobPosting } from '../controller/Jobs.controller.js';
import { verifyAdminRole } from '../controller/Jobs.controller.js';

const router = express.Router();

// Route to create a new job posting (Admin only)
// POST /api/job-postings
router.post('/', verifyAdminRole, createJobPosting);

// Route to get all job postings
// GET /api/job-postings
router.get('/', getJobPostings);

// Route to delete a job posting (Admin only)
// DELETE /api/job-postings/:postId
router.delete('/:postId', verifyAdminRole, deleteJobPosting);

// Route to update a job posting (Admin only)
// PUT /api/job-postings/:postId
router.put('/:postId', verifyAdminRole, updateJobPosting);

export default router;
