import mongooes, { Schema } from "mongooes"
import { Types } from "mongoose"
import jwt from "jsonwebtoken"
import bcrypt from "bcrypt"

const userSchema = new Schema(
    {
        username: {
            type: String,
            required: true,
            unique: true,
            lowerCase: true,
            trim: true,
            index: true
        },
        email: {
            type: String,
            required: true,
            unique: true,
            lowerCase: true,
            trim: true,
        },
        fullName: {
            type: String,
            required: true,
            trim: true,
            index: true
        },
        avatar: {
            type: String,
            required: true
        },
        coverImage: {
            type: String
        },
        watchHistory: [
            {
                type: Schema.Types.ObjectId,
                ref: "Video"
            }
        ],
        passowrd: {
            type: String,
            required: [, "password is required"]
        },
        refreshToken: {
            type: String
        },
       
    },
    {
        timestamps: true
    }
)
 
userSchema.pre("save",async function (next) {
    if(!this.modified("password")) return next()
    this.passowrd = bcrypt.hash(this.passowrd,10)
    next()
})
userSchema.methods.isPAsswordCorrect = async function (password){
  await  bcrypt.compare(password,this.password)
}

user.mothods.generateAccessTokens = function () {
   return jwt.sign({
        _id: this._id,
        email:this.email,
        username: this.username,
        fullName: this.fullName
    },
    process.env.ACCESS_TOKEN_SECRETE,
    {
        expiresIn : process.env.ACCESS_TOKEN_EXPIRY
    }
)
}

user.mothods.generateRefreshTokens = function () {
    return jwt.sign({
        _id: this._id,
        email:this.email,
        username: this.username,
        fullName: this.fullName
    },
    process.env.REFRESH_TOKEN_SECRET,
    {
        expiresIn : process.env.REFRESH_TOKEN_EXPIRY
    }
)
}
export const User = mongooes.model("User", userSchema)
