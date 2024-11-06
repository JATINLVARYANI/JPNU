import mongoose from 'mongoose';

const expenditureBookSchema = new mongoose.Schema({
    company: { type: mongoose.Schema.Types.ObjectId, ref: 'Company', required: true },
    date: { type: Date, required: true },
    expenditure: { type: Number, required: true },
    descriptionOfExpenditure: { type: String, required: true }
}, { timestamps: true });

export default mongoose.model('ExpenditureBook', expenditureBookSchema);
