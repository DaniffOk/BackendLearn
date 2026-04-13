const usersService = require("../services/usersServiceDB");
const asyncHandler = require("../errorHandler");
const { makeHash } = require("../hashing")

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
    const { name, email, password } = req.body;

    if (!name||!email||!password) return res.status(400).json({ message:"age, email and password required" });
    if (!email.includes("@")) return res.status(400).json({ message:"Wrong email input" });
    if ( typeof(name) != "string" || name.length <= 1) return res.status(400).json({ message:"Wrong name input" });

    const hashPassword = await makeHash(password);
    const user = await usersService.addUser({name, email, hashPassword});
    return res.status(201).json(user);
});

const deleteUser = asyncHandler( async(req, res) =>{
    const userId = Number(req.params.userId);

    const user = await usersService.deleteUser(userId);
    if (!user) return res.status(404).json({ message: "user not found" });

    return res.status(200).json(user);
})

module.exports = { getAllUsers, getUserbyId, addUser, deleteUser};