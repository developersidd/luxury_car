import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import {
    Link, Route, Routes
} from "react-router-dom";
import SetPageTitle from '../components/SetPageTitle/SetPageTitle';
import useMongoFirebase from '../Hooks/useMongoFirebase';
import AddReview from './../components/AddReview/AddReview';
import LogOut from './../components/LogOut/LogOut';
import MakeAdmin from './../components/MakeAdmin/MakeAdmin';
import ManageAllOrders from './../components/ManageAllOrders/ManageAllOrders';
import ManageProducts from './../components/ManageProducts/ManageProducts';
import ManageUserOrders from './../components/ManageUserOrders/ManageUserOrders';
import WelcomeDashboard from './../components/WelcomeDashboard/WelcomeDashboard';
import AddAProduct from './AddAProduct';
import "./dashboard.css";

const Dashboard = () => {

    const [isOpen, setIsOpen] = useState(false);
    const toggleMenu = () =>{
        setIsOpen(!isOpen);
        console.log("Clicked")
    } 
        

    const { firebaseContext: { firebaseData } } = useMongoFirebase();
    const [isAdmin, setIsAdmin] = useState(false);

    // test a user for making an admin
    useEffect(() => {
        axios.get(`https://luxury-car-server-site.vercel.app/test_email/${firebaseData?.email}`)
            .then(res => {
                setIsAdmin(res.data);
            })

    }, [firebaseData.email]);
    return (
        <div className="relative">
            <SetPageTitle title="Dashboard" />
            <div className="block lg:hidden">
                <span onClick={toggleMenu} className="z-10 absolute top-6 bg-white left-10 px-6 py-2 shadow cursor-pointer ">
                    <FontAwesomeIcon className="text-2xl" icon={isOpen ? faTimes : faBars} />
                </span>
            </div>

            <div className="flex justify-between">
                <div className={`${isOpen ? "dashboard-active" : ""} dashboard-navbar w-1/2 md:w-1/5  sticky top-0 h-screen bg-gradient-to-tr from-orange-400  to-orange-600`}>
                    <ul className="py-24 px-10 text-white font-lg flex flex-col gap-y-4">
                        <li>
                            <Link to="/dashboard/manage_orders"> Manage Orders </Link>
                        </li>

                        <li>
                            <Link to="/dashboard/add_review"> Review </Link>
                        </li>

                      {/*  <li>
                            <Link to="/dashboard/pay"> Pay </Link>
                        </li>*/}

                        <li>
                            <Link to="/dashboard/logout"> Logout </Link>
                        </li>
                        {
                            isAdmin.admin &&
                            <>
                                <li>
                                    <Link to="/dashboard/make_admin">Make an Admin</Link>
                                </li>

                                <li>
                                    <Link to="/dashboard/manage_products"> Manage products </Link>
                                </li>

                                <li>
                                    <Link to="/dashboard/manage_all_orders">  Manage All Orders </Link>
                                </li>

                                <li>
                                    <Link to="/dashboard/add_product">  Add Product </Link>
                                </li>
                            </>
                        }
                    </ul>
                </div>
                <div className="w-4/5 px-10 overflow-y-auto">
                    <Routes>
                        <Route path="/" element={              
                            <WelcomeDashboard />
                        } />

                        <Route path={`manage_orders`}
                        element={
                            <ManageUserOrders />
                        }
                        />

                        <Route path={`manage_all_orders`} 
                        element={
                            <ManageAllOrders />
                        }
                        />

                        <Route path={`make_admin`} 
                        element={
                            <MakeAdmin />
                        }
                        />

                        <Route path={`manage_products`}
                        element={
                           <ManageProducts />
                        }
                        />

                        <Route path={`add_review`}
                        element={
              
                            <AddReview />
                        }
                        />

                        <Route path={`add_product`}
                        element={
                           <AddAProduct />
                        }
                        />

                        <Route path={`logout`}
                        element={
                            <LogOut />
                        }
                        />


                    </Routes>
                </div>
            </div>
        </div>
    )
}

export default Dashboard;
