import Experience from '../models/experience.js';

export const createExperience = async (req, res) => {
    try {
        const { companyName, jobRole,jobDescription , from , to } = req.body;
        const experience = new Experience({
            companyName,
            jobRole,
            jobDescription,
            from,
            to
        });
        await experience.save();
        res.status(200).json({ message: "Experience created successfully" });
    }
    catch (error) {
        res.status(400).json({ message: error.message });
    }
};

export const getExperience = async (req, res) => {
    try {
        const experience = await experience.find();
        res.status(200).json({ message: "Experience fetched successfully", experience });
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

export const updateExperience = async (req, res) => {
    try {
        const { companyName, jobRole, jobDescription, from, to } = req.body;
        const experience = await experience.findOne({ _id: req.params.id });
        if (companyName) {
            experience.companyName = companyName;
        }
        if (jobRole) {
            experience.jobRole = jobRole;
        }
        if (jobDescription) {
            experience.jobDescription = jobDescription;
        }
        if (from) {
            experience.from = from;
        }
        if (to) {
            experience.to = to;
        }
        await experience.save();
        res.status(200).json({ message: "Experience updated successfully" });
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
}