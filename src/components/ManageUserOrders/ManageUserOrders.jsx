import axios from 'axios';
import React, { useEffect, useState } from 'react';
import DisplayPd from '../DisplayOrders/DisplayPd';
import SetPageTitle from '../SetPageTitle/SetPageTitle';
import useMongoFirebase from './../../Hooks/useMongoFirebase';

const ManageUserOrders = () => {

    const [userOrders, setUserOrders] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    const { firebaseContext: { firebaseData } } = useMongoFirebase();

    // get all orders of specific user orders
    useEffect(() => {
        setIsLoading(true);
        axios.get(`https://luxury-car-server-site.vercel.app/user_orders/${firebaseData?.email}`)
            .then(res => {
                setUserOrders(res.data);
                setIsLoading(false);
            })
    }, [firebaseData?.email]);

    return (
        <div>
            <SetPageTitle title="Manage Orders" />
            <DisplayPd data={userOrders} isLoading={isLoading} />
        </div>
    )
}

export default ManageUserOrders
