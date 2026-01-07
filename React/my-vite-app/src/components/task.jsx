// A college library wants to digitize its book records using a Single Page React Application.
// Develop a React app using Vite or Create React App where librarians can add, view, and filter books.
// Use ES6 features (let/const, arrow functions, array methods, destructuring, spread operator) while managing book data.
// Create functional components with props, state, and Hooks (useState, useEffect) and a controlled form for book entry.
// Implement React Router for navigation between pages and fetch initial book data using Fetch or Axios.

import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";

const initialBooks = [
    { id: 1, title: "1984", author: "George Orwell", genre: "Dystopian" },
    { id: 2, title: "To Kill a Mockingbird", author: "Harper Lee", genre: "Fiction" },
    { id: 3, title: "The Great Gatsby", author: "F. Scott Fitzgerald", genre: "Classic" }
];

const BookForm = ({ addBook }) => {
    const [title, setTitle] = useState("");
    const [author, setAuthor] = useState("");
    const [genre, setGenre] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        addBook({ title, author, genre });
        setTitle("");
        setAuthor("");
        setGenre("");
    };

    return (        

        <form onSubmit={handleSubmit}>
            <input 
                type="text" 
                placeholder="Title" 
                value={title} 
                onChange={(e) => setTitle(e.target.value)} 
                required
            />
            <input 
                type="text" 
                placeholder="Author" 
                value={author} 
                onChange={(e) => setAuthor(e.target.value)} 
                required
            />
            <input 
                type="text" 
                placeholder="Genre" 
                value={genre} 
                onChange={(e) => setGenre(e.target.value)} 
                required
            />
            <button type="submit">Add Book</button>
        </form>
    );
};

const BookList = ({ books }) => (
    <ul>
        {books.map(({ id, title, author, genre }) => (
            <li key={id}>
                <strong>{title}</strong> by {author} - <em>{genre}</em>
            </li>
        ))}
    </ul>
);

const FilterBooks = ({ books, filterGenre }) => {
    const filteredBooks = books.filter(book => 
        book.genre.toLowerCase().includes(filterGenre.toLowerCase())
    );

    return <BookList books={filteredBooks} />;
};

const App = () => {
    const [books, setBooks] = useState(initialBooks);
    const [filterGenre, setFilterGenre] = useState("");

    const addBook = (book) => {
        const newBook = { id: books.length + 1, ...book };
        setBooks([...books, newBook]);
    };

    return (
        <Router>
            <nav>
                <Link to="/">Home</Link> | <Link to="/add">Add Book</Link> | <Link to="/filter">Filter Books</Link>
            </nav>
            <Routes>
                <Route path="/" element={<BookList books={books} />} />
                <Route path="/add" element={<BookForm addBook={addBook} />} />
                <Route 
                    path="/filter" 
                    element={
                        <>
                            <input 
                                type="text" 
                                placeholder="Filter by genre" 
                                value={filterGenre} 
                                onChange={(e) => setFilterGenre(e.target.value)} 
                            />
                            <FilterBooks books={books} filterGenre={filterGenre} />
                        </>
                    } 
                />
            </Routes>
        </Router>
    );
};

export default App;