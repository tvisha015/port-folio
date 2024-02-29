import Project from "../models/project.js";
import {uploadImageToCloudinary} from "../utils/imageUploader.js";


export const createProject = async (req, res) => {
    try {

        const { projectName, projectDescription, projectLink } = req.body;
        const projectImg=req.files.projectImage;
        const cloudinaryResponse = await uploadImageToCloudinary(projectImg,process.env.FOLDER_NAME);

        const project = new Project({
            projectName,
            projectDescription,
            projectLink,
            projectImage:cloudinaryResponse.secure_url
        });
        await project.save();
        res.status(200).json({ message: "Project created successfully" });

        
    } catch (error) {
        res.status(400).json({ message: error.message });
        
    }


}

export const getProject = async (req, res) => {
    try {
        const project = await Project.find();
        res.status(200).json({ message: "Project fetched successfully", project });
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

export const updateProject = async (req, res) => {
    try {
        
        const { projectName, projectDescription, projectLink } = req.body;
        const project = await Project.findOne({ _id: req.params.id });
        if (projectName) {
            project.projectName = projectName;
        }
        if (projectDescription) {
            project.projectDescription = projectDescription;
        }
        if (projectLink) {
            project.projectLink = projectLink;
        }
        await project.save();
        res.status(200).json({ message: "Project updated successfully" });

    } catch (error) {
        
    }
}


export const deleteProject = async (req, res) => {
    try {
        const project = await Project.findOne({ _id: req.params.id });
        await project.remove();
        res.status(200).json({ message: "Project deleted successfully" });
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};