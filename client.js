import axios from "axios";

const BASE_URL = "http://localhost:3000/books";

// -----------------------------
// Task 10: Get all books (async/await)
// -----------------------------
export async function getAllBooks() {
  try {
    const res = await axios.get(BASE_URL);
    console.log("All Books:", res.data);
  } catch (err) {
    console.error("Error fetching all books:", err.message);
  }
}

// -----------------------------
// Task 11: Get book by ISBN (Promises)
// -----------------------------
export function getByISBN(isbn) {
  axios.get(`${BASE_URL}/isbn/${isbn}`)
    .then(res => console.log(`Book with ISBN ${isbn}:`, res.data))
    .catch(err => console.error("Error fetching book by ISBN:", err.message));
}

// -----------------------------
// Task 12: Get books by Author (async/await)
// -----------------------------
export async function getByAuthor(author) {
  try {
    const res = await axios.get(`${BASE_URL}/author/${author}`);
    console.log(`Books by ${author}:`, res.data);
  } catch (err) {
    console.error("Error fetching books by author:", err.message);
  }
}

// -----------------------------
// Task 13: Get books by Title (async/await)
// -----------------------------
export async function getByTitle(title) {
  try {
    const res = await axios.get(`${BASE_URL}/title/${title}`);
    console.log(`Books with title "${title}":`, res.data);
  } catch (err) {
    console.error("Error fetching books by title:", err.message);
  }
}

// -----------------------------
// Run all tasks to test
// -----------------------------
async function runTests() {
  await getAllBooks();
  getByISBN("123");
  await getByAuthor("John Doe");
  await getByTitle("Node Basics");
}

runTests();