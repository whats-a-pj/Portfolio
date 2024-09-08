//import React from 'react'
// import ReactDOM from 'react-dom/client'
// import App from './App.jsx'
// import './index.css'


import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import './index.css';

import App from './App';
import Aboutme from './pages/Aboutme';
import Contactme from './pages/Contactme';
import Portfolio from './pages/Portfolio';
import Portfolioo from './pages/Portfolio2';
import Resume from './pages/Resume';
import MiniGame from './pages/MiniGame';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    //errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        path: '/',
        element: <Aboutme />,
      },
      {
        path: 'contact',
        element: <Contactme />,
      },
      {
        path: 'portfolio',
        element: <Portfolio />,
      },
      {
        path: 'portfolioo',
        element: <Portfolioo />,
      },
      {
        path: 'resume',
        element: <Resume />,
      },
      {
        path: 'minigame',
        element: <MiniGame />
      }
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router}/>
)