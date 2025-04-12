import mongoose, {Schema} from 'mongoose'
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken'; 


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
    }],
    order:[{
        type: Schema.Types.ObjectId,
        ref: 'Order'      // Reference to the order model
    } ],
    shipping:[{
        type: Schema.Types.ObjectId,
        ref: 'Shipping'      // Reference to the shipping model
    } ]
  },
    {
        timestamps: true
    }
)

// save the password if it is isModified. it is the inbuilt mongoose method called pre('save') method
userSchema.pre("save", async function (next) {

    // if password is not modified 
    if(!this.isModified('password')) return next();

    // if the password is modified
    this.password = await bcrypt.hash(this.password, 10)
    next(); 
})

// password is compared
userSchema.methods.isPasswordCorrect = async function (password) {
    return await bcrypt.compare(password, this.password)    
}

// AccessToken generated
userSchema.methods.generateAccessToken = function(){
    return jwt.sign(
        {
            _id: this._id,
            email: this.email,
            name: this.name,
        },
        process.env.ACCESS_TOKEN_SECRET,
        {
            expiresIn: process.env.ACCESS_TOKEN_EXPIRY
        }
    )
}

// RefreshToken generated
userSchema.methods.generateRefreshToken = function(){
    return jwt.sign(
        {
            _id: this._id,
            email: this.email
        },
        process.env.REFRESH_TOKEN_SECRET,
        {
            expiresIn: process.env.REFRESH_TOKEN_EXPIRY
        }
    )
}

// Store Refresh Token in DB
userSchema.methods.setRefreshToken = async function(refreshToken) {
    this.refreshToken = refreshToken;
    await this.save(); 
};

// Revoke Refresh Token
userSchema.methods.revokeRefreshToken = async function() {
    this.refreshToken = null;
    await this.save();
};


export const User = mongoose.model("User", userSchema);