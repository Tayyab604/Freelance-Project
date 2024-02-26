import './App.css'
import {RouterProvider, createBrowserRouter} from "react-router-dom";
import Signup from './Auth/Pages/Signup';
import Signin from './Auth/Pages/Signin';
import TermsOfUse from './Rule/TermsOfUse';
import PrivacyPolicy from './Rule/PrivacyPolicy';
import SelectRole from './Auth/SelectRole';
import SelectCatagory from './Auth/SelectCatagory';
import Welcome from './Auth/Welcome';
import Home from './Root/Dashboard';
import Jobs from './Root/Jobs';
import Profile from './Root/Profile';
import Setting from './Root/Setting';
import Projects from './Root/HomeSubPages/Projects';
import Contest from './Root/HomeSubPages/Contest';
import ProjectDetails from './Root/JobsSubPages/ProjectDetails';
import ContestDetails from './Root/JobsSubPages/ContestDetails';
import PublicPage from './Components/PublicPage';
import Messages from './Root/Messages';
import Reports from './Root/Reports';
import Proposal from './Root/Proposal';
import Notification from './Root/Notification';
import Payment from './Root/Payment';
import Dashboard from './Root/Dashboard';
import ProposalSend from './Root/JobsSubPages/ProposalSend';
import SavedProject from './Root/SavedProject';
function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <PublicPage/> 
    },
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
      path: "/dashboard",
      element: <Dashboard/> ,
    },
    {
      path: "/jobs",
      element: <Jobs/> ,
    },
    {
      path: "/proposal",
      element: <Proposal/> ,
    },
    {
      path: "/report",
      element: <Reports/> ,
    },
    {
      path: "/notification",
      element: <Notification/> ,
    },
    {
      path: "/messages",
      element: <Messages/> ,
    },
    {
      path: "/profile",
      element: <Profile/> ,
    },
    {
      path: "/payment",
      element: <Payment/> ,
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
    {
      path: "/projectdetails",
      element: <ProjectDetails/> ,
    },
    {
      path: "/contestdetails",
      element: <ContestDetails/> ,
    },
    {
      path: "/proposalsend",
      element: <ProposalSend/> ,
    },
    {
      path: "/saveproject",
      element: <SavedProject/> ,
    },
    
    
  
  ]);
  return (
    <>
     <RouterProvider router={router} />
    </>
  )
}

export default App
