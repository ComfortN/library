# 📚 Library API Project

[![Node.js](https://img.shields.io/badge/Node.js-18.x-green)](https://nodejs.org/) 
[![Express](https://img.shields.io/badge/Express-5.x-blue)](https://expressjs.com/) 
[![JavaScript](https://img.shields.io/badge/JavaScript-ES6-yellow)](https://developer.mozilla.org/en-US/docs/Web/JavaScript)

A Node.js backend for a Bookstore API, designed for learning REST APIs and client-server communication. Users can browse books and registered users can add, update, or delete reviews. Axios is used in a client script to demonstrate API requests using **async/await** and **Promises**.

---

## 📋 Features / Tasks

### General Users
- **Task 1:** Get the full book list.
- **Task 2:** Get a book by ISBN.
- **Task 3:** Get all books by author.
- **Task 4:** Get all books by title.
- **Task 5:** Get book reviews.

### Registered Users
- **Task 6:** Register a new user.
- **Task 7:** Login as a registered user.
- **Task 8:** Add or modify a book review.
- **Task 9:** Delete a book review added by the user.

### Node.js Client (Tasks 10–13)
- **Task 10:** Get all books using async/await.
- **Task 11:** Search by ISBN using Promises.
- **Task 12:** Search by Author using async/await.
- **Task 13:** Search by Title using async/await.

### Submission
- **Task 14:** GitHub repository submission link.

---

## 🛠️ Tech Stack

- Node.js (v18+)
- Express.js (v5+)
- Axios
- ES Modules (`import/export`)

---

## 📁 Project Structure

```text
library/
 ├── data/
 │    └── books.js          # Sample book data
 ├── routes/
 │    ├── auth.js           # User registration/login and review routes
 │    └── general.js        # Book retrieval routes
 ├── users.js               # Registered users array
 ├── index.js               # Express server entry
 └── client.js              # Axios client for Tasks 10–13
```

## ⚙️ Installation

```bash
# Clone the repository
git clone https://github.com/YOUR_USERNAME/library.git

# Navigate to project
cd library

# Install dependencies
npm install

# Start server
npm start
```
