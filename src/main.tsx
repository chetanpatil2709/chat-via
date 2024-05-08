import React from 'react'
import ReactDOM from 'react-dom/client'
import './style/style.css'
import AppRouter from './AppRouter'
import { RouterProvider } from 'react-router-dom'
ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={AppRouter} />
  </React.StrictMode>,
)
