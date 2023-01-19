import React from 'react'
import useMongoFirebase from '../../Hooks/useMongoFirebase';

const WelcomeDashboard = () => {

    const {firebaseContext: {firebaseData}} = useMongoFirebase();

    return (
        <div>
            <h1 className="text-center py-12 text-3xl font-permanent-marker">Welcome To Dashboard <span className="text-orange-500 font-bold">  {firebaseData?.displayName} </span> </h1>
        </div>
    )
}

export default WelcomeDashboard
