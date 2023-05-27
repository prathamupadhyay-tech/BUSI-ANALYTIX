import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'
import Shop from '../models/shops.js';
import Product from "../models/products.js"
export const addShop = async (req,res,next) => {
    const {name , id} = req.body;

    try{
        const shopExists = await Shop.find({shopName : name});
        console.log(shopExists);
        if(shopExists.length){
            return res.status(404).json({message:"Shop Already Exists"});
        }
        else{
            const newShop = new Shop({shopName:name ,shopOwner : id});
            await newShop.save();
            return res.status(200).json(newShop);
        }
    }catch(err){
        console.log(err);
        return res.status(404).json({message:"Something Went Wrong"});
    }
}


export const allShops = async(req,res,next) => {
    const {id} = req.body;
    console.log(id);
     try{
        const allShops =  await Shop.find({shopOwner : id});

        return res.status(200).json({allShops});
     }
     catch{
        return res.status(404).json({message:"Something Went Wrong"});
     }
}


export const deleteShop = async(req,res,next) => {
    const id  = req.params.shopId
    
     try{
        await Shop.findOneAndDelete({_id : id});
        await Product.deleteMany({shop : id});
        return res.status(200).json({message:"Shop Removed"});
     }
     catch{
        return res.status(404).json({message:"Something Went Wrong"});
     }
}