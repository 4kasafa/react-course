import React, { useContext } from 'react'
import UserContext from "../context/UserContext"

/**
 * Profile Component
 * 
 * This component displays the user's profile information if a user is logged in.
 * It uses the UserContext to get access to the global `user` object.
 */
function Profile() {
    // useContext hook to get the `user` object from the UserContext.
    // This allows this component to read the user data from the global context.
    const { user } = useContext(UserContext)

    // Conditional rendering based on the 'user' object.
    // If 'user' is null or undefined (meaning no user is logged in), it displays a message.
    if (!user) return (
        <div className="section">
            <h2>Profile</h2>
            <p>No user logged in</p>
        </div>
    )
    
    // If a user is logged in, it displays a welcome message with the user's username.
    return (
        <div className="section">
          <h2>Profile</h2>
          <div className='profile-info'>
            Welcome, {user.username}!
          </div>
        </div>
    )
}

export default Profile
