import React from 'react';
import { Helmet } from 'react-helmet-async';

const SetPageTitle = ({ title }) => {
    return (
        <Helmet>
            <title> {title} - Luxury Car </title>
        </Helmet>

    )
}

export default SetPageTitle