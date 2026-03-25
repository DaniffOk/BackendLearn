const usersService = require("../services/usersService");

const getAllUsers = (req, res) =>{
    const users = usersService.findAllUsers();
    res.json(users);
};

const getUserbyId = (req, res) =>{
    const userId = Number(req.params.userId);
    const user = usersService.findUserById(userId);
    if (!user) return res.status(404).json({ mesage: "user not found" });
    res.json(user);
};

const addUser = (req, res) =>{
    const { id, name } = req.body;

    if (!id||!name) return res.status(400).json({ mesage:"id and name required" });

    const user = usersService.addUser({id, name});
    return res.status(201).json(user);
};

const deleteUser = (req, res) =>{
    const userId = Number(req.params.userId);

    const exist = usersService.deleteUser(userId);
    if (!exist) return res.status(404).json({ mesage: "user not found" });

    res.sendStatus(200);
}

module.exports = { getAllUsers, getUserbyId, addUser, deleteUser};