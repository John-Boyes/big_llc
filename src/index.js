import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Root from './components/root';
import reportWebVitals from './reportWebVitals';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './pages/Home';
import About from './components/about';
import Contact from './components/contact';
import Services from './components/services';
import Projects from './components/projects';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    errorElement: <div>404 Not Found</div>,
    children: [
    {
      path: '/Home',
      element: <Home />,
      errorElement: <div>404 Not Found</div>
    },
    {
      path: '/About',
      element: <About />,
      errorElement: <div>404 Not Found</div>
    },
    {
      path: '/Contact',
      element: <Contact />,
      errorElement: <div>404 Not Found</div>
    },
    {
      path: '/Services',
      element: <Services />,
      errorElement: <div>404 Not Found</div>
    },
    {
      path: '/Projects',
      element: <Projects />,
      errorElement: <div>404 Not Found</div>
    }]}
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
