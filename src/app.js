const express = require("express");
const app = express();

const usersRouter = require("./routes/usersRouter");

app.use(express.json());
app.use("/users", usersRouter);

app.use((err, req, res, next) => {
    console.error(err);
    res.status(500).json({ message: "Internal server error" });
});

module.exports = app;
