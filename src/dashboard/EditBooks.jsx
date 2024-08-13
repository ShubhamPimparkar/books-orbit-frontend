import React, { useState } from 'react'
import { useLoaderData, useParams } from 'react-router-dom'
import { Button, Label, Select, Textarea } from "flowbite-react";

const EditBooks = () => {
  const { bookId } = useParams();
  const { bookName, authorName, sellerId, categoryId, imgUrl, categoryName, price, quantity, description } = useLoaderData();
  const bookCategories = [
    "Fiction",
    "Drama",
    "Fantasy",
    "Horror",
    "Science"
  ];

  const [selectedBookCategory, setSelectedBookCategory] = useState(categoryName || bookCategories[0]);

  const handleChangeSelectedValue = (event) => {
    setSelectedBookCategory(event.target.value);
  }

  // Handle book update
  const handleUpdate = async (event) => {
    event.preventDefault();
    const form = event.target;

    const updatedBookObj = {
      bookName: form.bookName.value,
      authorName: form.authorName.value,
      sellerId: form.sellerId.value,
      categoryId: form.categoryId.value,
      imgUrl: form.imgUrl.value,
      categoryName: selectedBookCategory,
      price: form.price.value,
      description: form.description.value,
      quantity: form.quantity.value
    };
    console.log(updatedBookObj)
    // Update book data
    fetch(`http://localhost:8080/books/${bookId}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(updatedBookObj)
    })
      .then(res => res.json())
      .then(data => alert("Update successfully"))
      .catch(err => console.error("Error updating book:", err));
  }

  return (
    <div className='px-4 my-2'>
      <h2 className='mb-8 text-3xl font-bold'>Update the book data</h2>

      <form onSubmit={handleUpdate} className="flex lg:w-[1000px] flex-col gap-4">
        <div className='flex gap-8'>
          <div className='lg:w-1/3'>
            <div className="mb-2 block">
              <Label htmlFor="bookName" value="Book Name" />
            </div>
            <input className="border-2 border-black-500 rounded-md p-1" id="bookName" name='bookName' defaultValue={bookName} type="text" placeholder="Enter Book Name" required />
          </div>
          <div className='lg:w-1/3'>
            <div className="mb-2 block">
              <Label htmlFor="authorName" value="Author Name" />
            </div>
            <input className="border-2 border-black-500 rounded-md p-1" id="authorName" name='authorName' defaultValue={authorName} type="text" placeholder="Enter Author Name" required />
          </div>
        </div>

        <div className='flex gap-8'>
          <div className='lg:w-1/3'>
            <div className="mb-2 block">
              <Label htmlFor="seller" value="Seller Id" />
            </div>
            <input className="border-2 border-black-500 rounded-md p-1" id="sellerId" name='sellerId' defaultValue={sellerId} type="number" placeholder="Enter Seller Id" required />
          </div>
          <div className='lg:w-1/3'>
            <div className="mb-2 block">
              <Label htmlFor="categoryId" value="Category Id" />
            </div>
            <input className="border-2 border-black-500 rounded-md p-1" id="categoryId" name='categoryId' defaultValue={categoryId} type="number" placeholder="Enter Book categoryId" required />
          </div>
        </div>

        <div className='flex gap-8'>
          <div className='lg:w-1/3'>
            <div className="mb-2 block">
              <Label htmlFor="imgUrl" value="Image URL" />
            </div>
            <input className="border-2 border-black-500 rounded-md p-1" id="imgUrl" name='imgUrl' defaultValue={imgUrl} type="url" placeholder="Enter image URL" required />
          </div>
          <div className='lg:w-1/3'>
            <div className="mb-2 block">
              <Label htmlFor="inputState" value="Book Category" />
            </div>
            <Select id='inputState' name='categoryName' className='w-full rounded' value={selectedBookCategory} onChange={handleChangeSelectedValue}>
              {bookCategories.map((option) => (
                <option className='p-5' key={option} value={option}>{option}</option>
              ))}
            </Select>
          </div>
        </div>

        <div className='flex gap-8'>
          <div className='lg:w-1/3'>
            <div className="mb-2 block">
              <Label htmlFor="price" value="Book Price" />
            </div>
            <input className="border-2 border-black-500 rounded-md p-1" id="price" name='price' defaultValue={price} type="number" placeholder="Enter Book Price" required />
          </div>
          <div className='lg:w-1/3'>
            <div className="mb-2 block">
              <Label htmlFor="quantity" value="Quantity" />
            </div>
            <input className="border-2 border-black-500 rounded-md p-1" id="quantity" name='quantity' defaultValue={quantity} type="number" placeholder="Enter Book Quantity" required />
          </div>
        </div>

        <div className='flex gap-8'>
          <div className='lg:w-1/3'>
            <div className="mb-1 block">
              <Label htmlFor="description" value="Book Description" />
            </div>
            <Textarea name="description" id="description" defaultValue={description} placeholder='Write book description...' required className='w-full' rows={5} />
          </div>
          <div>
            <Button type="submit" className="lg:w-36 mx-16 h-9 mt-16 bg-blue-500 text-white font-bold py-2 px-4 rounded">Update</Button>
          </div>
        </div>
      </form>
    </div>
  )
}

export default EditBooks;
