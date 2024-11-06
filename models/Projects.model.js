import mongoose from 'mongoose';

const projectSchema = new mongoose.Schema({
    userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    title: { type: String, required: true },
    projectLink: { type: String },
    startDate: { type: Date, required: true },
    endDate: { type: Date },
    teamSize: { type: Number, required: true },
    mentorName: { type: String },
    keySkills: [{ type: String }],  // Multivalued column for key skills
    description: { type: String, required: true }
}, { timestamps: true });

export default mongoose.model('Project', projectSchema);
