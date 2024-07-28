import './App.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './Components/Home';
import Register from './Components/Register';
import Login from './Components/Login ';

const router=createBrowserRouter([
   
    {
      path:"/",
      element: <Home/>,
      children:[
        {
          path:"register",
          element: <Register/>
        },
        {
          path:"login",
          element: <Login/>
        }
      ]
    }
  ]);

  const App =() => {
    return <RouterProvider  router={router}/>;  
  };


export default App;
