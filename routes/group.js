const express=require("express");
const router=express.Router();
const auth=require("../middleware/auth");
const groupController=require('../controller/group');

router.post('/group/creategroup',auth,groupController.postCreateGroup);
router.get('/group/allgroups',auth,groupController.allGroups);
router.get('/group/allusers',auth,groupController.allUsers);
router.post('/group/adduser',auth,groupController.addUser);
router.post('/group/deleteuser',auth,groupController.deleteUser);

module.exports=router;