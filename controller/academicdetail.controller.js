import AcademicDetails from '../models/Academics.model.js';
import User from '../models/user.model.js';

// Controller to add academic details
export const addAcademicDetails = async (req, res) => {
    try {
        const { rollNo,email,isDiplomaToDegree, semester1, semester2, semester3, semester4, semester5, semester6, semester7, semester8 } = req.body;

        // Check if rollNo and isDiplomaToDegree are provided
        if (!rollNo || !email || isDiplomaToDegree === undefined) {
            return res.status(400).json({ error: "Roll No., Email, and isDiplomaToDegree fields must be provided." });
        }

        // Check for unique roll number and email
        const existingRecord = await AcademicDetails.findOne({ $or: [{ rollNo }, { email }] });
        if (existingRecord) {
            return res.status(409).json({ error: "Academic details for this roll number or email already exist." });
        }

        // Validate CGPA and backlog details for semesters 3 to 6 (required)
        const requiredSemesters = [semester3, semester4, semester5, semester6];
        for (let i = 0; i < requiredSemesters.length; i++) {
            const sem = requiredSemesters[i];
            if (!sem || sem.cgpa === undefined || sem.liveBacklogs === undefined || sem.closedBacklogs === undefined) {
                return res.status(400).json({ error: `All fields for semester ${i + 3} are required.` });
            }
        }

        // If the student is not a Diploma to Degree student, validate semesters 1 and 2
        if (!isDiplomaToDegree) {
            if (!semester1 || semester1.cgpa === undefined || semester1.liveBacklogs === undefined || semester1.closedBacklogs === undefined) {
                return res.status(400).json({ error: "All fields for semester 1 are required for non-Diploma to Degree students." });
            }
            if (!semester2 || semester2.cgpa === undefined || semester2.liveBacklogs === undefined || semester2.closedBacklogs === undefined) {
                return res.status(400).json({ error: "All fields for semester 2 are required for non-Diploma to Degree students." });
            }
        }

        // Create and save the academic details
        const newAcademicDetails = new AcademicDetails({
            rollNo,
            email,
            isDiplomaToDegree,
            semester1,
            semester2,
            semester3,
            semester4,
            semester5,
            semester6,
            semester7,
            semester8
        });

        await newAcademicDetails.save();

        // Return success response
        res.status(201).json({ message: "Academic details added successfully." });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: "An error occurred while adding academic details." });
    }
};

// module.exports = { addAcademicDetails };



// Controller to fetch academic details based on user ID
export const getAcademicDetailsByUserId = async (req, res) => {
    try {
        const { mail } = req.body;

        console.log(mail);
        
        // return res.status(200).json({
        //     message: "Academic details fetched successfully.",
        //     data: email
        // });

        // Fetch the user based on userId

        let user = await User.findOne({email : mail});

        // If the user is not found, return an error
        if (!user) {
            return res.status(404).json({ error: "User not found." ,user : {user}});
        }

        // Extract the email from the user document
        // const { email } = user;

        // Fetch the academic details based on the email
        let academicDetails = await AcademicDetails.findOne({email : mail});

        // If academic details are not found, return an error
        if (!academicDetails) {
            return res.status(404).json({ error: "Academic details not found for this user." ,mail : {user}});
        }

        // Return the academic details
        res.status(200).json(academicDetails);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: "An error occurred while fetching academic details." });
    }
};
