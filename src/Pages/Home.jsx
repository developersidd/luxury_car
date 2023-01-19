import React from 'react';
import SetPageTitle from '../components/SetPageTitle/SetPageTitle';
import Banner from './../components/Banner/Banner';
import Products from './../components/Products/Products';
import Reviews from './../components/Reviews/Reviews';
import FaqPage from './FaqPage';

const Home = () => {
    return (
        <div>
            <SetPageTitle title="Home" />
            <main>
                <section><Banner /></section>
                <section><Products /></section>
                <section><Reviews /></section>
                <section><FaqPage /></section>
            </main>
        </div>
    )
}

export default Home
