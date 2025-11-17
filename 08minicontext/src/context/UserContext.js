import React from "react";

/**
 * UserContext
 * 
 * This file is responsible for creating a new context for the user.
 * Context provides a way to pass data through the component tree without having to pass props down manually at every level.
 * 
 * In this case, UserContext will be used to share user-related data (like the user object and a function to update it) 
 * across different components in the application.
 */
const UserContext = React.createContext();

export default UserContext;