require('dotenv').config();
const jwt = require('jsonwebtoken');

async function generateToken(user) {
    const token = jwt.sign(user, process.env.JWT_SECRET_KEY);
    return token;
}

async function validateToken(token) {
    const verified = jwt.verify(token, process.env.JWT_SECRET_KEY)
    if (verified){
        const userId = decode.id;
        return userId;
    } else{
        return;
    }

}