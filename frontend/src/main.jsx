import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import DemoPage from './page.tsx'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import FoundationPage from './foundationpage.tsx'


const router = createBrowserRouter([
  {
    path:'/',
    element:<App />
  },
  {
    path: "/nonprofits",
    element:<DemoPage />
  },
  {
    path: "/foundations",
    element:<FoundationPage/>
  }

]);

ReactDOM.createRoot(document.getElementById('root')).render(
  // <React.StrictMode>
    <RouterProvider router={router} />
  // </React.StrictMode>,
)
