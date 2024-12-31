import mongoose, {Schema} from 'mongoose'

const orderSchema = new Schema({
    status: {
        type: String,
        required: true,
        enum: ['Processing', 'Pending', 'Shipped', 'Delivered', 'Cancelled']
    },
    amount: {
        type: Number,
        required: true,
    },
    stocks: {
        type: Number,
        required: true
    },
    discount: {
        type: Number,
    },
    order: {
        type: Schema.Types.ObjectId,
        ref: 'product',      // Reference to the product model
        required: true
    },
    orderBy:{
        type: Schema.Types.ObjectId,
        ref: 'User',      // Reference to the User model
        required: true
    }
  },
    {
        timestamps: true
    }
)

export const Order = mongoose.model("Order", orderSchema);