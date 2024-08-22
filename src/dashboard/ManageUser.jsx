import React, { useEffect,useState } from 'react'
import { Table } from "flowbite-react";

import { toast } from 'react-toastify';

export const ManageUser = () => {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    fetch("http://localhost:8080/user")
      .then(res => res.json())
      .then(data => {

        if (Array.isArray(data)) {
          setUsers(data);
        } else {
          console.error('Unexpected response format:', data);
        }
      })
      .catch(error => console.error('Error fetching Users:', error));
  }, []);

  const handleDelete = (uid) => {
    fetch(`http://localhost:8080/user/${uid}`, {
      method: "DELETE",
    })
    .then(res => res.json())
    .then(data => {
      toast.success("User is deleted successfully");

      if (Array.isArray(data)) {
        setUsers(data); 
      } else {
        setUsers(user => user.filter(book => book.userId !== uid));
      }
    })
    .catch(error => console.error('Error deleting User:', error));
  }

  return (
    <div className="px-4 my-12">
    <h2 className="mb-8 text-3xl font-bold">Manage Users</h2>
    <Table hoverable className='float-right lg:w-[1000px]'>
      <Table.Head>
        <Table.HeadCell>UserID</Table.HeadCell>
        <Table.HeadCell>User First Name</Table.HeadCell>
        <Table.HeadCell>Last Name</Table.HeadCell>
        <Table.HeadCell>Address</Table.HeadCell>
        <Table.HeadCell>Email</Table.HeadCell>
        <Table.HeadCell>Mobile Number</Table.HeadCell>
        <Table.HeadCell>
          Manage
        </Table.HeadCell>
      </Table.Head>
      { 
        Array.isArray(users)   && users.length > 0 ? (
          users.map((user) => (
            <Table.Body key={user.userId} className="divide-y hover:bg-slate-100 text-center">
              <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800 hover:bg-slate-100">
                <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                  {user.userId}
                </Table.Cell>
                <Table.Cell>{user.firstName}</Table.Cell>
                <Table.Cell>{user.lastName}</Table.Cell>
                <Table.Cell>{user.city}</Table.Cell>
                <Table.Cell>{user.email}</Table.Cell>
                <Table.Cell>{user.mobileNumber}</Table.Cell>
                
                <Table.Cell>
                  
                  <button onClick={() => handleDelete(user.userId)} className='bg-red-600 py-1 font-semibold text-white rounded-lg px-4 ml-5'>Delete</button>
                </Table.Cell>
              </Table.Row>
            </Table.Body>
          ))
        ) : (
          <Table.Body className="divide-y hover:bg-slate-100">
            <Table.Row>
              <Table.Cell mt-5 colSpan={6} className="text-center">No Users available</Table.Cell>
            </Table.Row>
          </Table.Body>
        )
      }
    </Table>
  </div>
  )
}
