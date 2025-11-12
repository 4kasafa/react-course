import React from 'react';
import { useParams } from 'react-router-dom';

export default function User() {
    const { id } = useParams();
    return (
        <div className="py-16 bg-white min-h-screen">
            <div className="container m-auto px-6 text-gray-600 md:px-12 xl:px-6">
                <div className="space-y-6 md:space-y-0 md:flex md:gap-6 lg:items-center justify-center lg:gap-12">
                    <div className="md:h-4/12 lg:w-4/12">
                        <img
                            src="https://st3.depositphotos.com/6672868/13701/v/450/depositphotos_137014128-stock-illustration-user-profile-icon.jpg"
                            alt="User Avatar"
                            className="rounded-lg shadow-lg"
                        />
                    </div>
                    <div className="md:7/12 lg:w-6/12">
                        <h2 className="text-2xl text-gray-900 font-bold md:text-4xl">
                            User Profile
                        </h2>
                        <h3 className="text-xl text-gray-800 font-bold md:text-2xl mt-4">
                            Username: {id}
                        </h3>
                        <p className="mt-6 text-gray-600">
                            This is the profile page for the user '{id}'. This section can be used to display a detailed bio, user activity, or any other relevant information. The layout is designed to be clean and consistent with the rest of the application.
                        </p>
                        <p className="mt-4 text-gray-600">
                            You can fetch user-specific data based on the ID and populate this area with dynamic content. For now, this is just placeholder text to demonstrate the component's structure and styling.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}
