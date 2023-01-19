import React from 'react'
import useMongoFirebase from './../../Hooks/useMongoFirebase';
import DisplayPd from './../DisplayOrders/DisplayPd';

const ManageAllOrders = () => {

    const { mongoContext: { allOrders, isFetching } } = useMongoFirebase();

    return (
        <div>
            <DisplayPd data={allOrders} isFetching={isFetching} />
        </div>
    )
}

export default ManageAllOrders
