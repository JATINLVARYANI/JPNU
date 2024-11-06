import mongoose from 'mongoose';
const academicDetailsSchema = new mongoose.Schema({
    rollNo: { type: String, required: true, unique: true },
    email: {
        type: String,
        required: true,
        unique: true
    },
    isDiplomaToDegree: { type: Boolean, required: true },  // Indicates if the student is a Diploma to Degree student
    semester1: {
        cgpa: { type: Number },
        liveBacklogs: { type: Number, default: 0 },
        closedBacklogs: { type: Number, default: 0 }
    },
    semester2: {
        cgpa: { type: Number },
        liveBacklogs: { type: Number, default: 0 },
        closedBacklogs: { type: Number, default: 0 }
    },
    semester3: {
        cgpa: { type: Number, required: true },
        liveBacklogs: { type: Number, required: true },
        closedBacklogs: { type: Number, required: true }
    },
    semester4: {
        cgpa: { type: Number, required: true },
        liveBacklogs: { type: Number, required: true },
        closedBacklogs: { type: Number, required: true }
    },
    semester5: {
        cgpa: { type: Number, required: true },
        liveBacklogs: { type: Number, required: true },
        closedBacklogs: { type: Number, required: true }
    },
    semester6: {
        cgpa: { type: Number, required: true },
        liveBacklogs: { type: Number, required: true },
        closedBacklogs: { type: Number, required: true }
    },
    semester7: {
        cgpa: { type: Number },
        liveBacklogs: { type: Number, default: 0 },
        closedBacklogs: { type: Number, default: 0 }
    },
    semester8: {
        cgpa: { type: Number },
        liveBacklogs: { type: Number, default: 0 },
        closedBacklogs: { type: Number, default: 0 }
    },
});


export default mongoose.model('AcademicDetails', academicDetailsSchema);
