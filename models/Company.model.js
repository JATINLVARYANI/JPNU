import mongoose from 'mongoose';

const companySchema = new mongoose.Schema({
    companyName: { type: String, required: true, unique: true },
    companyEmail: { type: String, required: true, unique: true },
    website: { type: String },
    industry: { type: String, required: true },
    about: { type: String },
    address: {
        state: { type: String, required: true },
        city: { type: String, required: true },
        address: { type: String, required: true },
        zipcode: { type: String, required: true }
    },
    contactNumber: { type: String, required: true },  // Suggested field for contact
}, { timestamps: true });

export default mongoose.model('Company', companySchema);
