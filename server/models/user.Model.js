const mongoose = require("mongoose");
const bcrypt = require('bcrypt');
const UserSchema = new mongoose.Schema({
    userName: {
        type: String,
        required: [true, "User Name is required !!!!"]
    },
    email: {
        type: String,
        required: [true, "Email is required !!!"],
        unique: true
    },
    password: {
        type: String,
        required: [true, "Password is required"],
        minlength: [8, "Password must be at least 8 characters !!!!"]
    },
})
UserSchema.virtual('confirmPassword').get(() => this.confirmPassword)
    .set(value => this._confirmPassword = value);
UserSchema.pre('validate', function (next) {
    console.log("Hi From Validation Hook");
    if (this.password !== this.confirmPassword) {
        this.invalidate('confirmPassword', "Password must match")
    }
    next()
}, {timestamps: true})
UserSchema.pre('save', async function (next) {
    console.log("In Pre Save Hook");
    try {
        const hashedPassword = await bcrypt.hash(this.password, 10)
        this.password = hashedPassword;
        console.log("Hashed Password----" + hashedPassword);
    } catch (error) {
        console.log("error");
    }
    next();
})
const User = mongoose.model('user', UserSchema);
module.exports = User;