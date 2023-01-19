import { faCar } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react'
import SinglePd from './../SinglePd/SinglePd'
import Skeleton from "react-loading-skeleton";
import 'react-loading-skeleton/dist/skeleton.css'

const HowManyPd = ({ data }) => {
    return (
        <div className="container mx-auto px-6 py-8 lg:py-20">

            <div className="mx-auto text-center">
                <span className="p-4 rounded-full bg-orange-500 text-white"><FontAwesomeIcon className="text-2xl" icon={faCar} /> </span>
                <h2 className="font-bold font-permanent-marker my-6  text-2xl md:text-3xl lg:text-4xl">Out Latest Car Collection </h2>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-9 mt-20">
                {
                    data.length > 0 ?
                        data?.map(item => <SinglePd  key={item._id} {...item} />)
                        : ([...Array(6).keys()].map((item, n) => {
                            return (
                                <div key={n} className="p-5 shadow rounded-md">
                                    <Skeleton className="mb-4" width="100%" height="200px" />
                                    <Skeleton className="mb-4" width="11rem" height="20px" />
                                    <Skeleton className="" count="4" width="100%" height="14px" />
                                    <Skeleton className="rounded mt-4"  width="5rem" height="2rem" />
                                    </div>
                            )
                        }))
                }


            </div>
        </div>
    )
}

export default HowManyPd
