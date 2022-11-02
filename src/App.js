import './App.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './Component/Home';
import User from './Component/User';
import Product from './Component/Product';
import Update from './Component/Update';



const router = createBrowserRouter([
  {
    path: '/',
    element: <Home></Home>
  },

  {
    path: '/users',
    element: <User></User>
  },
  {
    path: '/products',
    element: <Product></Product>,
    loader: () => fetch('http://localhost:5000/users')
  },
  {
    path: '/update/:id',
    element: <Update></Update>,
    loader: ({ params }) => fetch(`http://localhost:5000/users/${params.id}`)

  }


])


function App() {
  return (
    <div>
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
