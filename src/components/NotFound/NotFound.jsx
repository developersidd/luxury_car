import React from 'react'
import { NavLink } from 'react-router-dom';

const NotFound = () => {
    return (
        <div className="h-64 flex items-center justify-center flex-col">
            <p>The page you want to go is currently unavailable! 🤕 </p>
            <button className="mt-6 px-6 py-3 border-2 border-orange-500">
                <NavLink to="/">BACK TO HOME </NavLink>
            </button>
        </div>
    )
}

export default NotFound
