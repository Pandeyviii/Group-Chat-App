const express=require("express");
const path=require("path");
const dotenv=require("dotenv");
dotenv.config();
const bodyparser=require("body-parser");
const sequelize=require("./util/database");
var cors=require("cors");

const app=express();
app.use(bodyparser.json({extended:false}));
app.use(cors());

//routes
const userRoutes=require("./routes/user");
const chatRoutes=require("./routes/chat");

//models
const User=require("./models/User");
const Chat=require("./models/Chat");

//routerUse
app.use("/user",userRoutes);
app.use("/chat",chatRoutes);

//join
User.hasMany(Chat);
Chat.belongsTo(User);

sequelize
.sync()
.then(result => {
  console.log('result');
  app.listen(3000);
})
.catch(err => {
  console.log(err);
});