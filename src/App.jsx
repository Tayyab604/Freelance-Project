import './App.css'
import {RouterProvider, createBrowserRouter} from "react-router-dom";
import Signup from './Auth/Pages/Signup';
import Signin from './Auth/Pages/Signin';
import TermsOfUse from './Rule/TermsOfUse';
import PrivacyPolicy from './Rule/PrivacyPolicy';
import SelectRole from './Auth/SelectRole';
import SelectCatagory from './Auth/SelectCatagory';
import Welcome from './Auth/Welcome';
import Home from './Root/Home';
import Jobs from './Root/Jobs';
import Profile from './Root/Profile';
import Setting from './Root/Setting';
import Projects from './Root/HomeSubPages/Projects';
import Contest from './Root/HomeSubPages/Contest';
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
    {
      path: "/profile",
      element: <Profile/> ,
    },
    {
      path: "/setting",
      element: <Setting/> ,
    },
    {
      path: "/project",
      element: <Projects/> ,
    },
    {
      path: "/contest",
      element: <Contest/> ,
    },
    
  
  ]);
  return (
    <>
     <RouterProvider router={router} />
    </>
  )
}

export default App
