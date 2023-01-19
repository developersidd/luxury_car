import React from 'react'
import useMongoFirebase from '../../Hooks/useMongoFirebase';
import DisplayPd from './../DisplayOrders/DisplayPd';

const ManageProducts = () => {
    const { mongoContext: { productsData } } = useMongoFirebase();

    return (
        <div>
            <DisplayPd data={productsData} deleteBtn />
        </div>
    )
}

export default ManageProducts
