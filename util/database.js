const Sequelize=require("sequelize");

const sequelize=new Sequelize("group_chat_app","root","Admin123",{
    dialect:"mysql",
    host:"localhost"
})

module.exports=sequelize;