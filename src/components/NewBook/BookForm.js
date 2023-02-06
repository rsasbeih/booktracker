import React, { useState } from 'react';
import './BookForm.css';
const BookForm = (props) => {
        const [enteredTitle, setEnteredTitle] = useState('');
        const [enteredPages, setEnteredPages] = useState('');
        const [enteredDate, setEnteredDate] = useState('');
        const submitHandler = (event) => {
                event.preventDefault();
                const bookData = {
                        title: enteredTitle,
                        pages: +enteredPages,
                        date: enteredDate
                };
                props.onSaveBookData(bookData);
                setEnteredTitle('');
                setEnteredPages('');
                setEnteredDate('');
        };
        function titleHandler(event) {
                setEnteredTitle(event.target.value);
        }
        function pagesHandler(event) {
                setEnteredPages(event.target.value);
        }
        function dateHandler(event) {
                setEnteredDate(new Date(event.target.value));
        }
        return (

                <form onSubmit={submitHandler}>
                        <div className='new-book__controls'>
                                <div className='new-book__control'>
                                        <label>Title</label>
                                        <input type='text' onChange={titleHandler} value={enteredTitle} />
                                </div>
                                <div className='new-book__control'>
                                        <label>Pages</label>
                                        <input type='number' min='0.01' step='0.01' onChange={pagesHandler} value={enteredPages} />
                                </div>
                                <div className='new-book__control'>
                                        <label>Date</label>
                                        <input type='date' min='2019-01-01' max='2022-12-31' onChange={dateHandler} value={enteredDate} />
                                </div>
                        </div>
                        <div className='new-book__actions'>
                                <button type='submit'>Add book</button>
                        </div>
                </form>);
};
export default BookForm;