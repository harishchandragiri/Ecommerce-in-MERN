import mongoose, {Schema} from 'mongoose'

const userSchema = new Schema({
    name: {
        type: String,
        required: true,
        trim:true,
        index: true
    },
    email: {
        type: String,
        required: true,
        trim: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    gender: {
        type: String,
        required: true
    },
    dateOfBirth: {
        type: Date,
        required: true
    },
    refreshToken: {
        type: String
    },
    transaction:[{
        type: Schema.Types.ObjectId,
        ref: 'Transaction'      // Reference to the Transaction model
    }, ],
    order:[{
        type: Schema.Types.ObjectId,
        ref: 'Order'      // Reference to the order model
    }, ],
    shipping:[{
        type: Schema.Types.ObjectId,
        ref: 'Shipping'      // Reference to the shipping model
    }, ]
  },
    {
        timestamps: true
    }
)

export const signUp = mongoose.model("User", userSchema);