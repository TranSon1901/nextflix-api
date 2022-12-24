import User from "../models/User.js";

const getAllUsers = async (req,res) =>{
    try{
        const user = await User.find()
        res.status(200).json(user)
    } catch (err){

    }
}

export { getAllUsers }