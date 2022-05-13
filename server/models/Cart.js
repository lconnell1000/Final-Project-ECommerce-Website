const {Schema, model } = require("mongoose")

const CartSchema = new Schema(
    {
        userId:{
        type:String, 
        required:true,
        },
        Products: [
            {
            productId:{
                type:String,
            },
            quantity: {
                type:Number,
                default:1,
            }
        }
        ],
            
        },

    }, {timestamps: true}
);

const Cart = model("Cart", CartSchema);

module.exports = Cart;