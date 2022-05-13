const {Schema, model } = require("mongoose")

const CartSchema = new Schema(
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

const Cart = model("Cart", CartSchema);

module.exports = Cart;