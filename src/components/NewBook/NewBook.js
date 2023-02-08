import React from 'react';

import './NewBook.css';

import BookForm from './BookForm';

const NewBook = (props) => {
        const saveBookDataHandler = (enteredBookData) => {
                const bookData = {
                        ...enteredBookData,
                        id: Math.random().toString()
                };
                console.log(bookData);
                props.onAddBook(bookData);
        }
        return (<div className="new-book">
                <BookForm onSaveBookData={saveBookDataHandler}></BookForm>
        </div>);
}

export default NewBook;