import React from 'react';
import useMongoFirebase from '../../Hooks/useMongoFirebase';
import SetPageTitle from '../SetPageTitle/SetPageTitle';
import DisplayPd from './../DisplayOrders/DisplayPd';

const ManageProducts = () => {
    const { mongoContext: { productsData } } = useMongoFirebase();

    return (
        <div>
            <SetPageTitle title="Manage Products" />
            <DisplayPd data={productsData} deleteBtn />
        </div>
    )
}

export default ManageProducts
