import mongoose, {Schema} from 'mongoose'

const transactionSchema = new Schema({
    status: {
        type: String,
        required: true,
        enum: ['Processing', 'Completed', 'Cancelled']
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

export const Transaction = mongoose.model("Transaction", transactionSchema);