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
    gendar: {
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
  },
    {
        timestamps: true
    }
)

export const signUp = mongoose.model("signUp", userSchema);