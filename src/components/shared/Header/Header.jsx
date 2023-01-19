import { faBars, faSignOutAlt, faTimes } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import img from "../../../images/electric-car.png";
import useMongoFirebase from './../../../Hooks/useMongoFirebase';
import "./Header.css";
const Header = () => {

    // menu toggle function
    const [isOpen, setIsOpen] = useState(false);
    const toggleMenu = (e) => {
        e.stopPropagation();
        setIsOpen(!isOpen)
    };

    const { firebaseContext: { logOut, firebaseData } } = useMongoFirebase();
console.log(firebaseData.photoURL);
    return (
        <div className="shadow px-5">
            <div className="container mx-auto flex items-center justify-between h-20">

                <NavLink to="/" className="flex items-center gap-2 ">
                    <img className="w-11" src={img} alt="logo" />
                    <span className="font-bold text-xl text-orange-500 font-permanent-marker"> LUXURY CAR </span>
                </NavLink>

                {/* background overlay */}
                <div style={{ backgroundColor: "rgba(0, 0, 0, 0.8)" }} className={`${isOpen ? "visible block" : "hidden invisible"} fixed inset-0 w-full h-screen`}></div>

                {/*  mobile navbar */}
                <div className={` ${isOpen ? "navbar-active" : ""} block md:hidden visible md:invisible  mobile-navbar z-20 bg-gradient-to-tr from-orange-500 to-orange-400`}>
                    <nav>
                        <ul onClick={() => setIsOpen(false)} className="font-semibold p-10 flex gap-3 justify-center h-screen  flex-col text-white">
                            <li>
                                <NavLink to="/">   Home  </NavLink>
                            </li>
                            <li>
                                <NavLink to="/explore_cars"> Explore Cars  </NavLink>
                            </li>
                            <li>
                                <NavLink to="/reviews">  Reviews   </NavLink>
                            </li>
                            <li>
                                <NavLink to="/faq">  FAQ   </NavLink>
                            </li>

                            {
                                firebaseData?.email ?

                                    <>

                                        <li>
                                            <NavLink to="/dashboard"> Dashboard     </NavLink>
                                        </li>

                                        <li>
                                            {firebaseData?.displayName}
                                        </li>

                                        <li>
                                        <img className="w-12 h-12 shadow  rounded-full" src={firebaseData.photoURL ? `${firebaseData.photoURL}` : "https://t3.ftcdn.net/jpg/03/46/83/96/360_F_346839683_6nAPzbhpSkIpb8pmAwufkC7c5eD7wYws.jpg"} alt="profile-img" />
                                        </li>

                                        {/*  navbar  */}

                                        <li>
                                            <NavLink to="/">
                                                <FontAwesomeIcon onClick={logOut} className="text-2xl cursor-pointer" icon={faSignOutAlt} />
                                            </NavLink>
                                        </li>
                                    </>
                                    :
                                    <li>
                                        <NavLink to="/register"> Register  </NavLink>
                                    </li>

                            }

                        </ul>
                    </nav>
                </div>

                <div className="hidden lg:block">
                    <nav>
                        <ul className="flex items-center gap-8 font-semibold">
                            <li>
                                <NavLink to="/">   Home  </NavLink>
                            </li>
                            <li>
                                <NavLink to="/explore_cars"> Explore Cars  </NavLink>
                            </li>
                            <li>
                                <NavLink to="/reviews">  Reviews   </NavLink>
                            </li>
                            <li>
                                <NavLink to="/faq">  FAQ   </NavLink>
                            </li>
                        </ul>
                    </nav>
                </div>

                <div className="hidden lg:block">

                    <ul className="flex items-center gap-4 font-semibold">

                        {
                            firebaseData?.email ?

                                <>

                                    <li>
                                        <NavLink to="/dashboard"> Dashboard     </NavLink>
                                    </li>

                                    <li>
                                        {firebaseData?.displayName}
                                    </li>

                                    <li>
                                        <img className="w-12 h-12 shadow  rounded-full" src={firebaseData?.photoURL ? firebaseData?.photoURL : "https://t3.ftcdn.net/jpg/03/46/83/96/360_F_346839683_6nAPzbhpSkIpb8pmAwufkC7c5eD7wYws.jpg"} alt="profile-img" />
                                    </li>

                                    {/*  navbar  */}

                                    <li>
                                        <NavLink to="/">
                                            <FontAwesomeIcon onClick={logOut} className="text-2xl cursor-pointer" icon={faSignOutAlt} />
                                        </NavLink>
                                    </li>
                                </>
                                :
                                <li>
                                    <NavLink to="/register"> Register  </NavLink>
                                </li>

                        }


                    </ul>
                </div>

                <div className="block lg:hidden">
                    <span onClick={toggleMenu} className="z-30 relative cursor-pointer ">
                        <FontAwesomeIcon className="text-2xl" icon={isOpen ? faTimes : faBars} />
                    </span>
                </div>

            </div>
        </div>
    )

}

export default Header;