const mongoose= require('mongoose');


const UserSchema= mongoose.Schema({
    name:{
        type:String,

    },
    lastname:{
        type:String
    },
    email:{
        type:String
    },
    password:{
        type:String
    }

})
const User= mongoose.model('User',UserSchema)
module.exports=User

