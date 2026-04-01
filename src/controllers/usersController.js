const usersService = require("../services/usersServiceDB");
const asyncHandler = require("../errorHandler");

const getAllUsers = asyncHandler( async(req, res) =>{
    const users = await usersService.findAllUsers();
    return res.json(users);
});

const getUserbyId = asyncHandler( async(req, res) =>{
    const userId = Number(req.params.userId);
    const user = await usersService.findUserById(userId);

    if (!user) return res.status(404).json({ message: "user not found" });
    
    return res.json(user);
});

const addUser = asyncHandler( async(req, res) =>{
    const { name, age } = req.body;

    if (!age||!name) return res.status(400).json({ mesage:"age and name required" });
    if ( typeof(age) != "number" || age<=0 ) return res.status(400).json({ message:"Wrong age input" });
    if ( typeof(name) != "string" || name.length <= 1) return res.status(400).json({ message:"Wrong name input" });

    const user = await usersService.addUser({name, age});
    return res.status(201).json(user);
});

const deleteUser = asyncHandler( async(req, res) =>{
    const userId = Number(req.params.userId);

    const user = await usersService.deleteUser(userId);
    if (!user) return res.status(404).json({ mesage: "user not found" });

    return res.status(200).json(user);
})

module.exports = { getAllUsers, getUserbyId, addUser, deleteUser};