const mongoose = require('mongoose');
mongoose.set('strictQuery',false);
mongoose.connect('mongodb://localhost/likeDB');
const db = mongoose.connection;
db.on("error",()=>{console.log("Errir in connect with DB")});
db.once("open",()=>{
console.log("successfully connected with DB");
})

module.exports=db;
