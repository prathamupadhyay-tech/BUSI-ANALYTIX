import React, { useState } from 'react';
import axios from 'axios'
import { Navigate } from 'react-router-dom';
const Login = ({isLoggedIn , setisLoggedIn , setuserid}) => {
    const [email , setEmail] = useState("");
    const [firstName , setfirstName] = useState("");
    const [lastName , setlastName] = useState("");
    const [password , setPassword] = useState("");
    const handleSubmit = async (e) => {
        e.preventDefault();
        try{
            const payload = await axios.post("http://localhost:4000/api/user/signup" , {firstName , lastName , email , password});
            console.log(payload);
            localStorage.setItem("token", payload.data.token);
            localStorage.setItem("user", JSON.stringify(payload.data));
            setisLoggedIn(true)
            setuserid(payload.data.user._id)
          }catch(err){
           console.log(err);
           alert("Something Went Wrong");
         }
         setEmail("");
         setPassword("");
    }
    if(isLoggedIn) return <Navigate to ="/shop"/>
    return (
        <>
            <section className="bg-gray-50 dark:bg-gray-900">
                <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
                    <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
                        <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                            <h1 className="text-2xl text-center font-bold leading-tight tracking-tight text-teal-400 md:text-2xl dark:text-white">
                                Sign Up to create an account
                            </h1>
                            <form onSubmit = {handleSubmit}className="space-y-4 md:space-y-6" action="#">
                                <div>
                                    <label for="email" className="block mb-2 text-base font-medium text-gray-900 dark:text-white">First name</label>
                                    <input value = {firstName} onChange = {(e) => setfirstName(e.target.value)} type="text" name="email" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Enter your name" required="" />
                                </div>
                                <div>
                                    <label for="email" className="block mb-2 text-base font-medium text-gray-900 dark:text-white">Last name</label>
                                    <input value = {lastName} onChange = {(e) => setlastName(e.target.value)}type="text" name="email" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Enter your name" required="" />
                                </div>
                                <div>
                                    <label for="email" className="block mb-2 text-base font-medium text-gray-900 dark:text-white">Your email</label>
                                    <input value = {email} onChange = {(e) => setEmail(e.target.value)} type="email" name="email" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="name@company.com" required="" />
                                </div>
                                <div>
                                    <label for="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Password</label>
                                    <input value = {password} onChange = {(e) => setPassword(e.target.value)}type="password" name="password" id="password" placeholder="••••••••" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required="" />
                                </div>
                                

                                <button type="submit" className="w-full text-white bg-teal-400 hover:bg-teal-500 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-base px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">Sign Up</button>
                                <p className="text-base font-normal text-gray-800 dark:text-gray-400">
                                    Have an account already? <a href="/login" className="font-medium text-lg text-teal-500 hover:underline dark:text-primary-500">Login</a>
                                </p>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
        </>


    );
}

export default Login;
