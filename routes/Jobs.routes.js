import express from "express";
import { createJobPosting, getJobPostings, deleteJobPosting, updateJobPosting,addPlacedStudent,
    getPlacedStudents,
    deletePlacedStudent,
    updatePlacedStudent } from '../controller/Jobs.controller.js';
    import {
        addExpenditure,
        updateExpenditure,
        getAllExpenditures,
        getFilteredExpenditures
    } from '../controller/expenditureBook.controller.js';
import { verifyAdminRole } from '../controller/Jobs.controller.js';
import { verifyRole } from '../middleware/authMiddleware.js';

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

router.post('/placed-students/add', addPlacedStudent);
router.get('/placed-students', getPlacedStudents);
router.delete('/placed-students/:id', deletePlacedStudent);
router.put('/placed-students/:id', updatePlacedStudent);
// Routes for SPC and Admin
router.post('/expenditure/add', verifyRole(['SPC', 'Admin']), addExpenditure);
router.put('/expenditure/:id', verifyRole(['SPC', 'Admin']), updateExpenditure);

// Routes for Admin only
router.get('/expenditure', verifyRole(['admin']), getAllExpenditures);
router.get('/expenditure/filter', verifyRole(['admin']), getFilteredExpenditures);

export default router;
