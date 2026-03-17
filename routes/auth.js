import express from "express";
import { users } from "../users.js";
import { books } from "../data/books.js";

const router = express.Router();

// Task 6: Register
router.post("/register", (req, res) => {
  const { username, password } = req.body;

  if (users.find(u => u.username === username)) {
    return res.status(400).json({ message: "User exists" });
  }

  users.push({ username, password });
  res.json({ message: "Registered" });
});

// Task 7: Login
router.post("/login", (req, res) => {
  const { username, password } = req.body;

  const user = users.find(
    u => u.username === username && u.password === password
  );

  if (!user) return res.status(401).json({ message: "Invalid" });

  res.json({ message: "Login successful" });
});


// Task 8
router.put("/review/:isbn", (req, res) => {
  const { username, review } = req.body;

  books[req.params.isbn].reviews[username] = review;
  res.json({ message: "Review added/updated" });
});

// Task 9
router.delete("/review/:isbn/:username", (req, res) => {
  delete books[req.params.isbn].reviews[req.params.username];
  res.json({ message: "Review deleted" });
});

export default router;