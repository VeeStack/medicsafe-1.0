
const generateVerificationCode = () => {
    //Generate a random 6-digit verification code
    return Math.floor(100000 + Math.random () * 900000). toString();
};

Module.exports = generateVerificationCode;