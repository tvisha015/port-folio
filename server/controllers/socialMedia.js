import SocialMedia from "../models/socialMedia.js";



export const createSocialMedia = async (req, res) => {
    try {
        const { linkedIn, twitter, github, instagram } = req.body;
        const socialMedia = new SocialMedia({
            linkedIn,
            twitter,
            github,
            instagram
        });
        await socialMedia.save();
        res.status(200).json({ message: "Social Media created successfully" });

    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

export const getSocialMedia = async (req, res) => {
    try {
        const socialMedia = await SocialMedia.find();
        res.status(200).json({ message: "Social Media fetched successfully", socialMedia });
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

export const updateSocialMedia=async(req,res)=>{

    try {
        const { linkedIn, twitter, github, instagram } = req.body;
        const socialMedia = await SocialMedia.findOne({_id:req.params.id});
        if(linkedIn){
            socialMedia.linkedIn=linkedIn;
        }
        if(twitter){
            socialMedia.twitter=twitter;
        }
        if(github){
            socialMedia.github=github;
        }
        if(instagram){
            socialMedia.instagram=instagram;
        }
        await socialMedia.save();
        res.status(200).json({ message: "Social Media updated successfully" });
    } catch (error) {
        
    }

}
    

