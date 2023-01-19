import React, { useState } from 'react';
import useMongoFirebase from '../Hooks/useMongoFirebase';

const AddAProduct = () => {
    const [image, setImage] = useState(null);
    const { firebaseContext: { inputData, firebaseData, userData, setUserData, handleUserData } } = useMongoFirebase();

    const handleAddProduct = (e) => {
        e.preventDefault();

        const { name, description, cc, condition, fuel, price } = userData;
        const formData = new FormData();
        formData.append("name", name);
        formData.append("description", description);
        formData.append("image", image);
        formData.append("price", price);
        formData.append("fuel", fuel);
        formData.append("condition", condition);
        formData.append("cc", cc);

        fetch("https://luxury-car-server-site.vercel.app/add_product_db", {
            method: 'POST',
            body: formData
        })
            .then(data => data.json())
            .then(res => {
                if (res.insertedId) {
                    alert("added successfully")
                    //e.target.reset();
                    }
            }).catch(error =>{
                alert(error?.message);
            })
    }

    return (
        <div className="p-10">
            <div className="p-6 shadow-md rounded">
                <form onSubmit={handleAddProduct}>
                    {
                        inputData?.slice(12)?.map((item, index) =>
                            <input key={index} className="w-full outline-none p-3  rounded border-2 focus:border-orange-500 mb-4 text-sm" onChange={handleUserData} type={item.type} name={item.name} placeholder={item.placeholder} required />
                        )
                    }
                    <input onChange={e => setImage(e.target.files[0])} className="block" accept="image/*" type="file" required />
                    <button className="px-6 py-2 border-2 border-orange-500 rounded shadow mt-3" type="submit">Add Now</button>
                </form>

            </div>
        </div>
    )
}

export default AddAProduct
