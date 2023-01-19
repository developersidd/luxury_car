import React from 'react'
import SetPageTitle from '../SetPageTitle/SetPageTitle';
import useMongoFirebase from './../../Hooks/useMongoFirebase';
import DisplayPd from './../DisplayOrders/DisplayPd';

const ManageAllOrders = () => {

    const { mongoContext: { allOrders, isFetching } } = useMongoFirebase();

    return (
        <div>
            <SetPageTitle title="Manage All Orders" />
            <DisplayPd data={allOrders} isFetching={isFetching} />
        </div>
    )
}

export default ManageAllOrders
