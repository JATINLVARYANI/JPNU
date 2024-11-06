import mongoose from 'mongoose';

const refreshmentBudgetAllocationSchema = new mongoose.Schema({
    budget: { type: Number, required: true },
    company: { type: mongoose.Schema.Types.ObjectId, ref: 'Company', required: true },
    date: { type: Date, required: true },
    numberOfCompanyPeople: { type: Number, required: true }
}, { timestamps: true });

export default mongoose.model('RefreshmentBudgetAllocation', refreshmentBudgetAllocationSchema);
