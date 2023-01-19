import axios from 'axios';
import React, { useState } from 'react';
import swal from 'sweetalert';

const MakeAdmin = () => {

    const [email, setEmail] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        const user = { email };
        axios.put("https://luxury-car-server-site.vercel.app/set_admin_role", user)
            .then(res => {
                swal(`OWW`, "user made admin successfully", "success");
            });
        e.target.reset();
    }

    return (
        <div className="my-20">
            <div>
                <form onSubmit={handleSubmit} className="w-3/6 mx-auto  p-5 shadow rounded">
                    <input className="px-4 py-3 outline-none border-2 w-full mb-4" onChange={(e) => setEmail(e.target.value)} type="text" placeholder="enter email address" />
                    <input className="px-7 py-3 border-2 border-orange-600 rounded shadow" type="submit" value="Submit" />
                </form>
            </div>
        </div>
    )
}

export default MakeAdmin
