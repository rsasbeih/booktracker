import './BookItem.css';
import BookDate from './BookDate';
import Card from '../UI/Card';
function BookItem(props) {
        return (
                <Card className="book-item">
                        <BookDate date={props.date}/>
                        <div className="book-item__description">
                                <h2>{props.title}</h2>
                                <div className="book-item__pages">{props.pages}</div>
                        </div>
                </Card>
        )
                ;
}

export default BookItem;