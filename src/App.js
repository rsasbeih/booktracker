import './App.css';
import React, { useState } from 'react';
import Books from './components/Books/Books';
import NewBook from './components/NewBook/NewBook';
const DUMMY_DATA = [
  { id: 1, title: 'To Kill a Mockingbird', date: new Date('1960-07-11'), pages: 324 },
  { id: 2, title: 'Pride and Prejudice', date: new Date('1813-01-28'), pages: 279 },
  { id: 3, title: 'The Great Gatsby', date: new Date('1925-04-10'), pages: 218 },
  { id: 4, title: '1984', date: new Date('1949-06-08'), pages: 328 },
  { id: 5, title: 'One Hundred Years of Solitude', date: new Date('1967-05-30'), pages: 417 },
  { id: 6, title: 'Moby-Dick', date: new Date('1851-10-18'), pages: 378 },
  { id: 7, title: 'War and Peace', date: new Date('1869-01-01'), pages: 1225 },
  { id: 8, title: 'The Catcher in the Rye', date: new Date('1951-07-16'), pages: 277 },
  { id: 9, title: 'The Odyssey', date: new Date('-800-01-01'), pages: 325 },
  { id: 10, title: 'The Divine Comedy', date: new Date('1320-01-01'), pages: 214 }
];
const App = () => {
  const [books, setBooks] = useState(DUMMY_DATA);
  const addBookData = book => {
    setBooks(prevBooks => {
      return [book, ...prevBooks];
    });
  }
  return (
    <div>
      <h2>Let's get started!</h2>
      <NewBook onAddBook={addBookData} />
      <Books books={books}></Books>
    </div>
  );
}

export default App;
