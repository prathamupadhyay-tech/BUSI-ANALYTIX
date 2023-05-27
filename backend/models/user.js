import mongoose from 'mongoose'
import bcrypt from 'bcrypt'
const userSchema = new mongoose.Schema({
    firstName :{
        type:String,
        required:true,
        max:20,
        trim:true
    },
    lastName:{
        type:String,
        required:true,
        max:20,
        trim:true
    },
    email:{
      type:String,
      required:true,
      trim:true,
      lowercase:true
    },
    hash_password:{
      type:String,
      required:true
    },
    role:{
      type:String,
      enum:["user","admin"],
      default:"user"
    },
   
},{timestamps:true});

userSchema.virtual("fullName")
.get(function () {return `${this.firstName} ${this.lastName}`});

//Create Hash For The Password On Receiving And Store it in Database

// userSchema.virtual("password")
// .set(function(){
//     bcrypt.hash(password , 10 , function (err , hash){
//         this.hash_password = hash;
//     }); 
// })

//Verify Password
userSchema.methods = {
    authenticate:async function (password){
        return await bcrypt.compare(password, this.hash_password);
    }
}

export default mongoose.model("User", userSchema);