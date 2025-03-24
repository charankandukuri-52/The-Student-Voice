const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const crypto = require('crypto');
const jwt = require('jsonwebtoken');
const config = require('../config/config');

const userSchema = new mongoose.Schema({
    firstName: {
        type: String,
        required: [true, 'Please enter your first name'],
        trim: true
    },
    lastName: {
        type: String,
        required: [true, 'Please enter your last name'],
        trim: true
    },
    email: {
        type: String,
        required: [true, 'Please enter your email'],
        unique: true,
        trim: true,
        lowercase: true,
        match: [/.+\@.+\..+/, 'Please enter a valid email']
    },
    password: {
        type: String,
        required: [true, 'Please enter a password'],
        minlength: [8, 'Password must be at least 8 characters'],
        select: false
    },
    role: {
        type: String,
        enum: ['user', 'admin'],
        default: 'user'
    },
    phoneNumber: {
        type: String,
        default: ''
    },
    address: {
        street: String,
        city: String,
        state: String,
        zipCode: String,
        country: String
    },
    profilePicture: String,
    isActive: {
        type: Boolean,
        default: true
    },
    lastLogin: Date,
    passwordResetToken: String,
    passwordResetExpires: Date,
    emailVerified: {
        type: Boolean,
        default: false
    },
    verificationToken: String,
    verificationTokenExpires: Date,
    failedLoginAttempts: {
        type: Number,
        default: 0
    },
    accountLocked: {
        type: Boolean,
        default: false
    },
    accountLockedUntil: Date,
    // New fields for pending verification
    isPendingVerification: {
        type: Boolean,
        default: true
    },
    maskedEmail: String,
    maskedFirstName: String,
    maskedLastName: String
}, {
    timestamps: true,
    toJSON: { virtuals: true },
    toObject: { virtuals: true }
});

// Virtual for full name
userSchema.virtual('fullName').get(function() {
    return this.emailVerified ? `${this.firstName} ${this.lastName}` : 'Pending Verification';
});

// Hash password before saving
userSchema.pre('save', async function(next) {
    if (!this.isModified('password')) return next();
    
    try {
        const salt = await bcrypt.genSalt(config.bcryptSaltRounds);
        this.password = await bcrypt.hash(this.password, salt);
        next();
    } catch (error) {
        next(error);
    }
});

// Compare password method
userSchema.methods.comparePassword = async function(candidatePassword) {
    return await bcrypt.compare(candidatePassword, this.password);
};

// Generate verification token
userSchema.methods.generateVerificationToken = function() {
    const verificationToken = crypto.randomBytes(32).toString('hex');
    
    this.verificationToken = crypto
        .createHash('sha256')
        .update(verificationToken)
        .digest('hex');
        
    this.verificationTokenExpires = Date.now() + 24 * 60 * 60 * 1000; // 24 hours
    
    // Mask user details until verification
    this.maskedEmail = this.email.replace(/(?<=.{3}).*(?=@)/, '***');
    this.maskedFirstName = this.firstName.charAt(0) + '***';
    this.maskedLastName = this.lastName.charAt(0) + '***';
    
    return verificationToken;
};

// Verify email method
userSchema.methods.verifyEmail = function(token) {
    if (this.verificationToken !== token) {
        return false;
    }
    
    if (this.verificationTokenExpires < Date.now()) {
        return false;
    }
    
    this.emailVerified = true;
    this.isPendingVerification = false;
    this.verificationToken = undefined;
    this.verificationTokenExpires = undefined;
    
    // Unmask user details after verification
    this.maskedEmail = undefined;
    this.maskedFirstName = undefined;
    this.maskedLastName = undefined;
    
    return true;
};

// Generate JWT token
userSchema.methods.generateAuthToken = function() {
    return jwt.sign(
        { 
            id: this._id,
            email: this.emailVerified ? this.email : this.maskedEmail,
            role: this.role,
            isVerified: this.emailVerified
        },
        config.jwtSecret,
        { expiresIn: config.jwtExpiresIn }
    );
};

// Generate password reset token
userSchema.methods.generatePasswordResetToken = function() {
    const resetToken = crypto.randomBytes(32).toString('hex');
    
    this.passwordResetToken = crypto
        .createHash('sha256')
        .update(resetToken)
        .digest('hex');
        
    this.passwordResetExpires = Date.now() + 60 * 60 * 1000; // 1 hour
    
    return resetToken;
};

// Increment failed login attempts
userSchema.methods.incrementFailedLoginAttempts = async function() {
    this.failedLoginAttempts += 1;
    
    if (this.failedLoginAttempts >= config.maxLoginAttempts) {
        this.accountLocked = true;
        this.accountLockedUntil = Date.now() + config.accountLockoutDuration * 60 * 1000;
    }
    
    await this.save();
};

// Reset failed login attempts
userSchema.methods.resetFailedLoginAttempts = async function() {
    this.failedLoginAttempts = 0;
    this.accountLocked = false;
    this.accountLockedUntil = undefined;
    await this.save();
};

const User = mongoose.model('User', userSchema);

module.exports = User; 