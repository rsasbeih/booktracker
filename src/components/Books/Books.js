import React, { useState } from 'react';
import BookItem from "./BookItem";
import BooksFilter from "./BooksFilter";
import './Books.css';
import Card from "../UI/Card";
import BookChart from './BookChart';
const Books = (props) => {
        const [filteredYear, setFilteredYear] = useState('2020');
        const filterChangeHandler = selectedYear => {
                setFilteredYear(selectedYear);
        }
        const filteredBooks = props.books.filter(book => {
                return book.date.getFullYear().toString() === filteredYear;
        });
        return (
                <div>
                        <Card className="books">
                                <BooksFilter selected={filteredYear} onChangeFilter={filterChangeHandler} />
                                <BookChart books={filteredBooks} />
                                {filteredBooks.length === 0 ? <p className="books__message">You didn't read any books this year.</p> : filteredBooks.map(book => <BookItem key={book.id} title={book.title} date={book.date} pages={book.pages} />)}

                        </Card>
                </div>);
}

export default Books;