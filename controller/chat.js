const {Op}=require("sequelize");
const User=require("../models/User");
const Chat=require("../models/Chat");

exports.getAllContacts=async (req,res)=>{
    try{
        const user=await User.findAll({where:{id:{[Op.ne]:+req.user.id}},attributes:["id","name"]});
        res.status(200).json({success:true,user});
    }
    catch(err){
        res.status(500).json({success:false,message:Error});
    }
}

// try{

// }
// catch(err){
//     res.status(500).json({success:false,message:Error});
// }