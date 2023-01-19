
import React from 'react';
import { useNavigate } from 'react-router';
import swal from 'sweetalert';
import useMongoFirebase from '../../Hooks/useMongoFirebase';

const Login = ({ redirect_Uri }) => {
    const { firebaseContext: { inputData, signInUser, firebaseData, userData, setUserData, handleUserData } } = useMongoFirebase();

    const navigate = useNavigate();

    const handleLoginSubmit = (e) => {
        e.preventDefault();
        if(userData.loginPassword.length < 6 && userData.loginPassword2.length < 6){
            return swal("oops!", "password must be grater than 6 character!", "warning");
           }
           
        if(userData.loginPassword !== userData.loginPassword2){
            return swal("oops!", "password and confirm password didn't mathced!", "warning");
           }

        signInUser(userData?.logingEmail,userData?.loginPassword, userData?.loginPassword2 ,
            navigate, redirect_Uri);
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
