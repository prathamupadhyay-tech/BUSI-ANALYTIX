import mongoose from 'mongoose'

const shopSchema = new mongoose.Schema({
    shopName :{
        type:String,
        required:true, 
        trim:true
    },
    shopOwner :{
        type:mongoose.Schema.Types.ObjectId,
        ref:"User",
        required:true
    },
    visitorCount : {
        type:Number,
        default :0
    }

},{timestamps:true});

export default mongoose.model("Shop", shopSchema);