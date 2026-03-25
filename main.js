const express = require("express");

const port = 3000;

const app = express();

let users = [
    { id: 1, name: "Denis" },
    { id: 2, name: "Anna" }
];

app.use(express.json());

app.get("/users", (request, response) => {
    response.json(users);
});

app.get("/users/:userId", (request, response) => {
    const userId = Number(request.params.userId);
    const user = users.find(u => u.id === userId);
    response.json(user);
})

app.post("/users", (request, response) => {
    const user = request.body;
    if (!user) return response.sendStatus(400);
    users.push(user);
    response.sendStatus(201);
})

app.delete("/users/:userId", (request, response) => {
    const userId = Number(request.params.userId);

    const userExists = users.some(u => u.id === userId)
    if (!userExists) return response.sendStatus(400);

    users = users.filter(u => u.id !== userId)

    response.sendStatus(200);
})

app.listen(port, () => {
    console.log(`Server started. \n${new Date()} \nhttp://localhost:${port}`);
})