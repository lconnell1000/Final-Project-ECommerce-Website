const {Schema, model } = require("mongoose")

const ProductSchema = new Schema(
    {
        title:{
            type:String, 
            required:true,
            unique:true
        },
        description: {
            type:String,
            required:true,
        },
        img: {
            type:String,
            required:true
        },
        categories: {
            type:Array
        }, 
        size: {
            type:String,
            required:true
        },
        colour: {
            type:String,
            required:true
        },
        price: {
            type:Number,
            required:true
        },

    }, {timestamps: true}
);

const Product = model("Product", ProductSchema);

module.exports = Product;