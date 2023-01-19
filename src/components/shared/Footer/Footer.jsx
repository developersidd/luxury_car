import React from 'react'
import img from "../../../images/electric-car.png"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebookF, faLinkedinIn, faInstagram, faGitAlt, faDribbble } from '@fortawesome/free-brands-svg-icons'
import { faChevronRight, faPhoneAlt, faEnvelope, faLocationArrow } from '@fortawesome/free-solid-svg-icons'
const Footer = () => {
const infoData = [
        {
            icon: faLocationArrow,
            name: "new york road, 125 USA"
        },
        {
            icon: faEnvelope,
            name: "support@luxurycar.com"
        },
        {
            icon: faPhoneAlt,
            name: "Phone: +18975 472 4893"
        }
    ]

    const links = [
        "Home",
        "Services",
        "About us",
        "Inventory",
        "Parts Shop",
        "Contact",
        "Latest Cars",
        "Featured Cars",
        "Sell Your Car",
        "Buy a Car",
        "Reviews",
        "Latest News"
    ];

    return (
        <div className="bg-gray-700 text-gray-400 py-8 lg:py10 px-5">

            <div className="container mx-auto">

                <div className="flex items-center justify-center flex-col">
                    <img className="w-16" src={img} alt="logo" />
                    <span className="font-bold text-xl text-orange-500 font-permanent-marker"> LUXURY CAR </span>
                </div>

                <div className="flex items-center justify-center gap-4 mt-4 text-lg mx-auto text-">

                    {
                        [faFacebookF, faLinkedinIn, faInstagram, faGitAlt, faDribbble].map((item, index) => <span key={index} className="w-8 h-8 flex items-center justify-center hover:bg-orange-600 transition-colors hover:text-white rounded-full bg-gray-800">
                            <FontAwesomeIcon icon={item} /> </span>
                        )
                    }
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-10 gap-6 mt-10 lg:px-6">
                    <div className="lg:col-span-3">

                        <p className="mb-8">  viverra quis, feugiat a, tellus. Phasellus viverra nulla ut metus varius laoreet. Quisque rutrum. Aenean imperdiet. Etiam ultricies nisi vel augue. Curabitur ullamcorper ultricies nisi.  </p>

                        {
                            infoData.map((item, index) => {
                                return (

                                    <div key={index} className="flex items-center gap-3 mb-2">
                                        <FontAwesomeIcon icon={item.icon} />
                                        <span>{item.name} </span>

                                    </div>
                                )
                            }
                            )
                        }


                    </div>
                    <div className="lg:col-span-2">
                        <h3 className="text-white text-xl font-bold mb-3">About Luxury Car </h3>
                        <ul>

                            {
                                links?.slice(0, 6)?.map((item, index) => <li key={index} className="hover:text-orange-600 mb-2">
                                    <FontAwesomeIcon icon={faChevronRight} /> {item} </li>
                                )
                            }
                        </ul>
                    </div>
                    <div className="lg:col-span-2">

                        <h3 className="text-white text-xl font-bold mb-3">Customer Links </h3>
                        <ul>

                            {
                                links?.slice(6)?.map((item, index) => <li key={index} className="hover:text-orange-600 mb-2">
                                    <FontAwesomeIcon icon={faChevronRight} /> {item} </li>
                                )
                            }
                        </ul>
                    </div>
                    <div className="lg:col-span-3">
                        <h3 className="text-white text-xl font-bold mb-3">Subscribe Newsletter </h3>
                        <p>Get our weekly newsletter for latest car news exclusive offers and deals and more. </p>
                        <input type="email" className="w-full px-3 py-3 my-3" placeholder="YOUR EMAIL" />
                        <input type="submit" className="px-6 py-3 bg-orange-500 font-semibold text-white" value="Submit" />

                    </div>
                </div>
                <div>
                    <p className="text-center pt-5"> Copyrights &copy; 2021 Luxury Car. All rights reserved.</p>
                </div>
            </div>
        </div>
    )
}

export default Footer
