import mongoose from 'mongoose';

const formFieldSchema = new mongoose.Schema({
    fieldType: { 
        type: String, 
        enum: ['text', 'textarea', 'number', 'date', 'email', 'select', 'checkbox', 'radio'], 
        required: true 
    },  // Specifies the type of input field
    label: { type: String, required: true },  // Label for the form field
    placeholder: { type: String },  // Placeholder text for input fields
    options: [{ type: String }],  // Options for select, checkbox, or radio fields
    isRequired: { type: Boolean, default: false },  // Specifies if the field is required
    validationPattern: { type: String },  // Regex pattern for field validation (if needed)
    defaultValue: { type: String },  // Default value for the field
    order: { type: Number, required: true }  // Field order for rendering in the form
}, { timestamps: true });

const dynamicFormSchema = new mongoose.Schema({
    formName: { type: String, required: true },  // Name of the form
    description: { type: String },  // Description of the form
    fields: [formFieldSchema],  // Array of form fields
    createdBy: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },  // Reference to the creator of the form
    isActive: { type: Boolean, default: true }  // Whether the form is active or not
}, { timestamps: true });

export default mongoose.model('DynamicForm', dynamicFormSchema); 
