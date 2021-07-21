const express = require('express');
const router = express.Router();

const db = require("./db/database");

// Server homepage
router.get('/', (req, res) => {
    res.send("Homepage endpoint!");
});

// Get all todos
router.get('/api/v1/todo', async (req, res) => {
    try {
        const response = await db.query("SELECT * FROM todo ORDER BY id");
        res.json(response.rows).status(200);
    } catch (error) {
        console.error(error);
    }
});

// Add a new todo
router.post("/api/v1/todo/add", async (req, res) => {
    try {
        const newTodo = req.body.name;
        const response = await db.query("INSERT INTO todo (content, completed) VALUES ($1, 'f') RETURNING *", [newTodo]);
        res.status(200).json(response.rows[0]);
    } catch (error) {
        console.error(error);
    }
});

// Update one todo's status
router.get("/api/v1/todo/update/status/:id", async (req, res) => {
    try {
        const response = await db.query("UPDATE todo SET completed = NOT completed WHERE id=$1 RETURNING *", [req.params.id]);
        res.json(response.rows[0]).status(200);
    } catch (error) {
        console.error(error);
    }
});

// Delete a todo
router.get('/api/v1/todo/delete/:id', async (req, res) => {
    try {
        const response = await db.query("DELETE FROM todo WHERE id=$1 RETURNING *", [req.params.id]);
        res.status(200).json();
    } catch (error) {
        console.error(error);
    }
});

// Other routes
// router.get("*", (req, res) => {
//     res.send("404 ERROR NOT FOUND");
// });

router.get('/*', (req, res) => {
    res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

module.exports = router;