import Education from '../models/education.js';



export const createEducation = async (req, res) => {
    try {
        const { collageName, degree,fieldofstudy,startYear,endYear } = req.body;
        const education = new Education({
            collageName,
            degree,
            fieldofstudy,
            startYear,
            endYear
        });
        await education.save();
        res.status(200).json({ message: "Education created successfully" });
    }
    catch (error) {
        res.status(400).json({ message: error.message });
    }
}

export const getEducation = async (req, res) => {
    try {
        const education = await education.find();
        res.status(200).json({ message: "Education fetched successfully", education });
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

export const updateEducation = async (req, res) => {
    try {
        const { school, degree, fieldofstudy,startYear,endYear } = req.body;
        const education = await education.findOne({ _id: req.params.id });
        if (school) {
            education.school = school;
        }
        if (degree) {
            education.degree = degree;
        }
        if (fieldofstudy) {
            education.fieldofstudy = fieldofstudy;
        }
        if (startYear) {
            education.startYear = startYear;
        }
        if (endYear) {
            education.endYear = endYear;
        }
      
        await education.save();
        res.status(200).json({ message: "Education updated successfully" });
    }
    catch (error) {
        res.status(400).json({ message: error.message });
    }
};
