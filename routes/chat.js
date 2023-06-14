const express=require("express");
const router=express.Router();
const auth=require("../middleware/auth");
const chatController=require("../controller/chat");

router.get("/allcontacts",auth,chatController.getAllContacts);

module.exports=router;