import React from 'react'
import { useLocation } from 'react-router';
import useMongoFirebase from '../../Hooks/useMongoFirebase';
import HowManyPd from '../HowManyPd/HowManyPd';

const Products = () => {
    const { mongoContext: { productsData } } = useMongoFirebase();
    return (
        <HowManyPd data={productsData.slice(0,6)} />
    )
}

export default Products;