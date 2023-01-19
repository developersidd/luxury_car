
import React, { useState } from 'react'
import { useNavigate } from 'react-router';
import useMongoFirebase from '../../Hooks/useMongoFirebase';
import swal from 'sweetalert';

const Login = ({ redirect_Uri }) => {
    const { firebaseContext: { inputData, signInUser, firebaseData, userData, setUserData, handleUserData } } = useMongoFirebase();

    const navigate = useNavigate();

    const passwordNotMatched = () => swal("Oppos!", "your password didn't matched", "warning");

    const handleLoginSubmit = (e) => {
        e.preventDefault();
        signInUser(userData?.logingEmail,userData?.logingPassword, userData?.logingPassword2 ,
            navigate, redirect_Uri, passwordNotMatched);
    }

    return (
        <div className="p-6 shadow-md rounded">
            <form onSubmit={handleLoginSubmit}>
                {
                    inputData?.slice(0, 3)?.map((item, index) =>
                        <input key={index} className="w-full outline-none p-3  rounded border-2 focus:border-orange-500 mb-4 text-sm" onChange={handleUserData} type={item.type} name={item.name} placeholder={item.placeholder} required />
                    )
                }
                {/*{firebaseError && <p className="text-sm text-red-600">{firebaseError}  </p>}*/}
                <button className="px-6 py-2 border-2 border-orange-500 rounded shadow mt-3" type="submit">Login </button>
            </form>

        </div>
    )
}

export default Login
