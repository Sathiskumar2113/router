import logo from './logo.svg';
import './App.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

function App() {

  const router=createBrowserRouter([
    {
      path:"/",
      element:"hii i am sathis"

    },
    {
      path:"/about",
      element:"about us"
    },
    {
      path:"/contact",
      element:"contact us"

    },
    {
      path:"/services",
      element:"services class"
    },
    {
      path:"/product",
      element:"product services"
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
