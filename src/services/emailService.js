const nodemailer = require('nodemailer');
const config = require('../config/config');
const logger = require('../config/logger');

class EmailService {
    constructor() {
        this.transporter = null;
        logger.info('Email service initialized');
    }

    async createTransporter(emailUser, emailPass) {
        try {
            // Create a transporter using Proton Mail SMTP
            this.transporter = nodemailer.createTransport({
                host: 'smtp.protonmail.ch',
                port: 587,
                secure: false,
                auth: {
                    user: emailUser,
                    pass: emailPass
                }
            });

            // Test the connection
            await this.transporter.verify();
            logger.info('Proton Mail SMTP transporter created successfully');
            return true;
        } catch (error) {
            logger.error('Error creating email transporter:', error);
            throw new Error('Unable to send email. Please check your email credentials.');
        }
    }

    async sendVerificationEmail(user, emailUser, emailPass) {
        try {
            // Create transporter with provided credentials
            await this.createTransporter(emailUser, emailPass);

            const verificationToken = user.generateVerificationToken();
            await user.save();

            const verificationUrl = `${config.baseUrl}/api/users/verify-email/${verificationToken}`;
            
            const mailOptions = {
                from: `"TSV Team" <${emailUser}>`,
                to: user.email,
                subject: 'Welcome to TSV - Verify Your Email',
                html: `
                    <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
                        <h1 style="color: #2c3e50;">Welcome to TSV!</h1>
                        <p>Dear ${user.firstName},</p>
                        <p>Thank you for registering with us. To complete your registration, please click the button below to verify your email address:</p>
                        <div style="text-align: center; margin: 30px 0;">
                            <a href="${verificationUrl}" 
                               style="background-color: #3498db; color: white; padding: 12px 24px; text-decoration: none; border-radius: 5px; display: inline-block;">
                                Verify Email Address
                            </a>
                        </div>
                        <p style="color: #7f8c8d; font-size: 14px;">This link will expire in 24 hours.</p>
                        <p>If you didn't create an account, please ignore this email.</p>
                        <hr style="border: none; border-top: 1px solid #eee; margin: 20px 0;">
                        <p style="color: #7f8c8d; font-size: 12px;">This is an automated message, please do not reply to this email.</p>
                    </div>
                `
            };

            const info = await this.transporter.sendMail(mailOptions);
            logger.info('Verification email sent successfully');
            return true;
        } catch (error) {
            logger.error('Error sending verification email:', error);
            throw error;
        }
    }

    async sendPasswordResetEmail(user, emailUser, emailPass) {
        try {
            // Create transporter with provided credentials
            await this.createTransporter(emailUser, emailPass);

            const resetToken = user.generatePasswordResetToken();
            await user.save();

            const resetUrl = `${config.baseUrl}/api/users/reset-password/${resetToken}`;
            
            const mailOptions = {
                from: `"TSV Team" <${emailUser}>`,
                to: user.email,
                subject: 'TSV - Password Reset Request',
                html: `
                    <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
                        <h1 style="color: #2c3e50;">Password Reset Request</h1>
                        <p>Dear ${user.firstName},</p>
                        <p>We received a request to reset your password. Click the button below to create a new password:</p>
                        <div style="text-align: center; margin: 30px 0;">
                            <a href="${resetUrl}" 
                               style="background-color: #3498db; color: white; padding: 12px 24px; text-decoration: none; border-radius: 5px; display: inline-block;">
                                Reset Password
                            </a>
                        </div>
                        <p style="color: #7f8c8d; font-size: 14px;">This link will expire in 1 hour.</p>
                        <p>If you didn't request this, please ignore this email.</p>
                        <hr style="border: none; border-top: 1px solid #eee; margin: 20px 0;">
                        <p style="color: #7f8c8d; font-size: 12px;">This is an automated message, please do not reply to this email.</p>
                    </div>
                `
            };

            const info = await this.transporter.sendMail(mailOptions);
            logger.info('Password reset email sent successfully');
            return true;
        } catch (error) {
            logger.error('Error sending password reset email:', error);
            throw error;
        }
    }
}

module.exports = new EmailService(); 