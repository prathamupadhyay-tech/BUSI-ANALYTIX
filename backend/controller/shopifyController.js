import Product from '../models/products.js';

export const shopifyCount = async (req, res, next) => {
    let { unique, product } = req.query;
    unique = JSON.parse(unique);
    // console.log(unique, product)
    if (unique) {
        let prod = await Product.findOne({ productName: product });
        prod.shopifyCount++;
        await prod.save();
        console.log(prod)
        if (prod.shopifyCount >= prod.threshold) {
            res.status(200).json({
                count: prod.shopifyCount,
                threshold: true,
                product: prod.productName
            });
        }
        else {
            res.status(200).json({
                count: prod.shopifyCount,
                threshold: false,
                product: prod.productName
            });
        }
    }
    else {
        let prod = await Product.findOne({ productName: product });
        res.status(200).json({
            count: prod.shopifyCount,
            threshold: true,
            product: prod.productName
        })
    }
}
