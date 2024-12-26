import mongoose, {Schema} from 'mongoose'

const productSchema = new Schema({
    name: {
        type: String,
        required: true,
        trim:true,
        index: true
    },
    price: {
        type: Number,
        required: true,
    },
    stocks: {
        type: Number,
        required: true
    },
    image: {
        type: String,
        required: true
    }
  },
    {
        timestamps: true
    }
)

export const product = mongoose.model("product", productSchema);