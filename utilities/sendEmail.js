const nodemailer = require('nodemailer');
const generateVerificationCode = require('../utilities/generateVerificationCode');

const sendEmail = async (to, subject, text) => {
    try {
        // Create a transporter with SMTP settings
        const transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                user: 'medicsafesure@gmail.com',
                pass: 'Capstone@103'
            }
        });

        // Generate verification code
        const verificationCode = generateVerificationCode();

        // Define email options
        const mailOptions = {
            from: 'medicsafesure@gmail.com',
            to,
            subject: 'Email Verification Code',
            text: `Your verification code is: ${verificationCode}. Please enter this code to verify your Medicsafe profile.`
        };

        // Send email
        await transporter.sendMail(mailOptions);

        console.log('Verification code sent successfully');
        return verificationCode; // Return the verification code for further use if needed
    } catch (error) {
        console.error('Error sending verification code:', error);
        throw new Error('Failed to send verification code');
    }
};

module.exports = sendEmail;
