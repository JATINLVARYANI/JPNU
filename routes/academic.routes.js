import express from "express";
import { addAcademicDetails,getAcademicDetailsByUserId } from '../controller/academicdetail.controller.js';



const router = express.Router();

// Route to add academic details
// POST /api/academics/add
router.post('/add', addAcademicDetails);
router.get('/getAcademics', getAcademicDetailsByUserId);

export default router;
