import mongoose from "mongoose";

const reviewSchema=mongoose.Schema({
    user:{
        type :mongoose.Schema.Types.ObjectId,
        required:true,
        ref:'User'
    },
    name:{
        type:'String',
        required:true
    },
    rating:{
        type:Number,
        required:true
    },
    Comment:{
        type:String,
        required:true
    },
},{
        timestamps:true,
    }
);
const productSchema= new mongoose.Schema({
    user:{
        type:mongoose.Schema.Types.ObjectId,
        required:true,
        ref:"User",
    },
    name:{
        type:String,
        required:true
    },
    image:{
        type:String,
        required:true
    },
    brand:{
        type:String,
        required:true
    },
    category:{
        type:String,
        required:true
    },
    price:{
        type:Number,
        required:true
    },
    reviews:[reviewSchema],
    rating:{
        type:Number,
        required:true,
        default:0
    },
    numReviews:{
        type:Number,
        required:true
    },
    countInStock:{
        type:Number,
        required:true,
        default:0
    },
},{
    timestamps:true
    });
const product = mongoose.model("product",productSchema);

export default product;