import { Delete } from '@mui/icons-material';
import { Button } from '@mui/material';
import axios from 'axios';
import React from 'react';
import swal from 'sweetalert';

const DisplayPd = ({ data, isLoading, deleteBtn }) => {
    
    // delete a product
    const handleProductDelete = (id) => {    
        axios.delete(`https://luxury-car-server-site.vercel.app/${id}`)
            .then(res => {
                swal("Superb!", "Product Deleted successfully", "success");
            });
    };
    
    if (isLoading) {
       return <div className="h-screen flex items-center justify-center">
        <img src="https://assets.materialup.com/uploads/fa8430a1-4dea-49d9-a4a3-e5c6bf0b2afb/preview.gif" alt="spinner-img" />
    </div>
    }

    return (
        <div className="py-10">
            <div>
                {
                    data.length > 0 ?
                        data.map((item, n) => {
                            const { _id, date, displayName, image, name, price } = item;
                            return (
                                <div key={n} className="mb-5 px-12 rounded shadow flex items-center justify-between">
                                    <img className="w-44 h-36" src={`data:image/png;base64,${image}`} alt="pd-img" />
                                    <h3>{name} </h3>
                                    <h3>${price} </h3>
                                    <h3>{date} </h3>
                                    <h3>{displayName} </h3>
                                    {deleteBtn && <Button variant="contained" style={{background: "#b71c1c"}} size="medium" startIcon={<Delete />}  onClick={() => handleProductDelete(_id)}>  Product</Button>}
                                </div>
                            )
                        })
                        : <div className="h-screen flex items-center justify-center">
              <h1 className="text-2xl md:text-3xl lg:text-4xl font-semibold">You didn't add any product </h1>
                        </div>
                }

            </div>

        </div>
    )
}

export default DisplayPd
