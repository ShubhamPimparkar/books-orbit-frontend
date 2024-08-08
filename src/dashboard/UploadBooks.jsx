import React, { useState } from 'react'
import { Button, Checkbox, Label, Select, TextInput } from "flowbite-react";
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

  const handleChangeSelectedValue = (event) => {
    console.log(event.target.value);
    setSelectedBookCategory(event.target.value);
  }

  return (
    <div className='px-4 my-12'>
      <h2 className='mb-8  text-3xl font-bold'>Upload A Book</h2>

      <form className="flex lg:w-[1180px] flex-col gap-4">
        {/* 1st row */}
        {/* book title */}
        <div className='lg:w-1/2'>
          <div className="mb-2 block">
            <Label htmlFor="bookTitle" value="Book Title" />
          </div>
          <TextInput id="bookTitle" name='bookTitle' type="text" placeholder="Enter Book Name" required shadow />

          {/* author name */}
          <div className='lg:w-1/2'>
            <div className="mb-2 block">
              <Label htmlFor="authorName" value="Author Name" />
            </div>
            <TextInput id="authorName" name='authorName' type="text" placeholder="Enter Author Name" required shadow />
          </div>
        </div>

        {/* 2nd row */}
        {/* image url */}
        <div className='lg:w-1/2'>
          <div className="mb-2 block">
            <Label htmlFor="imageURL" value="Image URL" />
          </div>
          <TextInput id="imageURL" name='imageURL' type="text" placeholder="Enter Image URL" required shadow />

          {/* select category */}
          <div className='lg:w-1/2'>
            <div className="mb-2 block">
              <Label htmlFor="inputState" value="Book Category" />
            </div>
            <Select id='inputState' name='categoryName' className='w-full rounded' value={selectedBookCategory} onChange={handleChangeSelectedValue}>
              {
                bookCategories.map((option) =>
                  <option key={option} value={option}>{option}</option>
                )
              }
            </Select>
          </div>
        </div>

        {/*Book Description */}
        
      </form>
    </div>
  )
}

export default UploadBooks