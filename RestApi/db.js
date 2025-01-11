const { default: mongoose } = require("mongoose");
const mongosse = require("mongoose");

const userSchema = new mongoose.Schema({
    email:{type:String,required:true,unique: true},
    password:{type:String,require:true},
    title:{type:String,require:true}
})

const userModel = mongoose.model("User",userSchema);
 module.exports = userModel;