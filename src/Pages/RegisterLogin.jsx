import React, { useState } from 'react';
import Login from '../components/Login/Login';
import img from '../images/login.svg';
import Register from './../components/Register/Register';
import { faGoogle } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import useMongoFirebase from '../Hooks/useMongoFirebase';
import swal from 'sweetalert';
import { useLocation, useNavigate } from 'react-router';

const RegisterLogin = () => {
    const { firebaseContext: { googleSignIn, signInUser, logOut, signUpUser, isLoading, firebaseError, firebaseData, name, setName } } = useMongoFirebase();
    const btnData = ["Login", "Register"];

    const navigate = useNavigate();
    const location = useLocation();
    const redirect_Uri = location.state?.from || "/"; 

    return (
        <div className="container mx-auto px-8 py-20">
            <div className="flex flex-col md:flex-row items-center justify-between gap-8">

                {
                    isLoading ? <img src="https://assets.materialup.com/uploads/fa8430a1-4dea-49d9-a4a3-e5c6bf0b2afb/preview.gif" alt="spinner" />
                        : <div className="md:w-1/2">

                            <div className="mx-auto text-center">
                                {
                                    btnData.map((item, index) => <button
                                        key={index}
                                        onClick={() => setName(item)}
                                        className={`py-2 mx-6 font-semibold outline-none  ${item === name ? "border-b-4 border-orange-400" : ""}`}>{item} </button>)
                                }

                            </div>

                            {
                                name === "Login" ? <Login redirect_Uri={redirect_Uri} /> : <Register />
                            }

                            <div className="text-center mt-6">
                                <p className="mb-2 text-xl font-permanent-marker font-semibold">Or sign in with </p>
                                <FontAwesomeIcon onClick={() =>  googleSignIn(navigate,redirect_Uri)} className="cursor-pointer text-xl text-orange-500" icon={faGoogle} />
                            </div>

                        </div>
                }


                <div className="md:w-1/2">
                    <img className="login-register-animation w-full h-96" src={img} alt="login-register-img" />
                </div>
            </div>
        </div>
    )
}

export default RegisterLogin;