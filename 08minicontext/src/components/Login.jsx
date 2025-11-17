import { useState, useContext } from "react"
import UserContext from "../context/UserContext"

/**
 * Login Component
 * 
 * This component renders a login form with username and password fields.
 * It uses the UserContext to get access to the `setUser` function, which allows it to update the global user state.
 */
function Login() {
    // useState hooks to manage the local state for the username and password input fields.
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')

    // useContext hook to get the `setUser` function from the UserContext.
    // This allows this component to update the user data in the global context.
    const {setUser} = useContext(UserContext)
    
    /**
     * handleSubmit
     * 
     * This function is called when the "Submit" button is clicked.
     * It prevents the default form submission behavior and then calls the `setUser` function 
     * from the context with the current username and password.
     * 
     * @param {React.MouseEvent<HTMLButtonElement>} e - The click event.
     */
    const handleSubmit = (e) => {
        e.preventDefault()
        // Set the user in the global context.
        setUser({ username, password })
    }

    return (
        <div className="section">
            <h2>Login</h2>
            <input 
            type="text" 
            className="input-field"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            placeholder="Username"
            />
            <input 
            type="password" 
            className="input-field"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Password"
            />
            <button
            className="button"
            onClick={handleSubmit}
            >Submit</button>
        </div>
    )
}

export default Login
