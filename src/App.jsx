import './App.css'
import Signin from './Auth/Pages/Signin';
import Signup from './Auth/Pages/Signup'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import TermsOfUse from './Rule/TermsOfUse';
import PrivacyPolicy from './Rule/PrivacyPolicy';
function App() {
  const router = createBrowserRouter([
    {
      path: "/signup",
      element: <Signup/> ,
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
  ]);

  return (

    <>
     <RouterProvider router={router} />
    </>


  )
}

export default App
