import axios from 'axios';
import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify';
import logo from "../CategoryImgs/logo2.png"
export const RegisterComp = () => {
    const nav = useNavigate();
    const [register, setRegister] = useState({
        firstName: "",
        lastName: "",
        email: "",
        password: "",
        mobileNumber: "",
        city: "",
        state: "",
        country: "",
        role: "SELLER"
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setRegister({ ...register, [name]: value });
    };


    const handleSubmit = async (e) => {
        e.preventDefault(); // Prevent default form submission behavior
        try {
            console.log(register);
            const response = await axios.post('http://localhost:8080/user/addUser', register);
            console.log(response);
            setRegister(" ")
            nav("/login")
            toast.success("Registered")

        } catch (error) {
            console.error('Error Registering in:', error);
            toast.error("Registering failed. Please fill again.");
        }
    };

    return (
        <section className="bg-gray-50 h-screen dark:bg-gray-900">
           

         
                <img class="w-32  m-auto  h-32 " href="/" src={logo} alt="logo" />
            <div className="flex flex-row items-center justify-center px-6 py-8 mx-auto md:h-screen m-40 lg:py-0">

                <div className="w-full bg-slate-200 rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
                    <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                        <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                            Create an account
                        </h1>
                        <form onSubmit={handleSubmit} className="space-y-4 md:space-y-6" action="#">
                            <div>
                                <label for="firstName" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your First Name</label>
                                <input type="text" name="firstName" id="firstName" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Enter Your First Name" required value={register.firstName}
                                    onChange={handleChange} />

                                <label for="lastName" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your Last Name</label>
                                <input type="text" name="lastName" id="lastName" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Enter Your First Name" required value={register.lastName}
                                    onChange={handleChange} />
                            </div>
                            <div>
                                <label for="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your email</label>
                                <input type="email" name="email" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="name@email.com" required value={register.email}
                                    onChange={handleChange} />

                                <label for="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Password</label>
                                <input type="password" name="password" id="password" placeholder="••••••••" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required value={register.password}
                                    onChange={handleChange} />
                            </div>
                            <div>
                                <label for="mobileNumber" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Phone Number</label>
                                <input type="number" name="mobileNumber" id="mobileNumber" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Phone Number" required value={register.mobileNumber}
                                    onChange={handleChange} />

                                <label for="city" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">City</label>
                                <input type="text" name="city" id="city" placeholder="Enter City Name" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required value={register.city}
                                    onChange={handleChange} />

                                <label for="state" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">State</label>
                                <input type="text" name="state" id="state" placeholder="Enter State" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required value={register.state}
                                    onChange={handleChange} />

                                <label for="country" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Country</label>
                                <input type="text" name="country" id="country" placeholder="Enter country" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required value={register.country}
                                    onChange={handleChange} />
                            </div>


                            <button
                                type="submit"
                                className="flex w-full justify-center rounded-md bg-blue-700 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
                            >
                                Register
                            </button>
                            <p className="text-sm font-light text-gray-500 dark:text-gray-400">
                                Already have an account? <Link to="/login" className="font-medium text-primary-600 hover:underline dark:text-primary-500">Login here</Link>
                            </p>
                        </form>
                    </div>
                </div>
            </div>
        </section>

    )
}

