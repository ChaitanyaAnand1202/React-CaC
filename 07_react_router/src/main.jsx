import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Layout from './Layout.jsx'
import { About, Contact, Github, Home, User, GithubUser } from './components/index.js'
import { githubLoaderData } from './components/Github/GithubUser.jsx'

const router = new createBrowserRouter([
  {
    path:"/",
    element: <Layout />,
    children:[
      {
        path:"",
        element: <Home />
      },
      {
        path:"about",
        element: <About />
      },
      {
        path:"contact",
        element: <Contact />
      },
      {
        path:"user/:userId",
        element: <User />,
      },
      {
        path:"github",
        element: <Github />,
        // loader: async ({params}) => githubLoaderData({params})
        children:[
          {
            path:":userId",
            element: <GithubUser />,
            loader: async ({params}) => githubLoaderData({params})
          }
        ]
      }
    ]
  }
])


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} /> 
  </React.StrictMode>,
)
