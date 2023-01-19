import axios from 'axios';
import React from 'react';
import useMongoFirebase from '../../Hooks/useMongoFirebase';
import SetPageTitle from '../SetPageTitle/SetPageTitle';

const AddReview = () => {

    const { firebaseContext: { userData, setUserData, handleUserData, inputData, firebaseData } } = useMongoFirebase();

    const handleAddToDb = (e) => {
        e.preventDefault();
        const date = new Date().toLocaleString();
        const { rating, message } = userData;
        const { displayName, photoURL } = firebaseData;
        const newData = { rating, message, date, displayName, photoURL };
        // post to the db of user infomation
        axios.post("https://luxury-car-server-site.vercel.app/add_review_db", newData)
            .then(res => {
                if (res.statusText === "OK") {
                    alert("added successfully")
                }
            });
    }


    return (
        <div className="pt-20 px-16">
                        <SetPageTitle title="Add Review" />

            <form onSubmit={handleAddToDb}>
                {
                    inputData?.slice(10, 12)?.map((item, index) =>
                        <input key={index} className="w-full outline-none p-3 rounded border-2 focus:border-orange-500 mb-4 text-sm" onChange={handleUserData} type={item.type} name={item.name} placeholder={item.placeholder} required />
                    )
                }
                <button className="px-6 py-2 shadow border-2 border-orange-500 rounded-full" type="submit">Submit </button>
            </form>



        </div>
    )
}

export default AddReview
