import React from 'react'
import ReactDOM from 'react-dom/client'

import './index.css'

import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import Navbar from './Components/Navbar.jsx';
import ProfileSetup from './Page-Components/ProfileSetup.jsx';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import { ThemeProvider, createTheme } from '@mui/material';
import myColors from './assets/Util/myColors.js';
import Login from './Page-Components/Login.jsx';
import AdminDashboard from './Page-Components/AdminDashboard.jsx';


const router = createBrowserRouter([
  {
    path: "/",
    element: <Navbar />,
    children: [
      {
        path: "/",
        element: <ProfileSetup />
      },
      {
        path: "/login",
        element: <Login />
      },
      {
        path: "/dashboard",
        element: <AdminDashboard />
      },
    ]
  }

])

const theme = createTheme({
  palette: {
    primary: {
      main: myColors.orange.main
    },
    backgroundGrey: {
      main: myColors.backgroundGrey
    },
    lightOrange: {
      main: myColors.orange.light
    },
    textBlack : {
      main: myColors.textBlack
    }
  }
})


ReactDOM.createRoot(document.getElementById('root')).render(
  
    <ThemeProvider theme={theme}>

      <RouterProvider router={router} />
    </ThemeProvider>
  
)
