import mongoose, {Schema} from 'mongoose'

const shippingSchema = new Schema({
    address: {
        type: String,
        required: true,
        trim: true
    },
    country: {
        type: String,
        required: true,
        trim: true
    },
    state: {
        type: String,
        required: true,
        trim: true
    },
    city: {
        type: String,
        required: true,
        trim: true
    },
    pincode: {
        type: String,
        required: true,
        trim: true
    },
    orderBy:{
        type: Schema.Types.ObjectId,
        ref: 'User',      // Reference to the User model of user.models.js
        required: true
    }
  },
    {
        timestamps: true
    }
)

export const Shipping = mongoose.model("Shipping", shippingSchema);