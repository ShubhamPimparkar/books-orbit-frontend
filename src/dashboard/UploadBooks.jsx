import React, { useState } from 'react'
import { Button, Checkbox, Label, Select, Textarea, TextInput } from "flowbite-react";
import { Link } from 'react-router-dom';
const UploadBooks = () => {

  const bookCategories = [
    "Fiction",
    "Drama",
    "Fantasy",
    "Horror",
    "Science"
  ]

  const [selectedBookCategory, setSelectedBookCategory] = useState(bookCategories[0]);

  const handleChangeSelectedValue = async (event) => {
    console.log(event.target.value);
    setSelectedBookCategory(event.target.value);
  }

  //handle book submission
  const handleBookSubmit = async (event) => {
    event.preventDefault();
    const form = event.target;
    const bookName = form.bookName.value;
    const authorName = form.authorName.value;
    const sellerId = form.sellerId.value;
    const categoryId = form.categoryId.value;
    const imgUrl = form.imgUrl.value;
    const categoryName = form.categoryName.value;
    const price = form.price.value;
    const description = form.description.value;
    const quantity = form.quantity.value;

    const bookObj = {
      bookName, authorName, sellerId, categoryId, imgUrl, categoryName, price, description, quantity
    }
    console.log(bookObj)

    //send data to db
    try {
      const response = await fetch("http://localhost:8080/books", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(bookObj),
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const data = await response.json();
      alert("Book updated successfully!");
      // form.reset();
    } catch (error) {
      console.error("There was an error!", error);
      alert("There was an error submitting the book.");
    }
  };

  return (
    <div className='px-4 my-2' >
      <h2 className='mb-8  text-3xl font-bold'>Upload A Book</h2>

      <form onSubmit={handleBookSubmit} className="flex lg:w-[1000px] flex-col gap-4">

        {/* book title */}
        <div className='flex gap-8'>
          <div className='lg:w-1/3'>
            <div className="mb-2 block ">
              <Label htmlFor="bookName" value="Book Name" />
            </div>
            <input className="border-2 border-black-500 rounded-md p-1" id="bookName" name='bookName' type="text" placeholder="Enter Book Name" required />
          </div>

          {/* author name */}
          <div className='lg:w-1/3'>
            <div className="mb-2 block">
              <Label htmlFor="authorName" value="Author Name" />
            </div>
            <input className="border-2 border-black-500 rounded-md p-1" id="authorName" name='authorName' type="text" placeholder="Enter Author Name" required />
          </div>
        </div>

        {/* seller id and category id */}
        <div className='flex gap-8'>
          <div className='lg:w-1/3'>
            <div className="mb-2 block">
              <Label htmlFor="seller" value="Seller Id" />
            </div>
            <input className="border-2 border-black-500 rounded-md p-1" id="sellerId" name='sellerId' type="number" placeholder="Enter Seller Id" required />
          </div>

          {/* Category Id*/}
          <div className='lg:w-1/3'>
            <div className="mb-2 block">
              <Label htmlFor="categoryId" value="Category Id " />
            </div>
            <input className="border-2 border-black-500 rounded-md p-1" id="categoryId" name='categoryId' type="number" placeholder="Enter Book categoryId" required />
          </div>
        </div>

        {/* image url and category*/}
        <div className='flex gap-8'>
          <div className='lg:w-1/3'>
            <div className="mb-2 block">
              <Label htmlFor="imgUrl" value="Image URL" />
            </div>
            <input className="border-2 border-black-500 rounded-md p-1" id="imgUrl" name='imgUrl' type="file" placeholder="Enter image URL" required />
          </div>

          {/* select category */}
          <div className='lg:w-1/3'>
            <div className="mb-2 block">
              <Label htmlFor="inputState" value="Book Category" />
            </div>
            <Select id='inputState' name='categoryName' className='w-full rounded' value={selectedBookCategory} onChange={handleChangeSelectedValue}>
              {
                bookCategories.map((option) =>
                  <option className='p-5' key={option} value={option}>{option}</option>
                )
              }
            </Select>
          </div>
        </div>

        {/* book price  and quantity*/}
        <div className='flex gap-8'>
          <div className='lg:w-1/3'>
            <div className="mb-2 block">
              <Label htmlFor="price" value="Book Price" />
            </div>
            <input className="border-2 border-black-500 rounded-md p-1" id="price" name='price' type="number" placeholder="Enter Book Price" required />
          </div>

          {/* Quantity */}
          <div className='lg:w-1/3'>
            <div className="mb-2 block">
              <Label htmlFor="quantity" value="Quantity" />
            </div>
            <input className="border-2 border-black-500 rounded-md p-1" id="quantity" name='quantity' type="number" placeholder="Enter Book Quantity" required />
          </div>
        </div>

        {/*Book Description and submit button*/}
        <div className='flex gap-8'>
          <div className='lg:w-1/3'>
            <div className="mb-1 block">
              <Label htmlFor="description" value="Book Description" />
            </div>
            <Textarea name="description" id="description" placeholder='Write book description...' required className='w-full' rows={5} />
          </div>
          {/* Submit Button */}
          <div>
            <button type="submit" className="lg:w-36 mx-16 h-9 mt-16 bg-blue-500 text-white font-bold py-2 px-4 rounded">Upload Book</button>
          </div>
        </div>

      </form>
    </div>
  )
}

export default UploadBooks