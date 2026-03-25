const express = require("express");
const router = express.Router();

const usersController = require("../controllers/usersController");

router.get("/", usersController.getAllUsers);
router.get("/:userId", usersController.getUserbyId);
router.post("/", usersController.addUser);
router.delete("/:userId", usersController.deleteUser);

module.exports = router;