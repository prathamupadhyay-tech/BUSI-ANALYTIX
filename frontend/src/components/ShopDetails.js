import React, { useState } from 'react';
import axios from 'axios'
import { Navigate } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import "../css/productDetails.css"
const ShopDetails = ({ set, toggleCross, userid }) => {
    const [name, setName] = useState("");
    const navigate = useNavigate();
    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const payload = await axios.post("http://localhost:4000/api/user/shop/add", { name, id: userid });
            console.log(payload);
            set(prev => { return [...prev, payload.data] })
            toggleCross();
        }
        catch {
            alert("Something Went Wrong");

        }
        setName("")
    }
    return (
        <div className="main-product-details-container">
            <div className="cross-btn-div">
                <div onClick={toggleCross} >
                    <div className="cross-1"></div>
                    <div className="cross-2"></div>
                </div>

            </div>

            <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
                <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                    <h1 className="text-2xl text-center font-bold leading-tight tracking-tight text-teal-400 md:text-2xl dark:text-white">
                        Add Shop
                    </h1>
                    <form onSubmit={handleSubmit} className="space-y-4 md:space-y-6" action="#">
                        <div>
                            <label for="email" className="block mb-2 text-base font-medium text-gray-900 dark:text-white">Shop Name</label>
                            <input value={name} onChange={(e) => setName(e.target.value)} type="text" name="email" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Name of shop" required="" />
                        </div>

                        <button type="submit" className="w-full text-white bg-teal-400 hover:bg-teal-500 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-base px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">Submit</button>

                    </form>
                </div>
            </div>


        </div>



    );
}

export default ShopDetails;