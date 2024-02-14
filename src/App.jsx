import './App.css'
import {RouterProvider} from "react-router-dom";
import { router } from './RoutingPages/Routepages';
function App() {
  
  return (

    <>
     <RouterProvider router={router} />
    </>


  )
}

export default App
