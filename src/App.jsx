import './App.css'
import {RouterProvider, createBrowserRouter} from "react-router-dom";
import Signup from './Auth/Pages/Signup';
import Signin from './Auth/Pages/Signin';
import TermsOfUse from './Rule/TermsOfUse';
import PrivacyPolicy from './Rule/PrivacyPolicy';
import SelectRole from './Auth/SelectRole';
import SelectCatagory from './Auth/SelectCatagory';
import Welcome from './Auth/Welcome';
import Home from './Main/Home';
import Jobs from './Main/Jobs';
function App() {
  const router = createBrowserRouter([
    {
      path: "/signup",
      element: <Signup/> 
    },
    {
      path: "/login",
      element: <Signin/> ,
    },
    {
      path: "/signup/termofuse",
      element: <TermsOfUse/> ,
    },
    {
      path: "/signup/privacypolicy",
      element: <PrivacyPolicy/> ,
    },
    {
      path: "/login/termofuse",
      element: <TermsOfUse/> ,
    },
    {
      path: "/login/privacypolicy",
      element: <PrivacyPolicy/> ,
    },
    {
      path: "/selectrole",
      element: <SelectRole/> ,
    },
    {
      path: "/selectcatagory",
      element: <SelectCatagory/> ,
    },
    {
      path: "/welcome",
      element: <Welcome/> ,
    },
    {
      path: "/home",
      element: <Home/> ,
    },
    {
      path: "/jobs",
      element: <Jobs/> ,
    },
    
  
  ]);
  return (
    <>
     <RouterProvider router={router} />
    </>
  )
}

export default App
