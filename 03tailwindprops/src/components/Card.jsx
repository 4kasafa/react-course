import React from 'react'

function Card({userName, role, city, img, comments}) {
    
    return (
        <div className="flex flex-col md:flex-row items-center bg-[#0d1117] text-white p-6 shadow-lg max-w-4xl mx-auto">
            <div className="shrink-0 mb-6 md:mb-0 md:mr-8">
                <img
                src={img}
                alt="Profile"
                className="w-48 h-48 object-cover rounded-xl border border-gray-700"
                />
            </div>
            <div>
                <p className="text-lg text-gray-300 mb-4">
                “{comments}.”
                </p>
                <h3 className="text-sky-400 font-semibold">{userName}</h3>
                <p className="text-gray-500">{role} {city && `, ${city}`}</p>
            </div>
        </div>
    );
};

export default Card;