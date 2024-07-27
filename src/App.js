import logo from './logo.svg';
import './App.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './Components/Home';
import Register from './Components/Register';
import Login from './Components/Login ';

function App() {

  const router=createBrowserRouter([
   
    {
      path:"/Home",
      element:<Home></Home>
    },
    {
      path:"/Register",
      element:<Register></Register>
    },
    {
      path:"/Login",
      element:<Login></Login>
    }


  ])
  return (
    <div className="App">
      <RouterProvider  
      
      router={router}
      
      ></RouterProvider>

    </div>
  );
}

export default App;
