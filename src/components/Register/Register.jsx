import React, { useState } from 'react'
import useMongoFirebase from '../../Hooks/useMongoFirebase';

const Register = () => {
    const { firebaseContext: { inputData, signUpUser, logOut, setName, setGender, userData,  handleUserData } } = useMongoFirebase();

    const handleRegisterSubmit = (e) => {
        e.preventDefault();
        signUpUser(userData?.registerName,userData?.registerEmail,userData?.registerPassword,setName);
        e.target.reset();
    }

    return (
        <div className="p-6 shadow-md rounded">
            <form onSubmit={handleRegisterSubmit}>
                {
                    inputData?.slice(3, 6)?.map((item, index) =>
                        <input key={index} className="w-full outline-none p-3 rounded border-2 focus:border-orange-500 mb-4 text-sm" onChange={handleUserData} type={item.type} name={item.name} placeholder={item.placeholder} required />
                    )
                }
                <div className="flex items-center mb-5 gap-3">
                    <p className="text-gray-500">Select your Gender: </p>
                    <div className="flex items-center gap-1">
                        <label htmlFor="male">Male </label>
                        <input onChange={(e) => setGender(e.target.id)} type="radio" name="radio" id="male" />
                    </div>
                    <div className="flex items-center gap-1">
                        <label htmlFor="female">Female </label>
                        <input onChange={(e) => setGender(e.target.id)} type="radio" name="radio" id="female" />
                    </div>
                </div>


                <button className="px-6 py-2 shadow border-2 border-orange-500 rounded" type="submit">Register </button>

            </form>

        </div>
    )
}

export default Register;