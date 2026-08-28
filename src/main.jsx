import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import Login from './pages/Login.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

const appRoutes = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Login />,
      },
     
    ],
  },
]);

createRoot(document.getElementById("root")).render(
    <RouterProvider router={appRoutes}></RouterProvider>,
);