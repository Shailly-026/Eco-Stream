const {default:mongoose} = require ('mongoose');
const {Schema , model }= require ("../connection");

const userSchema= new Schema({
    name: String,
    email:{type:String, unique:true },
    password:{type:String, unique:true },
    createdAt: {type: Date, default: Date.now}

})

model.exports = model('user' , userSchema);