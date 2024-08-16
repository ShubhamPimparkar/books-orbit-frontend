import React, { useEffect, useState } from 'react'
import { Table } from "flowbite-react";

const ManageBooks = () => {

  // const navigate = useNavigate();
  const [allBooks, setAllBooks] = useState([]);

  useEffect(() => {
    fetch("http://localhost:8080/books")
      .then(res => res.json())
      .then(data => {

        if (Array.isArray(data)) {
          setAllBooks(data);
        } else {
          console.error('Unexpected response format:', data);
        }
      })
      .catch(error => console.error('Error fetching books:', error));

  }, []);

  // Delete a book
  // Delete a book
  const handleDelete = (bookId) => {
    fetch(`http://localhost:8080/books/${bookId}`, {
      method: "DELETE",
    })
      .then(res => {
        if (res.ok) {
          // Remove the deleted book from the allBooks state
          setAllBooks(prevBooks => prevBooks.filter(book => book.bookId !== bookId));
          toast.success("Book is deleted successfully");
        } else {
          console.error('Failed to delete book:', res.status);
        }
      })
      .catch(error => console.error('Error deleting book:', error));
  }


  return (
    <div className="px-4 my-12">
      <h2 className="mb-8 text-3xl font-bold">Manage your books</h2>
      <Table hoverable className='float-right lg:w-[1000px]'>
        <Table.Head>
          <Table.HeadCell>ID</Table.HeadCell>
          <Table.HeadCell>Book Name</Table.HeadCell>
          <Table.HeadCell>Author Name</Table.HeadCell>
          <Table.HeadCell>Quantity</Table.HeadCell>
          <Table.HeadCell>Price</Table.HeadCell>
          <Table.HeadCell>
            <span>Manage</span>
          </Table.HeadCell>
        </Table.Head>
        {
          Array.isArray(allBooks) && allBooks.length > 0 ? (
            allBooks.map((book) => (
              <Table.Body key={book.bookId} className="divide-y hover:bg-slate-100 text-center">
                <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800 hover:bg-slate-100">
                  <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                    {book.bookId}
                  </Table.Cell>
                  <Table.Cell>{book.bookName}</Table.Cell>
                  <Table.Cell>{book.authorName}</Table.Cell>
                  <Table.Cell>{book.quantity}</Table.Cell>
                  <Table.Cell>{"\u20B9"}{book.price}</Table.Cell>
                  <Table.Cell>
                    {/* <Link to={`/admin/dashboard/edit/${book.bookId}`} className="font-medium text-cyan-600 hover:underline dark:text-cyan-500">
                      Edit
                    </Link> */}
                    <button onClick={() => handleDelete(book.bookId)} className='bg-red-600 py-1 font-semibold text-white rounded-lg px-4 ml-5'>Delete</button>
                  </Table.Cell>
                </Table.Row>
              </Table.Body>
            ))
          ) : (
            <Table.Body className="divide-y hover:bg-slate-100">
              <Table.Row>
                <Table.Cell mt-5 colSpan={6} className="text-center">No books available</Table.Cell>
              </Table.Row>
            </Table.Body>
          )
        }
      </Table>
    </div>
  );
}

export default ManageBooks;
