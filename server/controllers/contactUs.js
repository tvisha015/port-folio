import ContactUs from '../models/contactUs.js';


export const contactUs = async (req, res) => {
    try {
        const {FrstName, LastName, Email, Message} = req.body;
        const contactUs = new ContactUs({
            FrstName,
            LastName,
            Email,
            Message
        });
        await contactUs.save();
        res.status(200).json({ message: "Contact Us created successfully" });
    }catch(error){
        res.status(400).json({ message: error.message });
    }
}
