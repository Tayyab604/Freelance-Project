import Signup from "../Auth/Pages/Signup";
import Signin from "../Auth/Pages/Signin";
import TermsOfUse from "../Rule/TermsOfUse";
import PrivacyPolicy from "../Rule/PrivacyPolicy";
import {createBrowserRouter} from "react-router-dom";



export const router = createBrowserRouter([
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
