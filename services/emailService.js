const nodemailer = require('nodemailer');
const config = require('../config/config');
const logger = require('../config/logger');

class EmailService {
    constructor() {
        this.transporter = null;
        logger.info('Email service initialized');
    }

    async createTransporter() {
        try {
            // Create a transporter using Gmail SMTP with credentials from config
            this.transporter = nodemailer.createTransport({
                service: 'gmail',
                host: 'smtp.gmail.com',
                port: 465,
                secure: true,
                auth: {
                    user: config.email.user,
                    pass: config.email.password
                },
                debug: true, // Enable debug output
                logger: true  // Log information about the transport
            });

            // Test the connection
            await this.transporter.verify();
            logger.info('Gmail SMTP transporter created successfully');
            logger.info(`Using email account: ${config.email.user}`);
            return true;
        } catch (error) {
            logger.error('Error creating email transporter:', {
                error: error.message,
                stack: error.stack,
                code: error.code,
                command: error.command,
                responseCode: error.responseCode,
                response: error.response
            });
            throw new Error(`Unable to send email: ${error.message}`);
        }
    }

    async sendVerificationEmail(user) {
        try {
            // Create transporter with default credentials
            await this.createTransporter();

            const verificationToken = user.generateVerificationToken();
            await user.save();

            const verificationUrl = `${config.baseUrl}/api/users/verify-email/${verificationToken}`;
            
            const mailOptions = {
                from: `"TSV Team" <${config.email.user}>`,
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

            logger.info('Attempting to send verification email to:', user.email);
            const info = await this.transporter.sendMail(mailOptions);
            logger.info('Verification email sent successfully:', {
                messageId: info.messageId,
                response: info.response,
                accepted: info.accepted,
                rejected: info.rejected
            });
            return true;
        } catch (error) {
            logger.error('Error sending verification email:', {
                error: error.message,
                stack: error.stack,
                code: error.code,
                command: error.command,
                responseCode: error.responseCode,
                response: error.response,
                to: user.email
            });
            throw error;
        }
    }

    async sendPasswordResetEmail(user) {
        try {
            // Create transporter with default credentials
            await this.createTransporter();

            const resetToken = user.generatePasswordResetToken();
            await user.save();

            const resetUrl = `${config.baseUrl}/api/users/reset-password/${resetToken}`;
            
            const mailOptions = {
                from: `"TSV Team" <${config.email.user}>`,
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