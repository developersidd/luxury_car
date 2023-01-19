import React from 'react';
import SetPageTitle from '../components/SetPageTitle/SetPageTitle';
import HowManyPd from './../components/HowManyPd/HowManyPd';
import useMongoFirebase from './../Hooks/useMongoFirebase';

const ExploreProducts = () => {
    const { mongoContext: { productsData } } = useMongoFirebase();
  
    return (
        <>
                    <SetPageTitle title="Explore Products" />
        <HowManyPd data={productsData} />
        </>
    )
}

export default ExploreProducts