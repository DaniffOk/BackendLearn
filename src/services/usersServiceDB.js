const pool = require("../postgresql")

const findAllUsers = async () => {
    const users = await pool.query("SELECT * FROM users;");
    
    return users.rows;
}; 

const findUserById = async (userId) => {
    const user = await pool.query("SELECT * FROM users WHERE id = $1;", [userId]);

    return user.rows[0];
};

const addUser = async (user) => {
    const createdUser = await pool.query("INSERT INTO users (name, age) VALUES ($1, $2) RETURNING *;", [user.name, user.age]);

    return createdUser.rows;
};

const deleteUser = async (userId) => {
    const deletedUser = await pool.query("DELETE FROM users WHERE id = $1 RETURNING *;", [userId])
    
    return deletedUser.rows[0];
}

module.exports = { findAllUsers, addUser, findUserById, deleteUser };