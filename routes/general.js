import express from "express";
import { books } from "../data/books.js";

const router = express.Router();

// Task 1
router.get("/", (req, res) => {
  res.json(books);
});

// Task 2
router.get("/isbn/:isbn", (req, res) => {
  res.json(books[req.params.isbn]);
});

// Task 3
router.get("/author/:author", (req, res) => {
  const result = Object.values(books).filter(
    b => b.author === req.params.author
  );
  res.json(result);
});

// Task 4
router.get("/title/:title", (req, res) => {
  const result = Object.values(books).filter(
    b => b.title === req.params.title
  );
  res.json(result);
});

// Task 5
router.get("/review/:isbn", (req, res) => {
  res.json(books[req.params.isbn]?.reviews || {});
});

export default router;