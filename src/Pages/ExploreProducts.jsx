import React from 'react'
import useMongoFirebase from './../Hooks/useMongoFirebase';
import HowManyPd from './../components/HowManyPd/HowManyPd';

const ExploreProducts = () => {
    const { mongoContext: { productsData } } = useMongoFirebase();
  
    return (
        <HowManyPd data={productsData} />
    )
}

export default ExploreProducts