import mongoose from'mongoose';

const contactUsSchema = new mongoose.Schema({
    FrstName: {
        type: String,
        required: true
    },
    LastName: {
        type: String,
        required: true
    },
    Email: {
        type: String,
        required: true
    },
    Message: {
        type: String,
        required: true
    }
},{timestamps: true});


const ContactUs = mongoose.models.contactUs || mongoose.model("contactUs", contactUsSchema);
export default ContactUs;