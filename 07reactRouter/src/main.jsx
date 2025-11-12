import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import Layout from './Layout.jsx'
import Home from './components/Home/Home.jsx'
import About from './components/About/About.jsx'
import Contact from './components/Contact/Contact.jsx'
import NotFound from './components/NotFound/NotFound.jsx'
import Github, { githubInfoLoader } from './components/Github/Github.jsx'
import User from './components/User/User.jsx'

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Layout/>}>
      <Route path='' element={<Home/>} />
      <Route path='about' element={<About/>} />
      <Route path='contact' element={<Contact/>} />
      <Route 
      path='github' 
      element={<Github/>} 
      loader={githubInfoLoader} 
      />
      <Route path='user/' element={<User/>}>
        <Route path=':id' element={<User/>} />
      </Route>
      <Route path='*' element={<NotFound/>} />
    </Route>
  )
)

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
)
