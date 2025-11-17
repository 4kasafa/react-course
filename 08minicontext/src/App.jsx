import './App.css'
import Profile from './components/Profile'
import Login from './components/Login'
import UserContextProvider from './context/UserContextProvider.jsx'

/**
 * App Component
 * 
 * This is the root component of the application.
 * It demonstrates how to use a context provider to share state between components.
 */
function App() {

  return (
    // The UserContextProvider is wrapped around the components that need access to the user context.
    // Any component within UserContextProvider (like Login and Profile) can now access the shared user data.
    <UserContextProvider>
      <div className='container'>
        <h1>React Context API</h1>
        <Login/>
        <Profile/>
      </div>
    </UserContextProvider>
  )
}

export default App
