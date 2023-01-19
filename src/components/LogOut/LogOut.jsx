import React from 'react'
import useMongoFirebase from '../../Hooks/useMongoFirebase';

const LogOut = () => {
        const {firebaseContext: {firebaseData, logOut}} = useMongoFirebase();

    return (
        <div className="flex flex-col h-screen items-center justify-center">
            <p className="text-2xl font-semibold">Welcome {firebaseData?.displayName} to logout page.  </p>
            <button onClick={logOut} className="mt-6 px-6 py-3 border-2 border-orange-500">
                 Logout
            </button>

        </div>
    )
}

export default LogOut
