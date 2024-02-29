import User from "../models/user.js";
export const createProfile = async (req, res) => {
    try{

        const {fullName,bio,email, skills }=req.body;
        const certificatesImage=req.files.certificatesImage;
        const profileImg=req.files.profileImage;

        const cloudinaryResponse = await uploadImageToCloudinary(certificatesImage,process.env.FOLDER_NAME);
        const cloudinaryResponse1 = await uploadImageToCloudinary(profileImg,process.env.FOLDER_NAME);
        const profile = new User({
            fullName,
            bio,
            email,
            certificatesImage:cloudinaryResponse.secure_url,
            profileImage:cloudinaryResponse1.secure_url,
            skills
        });
        await profile.save();
        res.status(200).json({ message: "Profile created successfully" });

    }catch(error){

        res.status(400).json({ message: error.message });

    }
}

export const getProfile = async (req, res) => {
    try {
        const profile = await User.find();
        res.status(200).json({ message: "Profile fetched successfully", profile });
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

export const updateProfile = async (req, res) => {
    try {
        const { fullName, bio, email, skills } = req.body;
        const profile = await User.findOne({ _id: req.params.id });
        if (fullName) {
            profile.fullName = fullName;
        }
        if (bio) {
            profile.bio = bio;
        }
        if (email) {
            profile.email = email;
        }
        if (skills) {
            profile.skills = skills;
        }
        await profile.save();
        res.status(200).json({ message: "Profile updated successfully" });
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
}

export const deleteProfile = async (req, res) => {
    try {
        const profile = await User.findOne({ _id: req.params.id });
        await profile.remove();
        res.status(200).json({ message: "Profile deleted successfully" });
    }catch (error) {
        res.status(400).json({ message: error.message });
    }
}
