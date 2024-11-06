import mongoose from 'mongoose';

const restaurantSchema = new mongoose.Schema({
        name: { type: String, required: true },
        description: { type: String },
        price: { type: Number, required: true },
        isAvailable: { type: Boolean, default: true }
});

export default mongoose.model('AddMenuItem', restaurantSchema);
