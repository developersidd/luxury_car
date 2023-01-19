import { faMinus, faPlus } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState } from 'react';

const Faq = ({ question, answer }) => {

    const [isOpen, setIsOPen] = useState(false);

    return (
        <div className={`mb-5 ${isOpen && "mb-10"}`}>
            <div onClick={() => setIsOPen(!isOpen)} className={`cursor-pointer flex text-white font-semibold text-lg items-center gap-3 px-4 py-3 bg-orange-400 ${isOpen ? "rounded-t-md" : "rounded"} `}>
                <FontAwesomeIcon icon={isOpen ? faMinus : faPlus} />
                <h3>{question}? </h3>
            </div>
            <div className={`transition-all duration-100  ${isOpen ? "visible h-24 mb-6" : "invisible h-0 mb-0"}  `}>
                <p className="p-3 md:p-6 bg-orange-100 rounded-b-md ">{answer} </p>
            </div>
        </div>
    )

}

export default Faq
