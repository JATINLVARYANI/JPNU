import mongoose from 'mongoose';

// Define the schema for placed students
const PlacedStudentsSchema = new mongoose.Schema({
    userID: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    year: {
        type: Number,
        default: new Date().getFullYear()
    },
    companyPlacedAt: {
        type: String,
        required: true
    },
    CTC: {
        type: Number,
        required: true
    }
}, {
    timestamps: true
});

export default mongoose.model('PlacedStudents', PlacedStudentsSchema);
