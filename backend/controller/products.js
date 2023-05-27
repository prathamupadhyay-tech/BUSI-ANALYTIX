import express from "express";
import Product from '../models/products.js'
import Shop from "../models/shops.js";
import mongoose from "mongoose";
export const getProducts = async (req, res, next) => {
    const shopId = req.params.shopId;
    try {
        const allProducts = await Product.find({ shop: shopId })
        return res.status(200).json(allProducts);
    } catch (err) {
        return res.status(404).json({ message: "Something Went Wrong Please Try Again" })
    }

}

export const addProduct = async (req, res, next) => {
    const { name, url, threshold } = req.body;
    const shop = req.params.shopId

    try {
        let productExist = await Product.find({ productName: name })
        if (productExist.length) return res.status(404).json({ message: "Product Already exists" });
        else {
            const newProduct = new Product({ productName: name, shop, url, threshold })
            await newProduct.save();
            return res.status(200).json(newProduct);
        }
    } catch (err) {
        console.log(err);
        return res.status(404).json({ message: "Something Went Wrong Please Try Again" })
    }

}

export const deleteProduct = async (req, res, next) => {
    const id = req.params.productId

    try {
            await Product.deleteOne({ _id: id });
            return res.status(200).json({ message: "Product Deleted" });
    } catch (err) {
        console.log(err);
        return res.status(404).json({ message: "Something Went Wrong Please Try Again" })
    }
}