import mongoose from'mongoose';


const workExperienceSchema = new mongoose.Schema({
    companyName: {
        type: String,
        required: true
    },
    jobRole: {
        type: String,
        required: true
    },
    jobDescription: {
        type: String,
        required: true
    },
   from:{
    type:Number
   },
   to:{
    type:Number
   }
    
})

const Experience = mongoose.models.education || mongoose.model("experience", workExperienceSchema);
export default Experience;

