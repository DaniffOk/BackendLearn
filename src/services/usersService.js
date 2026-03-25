let users = [
    { id: 1, name: "Denis" },
    { id: 2, name: "Anna" }
];


const findAllUsers = () => users;

const findUserById = (id) => users.find( (user) => user.id===id );

const addUser = (user) => {
    users.push(user);
    return user;
};

const deleteUser = (userId) =>{
    const userExists = users.some(u => u.id === userId);

    if (!userExists) return false;
    users = users.filter(u => u.id !== userId);

    return true;
}
module.exports = { findAllUsers, findUserById, addUser, deleteUser }