import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

// Pages imports
import Create from "./pages/Create.jsx"
import Update from "./pages/Update.jsx"

const paths = createBrowserRouter([
  {
    path:"",
    element: <App />
  },
  {
    path:"/create",
    element: <Create />
  },
  {
    path:"/update/:id",
    element:<Update/>
  },
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={paths}/>
  </React.StrictMode>,
)
