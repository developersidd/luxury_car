import { faCheck, faGasPump, faTachometerAlt } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import swal from 'sweetalert';
import SetPageTitle from '../../components/SetPageTitle/SetPageTitle';
import useMongoFirebase from '../../Hooks/useMongoFirebase';

const ProductDetails = () => {
    const { id } = useParams();
    const { firebaseContext: { inputData, firebaseData }, mongoContext: { handleUserInfo, userInfo, setUserInfo } } = useMongoFirebase();
    const [singleProductData, setSingleProductsData] = useState({});
    const { image, name, description, fuel, condition, cc, price, _id } = singleProductData
    const { displayName, email } = firebaseData;

    // get a specific product data
    useEffect(() => {
        axios.get(`https://luxury-car-server-site.vercel.app/${id}`)
            .then(res => {
                setSingleProductsData(res.data);
            })
    }, [id]);


    const handleAddToDb = (e) => {
        e.preventDefault();
        const date = new Date().toLocaleString();
        const newData = { ...userInfo, date, displayName, email, productId: _id, image, name, price };

        // post to the db of user infomation
        axios.post("https://luxury-car-server-site.vercel.app/add_to_order", newData)
            .then(res => {
                if (res.statusText === "OK") {
                    swal(`Extraordinary!`, "Your order successfully added to the cart", "success");
                    e.target.reset();
                }
            });
    }

    return (
        <div className="container mx-auto px-6 py-10 md:py-20">

            <SetPageTitle title={`${name}`} />
            <div className="flex  flex-col md:flex-row items-center justify-center md:justify-between gap-6">
                <div className="md:w-1/2">
                    <img className="w-4/5 h-72 mx-auto md:mx-0" src={`data:image/png;base64,${image}`} alt="car-img" />
                </div>

                <div className="md:w-1/2 lg:pr-20">
                    <h3 className="text-2xl md:text-3xl lg:text-4xl font-semibold mb-3 md:mb-0">{name} </h3>
                    <p className="mb-3 text-gray-500 leading-tight">{description} </p>
                    <div className="flex flex-col md:flex-row justify-between items-stretch md:items-center">
                        <button className="text-2xl font-semibold mb-3 sm:mb-0  outline-none"> ${price} </button>
                        <button className="px-4 mb-4 md:mb-0 py-2 font-semibold  outline-none  bg-orange-500 rounded shadow text-white">
                            <FontAwesomeIcon className="mr-1" icon={faGasPump} />
                            <span>{fuel} </span>
                        </button>

                        <button className="px-4 mb-4 md:mb-0 py-2 font-semibold  outline-none  bg-orange-500 rounded shadow text-white">
                            <FontAwesomeIcon className="mr-1" icon={faTachometerAlt} />
                            <span>{cc} </span>
                        </button>

                        <button className="px-4 mb-4 md:mb-0 py-2 font-semibold  outline-none  bg-orange-500 rounded shadow text-white">
                            <FontAwesomeIcon className="mr-1" icon={faCheck} />
                            <span>{condition} </span>
                        </button>

                    </div>
                </div>
            </div>

            <div className="w-full md:w-3/4 mx-auto p-5 shadow-lg mt-10">
                <form onSubmit={handleAddToDb}>
                    {
                        inputData?.slice(6, 10)?.map((item, index) =>
                            <input key={index} className="w-full outline-none p-3 rounded border-2 focus:border-orange-500 mb-4 text-sm" onChange={handleUserInfo} type={item.type} name={item.name} placeholder={item.placeholder} required />
                        )
                    }
                    <button className="px-6 py-2 shadow border-2 border-orange-500 rounded-full" type="submit">Add to Cart </button>
                </form>

            </div>


        </div>
    )
}

export default ProductDetails
