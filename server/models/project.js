import mongoose from'mongoose';

const projectSchema= new mongoose.Schema({
 projectName:{
    type: String,
    required: true
 },
 projectImage:{
    type: String,
    
 },
 projectDescription:{
    type: String,
    required: true
 },
 projectLink:{
    type: String
 }


})

const Project= mongoose.model('Project',projectSchema);
export default Project;