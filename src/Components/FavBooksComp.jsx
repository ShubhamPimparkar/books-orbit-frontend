import React,{useEffect,useState} from 'react'
import { BookCardComp } from './BookCardComp';
import axios from 'axios';
export default function FavBooksComp() {
    const[books,setBooks] = useState([]);

    const fetchBooks = async () => {
        try {
            const response = await axios.get('http://localhost:8080/books');
            // console.log(response.data)
            setBooks(response.data);
        } catch (error) {
            console.error(error);
        }
    };
    useEffect(() => {   
        fetchBooks();
    }, []);
  return (
    <div >
        <BookCardComp booksprop={books} headline="Best Selling Books" ></BookCardComp>
    </div>
  )
}
