import BookItem from "./BookItem";
import './Books.css';
import Card from "../UI/Card";
const Books = (props) => {
        return (<Card className="books">
                {props.books.map(book => <BookItem key={book.id} title={book.title} date={book.date} pages={book.pages} />)}
        </Card>);
}

export default Books;