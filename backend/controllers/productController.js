import asyncHandler from '../middleware/asyncHandler'
import Product from '../models/productModel'

//@Desc fetch all products
//@route GET/api/products
//@ public
const getProducts= asyncHandler(async(req,res)=>{
    const products = await Product.find({});
    res.json(products);
});

//@Desc fetch all product
//@route GET/api/products/:id
//@ public
const getProductsById= asyncHandler(async(req,res)=>{
    const product= await Product.findById(req.params.id)
    if (product){
        return res.json(product);
    }
    res.status(404);
    throw new Error('Resource Not Found')
});

export {getProducts,getProductsById};