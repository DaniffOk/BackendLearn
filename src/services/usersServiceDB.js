const pool = require("../postgresql")

const findAllUsers = async () => {
    const users = await pool.query("SELECT id, name, email FROM users;");
    
    return users.rows;
}; 

const findUserById = async (userId) => {
    const user = await pool.query("SELECT id, name, email FROM users WHERE id = $1;", [userId]);

    return user.rows[0];
};

const addUser = async (user) => {
    const createdUser = await pool.query("INSERT INTO users (name, email, password) VALUES ($1, $2, $3) RETURNING id, name, email;", [user.name, user.email, user.hashPassword]);

    return createdUser.rows;
};

const deleteUser = async (userId) => {
    const deletedUser = await pool.query("DELETE FROM users WHERE id = $1 RETURNING id, name, email;", [userId]);
    
    return deletedUser.rows[0];
}

module.exports = { findAllUsers, addUser, findUserById, deleteUser };