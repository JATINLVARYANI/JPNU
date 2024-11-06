import express from "express";
import { createUser, loginUser,deleteUser } from '../controller/user.controller.js';
import { createGeneralDetails, updateGeneralDetails, getGeneralDetails } from '../controller/Profile.controller.js';

const router = express.Router();

// Route for user registration
// POST /api/users/register
router.post('/register', createUser);

// Route for user login
// POST /api/users/login
router.post('/login', loginUser);
// Route to create general details
router.delete("/delete",deleteUser);
router.post('/general-details', createGeneralDetails);

// Route to update general details
router.put('/general-details', updateGeneralDetails);

// Route to retrieve general details
router.get('/general-details', getGeneralDetails);
export default router;
