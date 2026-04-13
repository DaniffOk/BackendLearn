const bcrypt = require("bcrypt");

async function makeHash(data) {
    const salt = 12;
    const hash = await bcrypt.hash(data, salt);
    return hash;
}

async function compareHash(data, hash) {
    const isValid = await bcrypt.compare(data, hash);
    return isValid;
}

module.exports = { makeHash, compareHash }