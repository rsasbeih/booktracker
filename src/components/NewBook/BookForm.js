import React, { useState } from 'react';
import './BookForm.css';
import Button from '../UI/Button';
import styled from 'styled-components';

const FormControl = styled.div`
& label {
  font-weight: bold;
  margin-bottom: 0.5rem;
  display: block;
  color: ${props => (props.invalid ? 'red' : 'black')}
}

& input {
  font: inherit;
  padding: 0.5rem;
  border-radius: 6px;
  border: 1px solid ${props=> (props.invalid ? 'red' : '#ccc')};
  background: ${props=> (props.invalid ? 'salmon' : 'white')};
  width: 20rem;
  max-width: 100%;
}

`;

const BookForm = (props) => {
        const [enteredTitle, setEnteredTitle] = useState('');
        const [enteredPages, setEnteredPages] = useState('');
        const [enteredDate, setEnteredDate] = useState('');
        const [isValidTitle, setIsValidTitle] = useState(true);
        const [isValidPages, setIsValidPages] = useState(true);
        const [isValidDate, setIsValidDate] = useState(true);

        const submitHandler = (event) => {
                event.preventDefault();

                let hasError = false;

                if (enteredTitle.trim().length === 0) {
                        setIsValidTitle(false);
                        hasError = true;
                }

                if (enteredPages <= 0) {
                        setIsValidPages(false);
                        hasError = true;
                }

                if (!enteredDate) {
                        setIsValidDate(false);
                        hasError = true;
                }

                if (hasError) return;

                const bookData = {
                        title: enteredTitle,
                        pages: +enteredPages,
                        date: enteredDate
                };

                props.onSaveBookData(bookData);
                setEnteredTitle('');
                setEnteredPages('');
                setEnteredDate('');
                setIsValidTitle(true);
                setIsValidPages(true);
                setIsValidDate(true);
        };

        function titleHandler(event) {
                setEnteredTitle(event.target.value);
                if (event.target.value.trim().length > 0)
                        setIsValidTitle(true);
        }

        function pagesHandler(event) {
                setEnteredPages(event.target.value);
                if (event.target.value > 0)
                        setIsValidPages(true);
        }

        function dateHandler(event) {
                setEnteredDate(new Date(event.target.value));
                if (event.target.value)
                        setIsValidDate(true);
        }
        return (
                <form onSubmit={submitHandler}>
                        <div className="new-book__controls">
                                <FormControl invalid={!isValidTitle}>
                                        <label>Title</label>
                                        <input
                                                type="text"
                                                onChange={titleHandler}
                                                value={enteredTitle}
                                        />
                                </FormControl>
                                <FormControl invalid={!isValidPages}>
                                        <label>Pages</label>
                                        <input
                                                type="number"
                                                min="0.01"
                                                step="0.01"
                                                onChange={pagesHandler}
                                                value={enteredPages}
                                        />
                                </FormControl>
                                <FormControl invalid={!isValidDate}>
                                        <label>Date</label>
                                        <input
                                                type="date"
                                                min="2019-01-01"
                                                max="2022-12-31"
                                                onChange={dateHandler}
                                                value={enteredDate}
                                        />
                                </FormControl>
                        </div>
                        <div className="new-book__actions">
                                <Button type="submit">Add book</Button>
                        </div>
                </form>
        );
};

export default BookForm;
