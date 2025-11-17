import React, { useState } from "react";
import UserContext from "./UserContext";

/**
 * UserContextProvider
 * 
 * This component acts as a provider for the UserContext.
 * It is responsible for managing the user state and making it available to all components wrapped within it.
 * 
 * @param {object} props - The properties passed to the component.
 * @param {React.ReactNode} props.children - The child components that will have access to the context.
 */
const UserContextProvider = ({ children }) => {
    // Use the useState hook to create a 'user' state variable and a 'setUser' function to update it.
    // The initial value of 'user' is null, meaning no user is logged in initially.
    const [user, setUser] = useState(null);

    return (
        // The UserContext.Provider component makes the 'user' state and 'setUser' function available to all of its children.
        // The 'value' prop is an object containing the data we want to share.
        <UserContext.Provider value={{ user, setUser }}>
            {children}
        </UserContext.Provider>
    )
}

export default UserContextProvider;