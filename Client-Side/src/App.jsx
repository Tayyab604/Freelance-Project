import './App.css'
import { RouterProvider, createBrowserRouter } from "react-router-dom";
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
import Projects from './Root/JobsSubPages/Projects/Projects';
import Contest from './Root/JobsSubPages/Contest/Contest';
import ProjectDetails from './Root/JobsSubPages/Projects/ProjectDetails';
import ContestDetails from './Root/JobsSubPages/Contest/ContestDetails';
import PublicPage from './Components/PublicPage';
import Messages from './Root/Messages';
import Reports from './Root/Reports';
import Proposal from './Root/Proposal';
import Notification from './Root/Notification';
import Payment from './Root/Payment';
import Dashboard from './Root/Dashboard';
import ProposalSend from './Root/JobsSubPages/Projects/ProposalSend';
import SavedProject from './Root/SavedProject';
import ContestProposal from './Root/JobsSubPages/Contest/ContestProposal';
import Entries from './Root/JobsSubPages/Contest/Entries';
function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <PublicPage />
    },
    {
      path: "/signup",
      element: <Signup />
    },
    {
      path: "/login",
      element: <Signin />,
    },
    {
      path: "/signup/termofuse",
      element: <TermsOfUse />,
    },
    {
      path: "/signup/privacypolicy",
      element: <PrivacyPolicy />,
    },
    {
      path: "/login/termofuse",
      element: <TermsOfUse />,
    },
    {
      path: "/login/privacypolicy",
      element: <PrivacyPolicy />,
    },
    {
      path: "/selectrole",
      element: <SelectRole />,
    },
    {
      path: "/selectcatagory",
      element: <SelectCatagory />,
    },
    {
      path: "/welcome",
      element: <Welcome />,
    },
    {
      path: "/dashboard",
      element: <Dashboard />,
    },
    {
      path: "/jobs",
      element: <Jobs />,
    },
    {
      path: "/proposal",
      element: <Proposal />,
    },
    {
      path: "/report",
      element: <Reports />,
    },
    {
      path: "/saveproject",
      element: <SavedProject />,
    },
    {
      path: "/notification",
      element: <Notification />,
    },
    {
      path: "/messages",
      element: <Messages />,
    },
    {
      path: "/profile",
      element: <Profile />,
    },
    {
      path: "/payment",
      element: <Payment />,
    },
    {
      path: "/setting",
      element: <Setting />,
    },
    // ---------------- Start job Sub Sections -----------------
    // ---------------- End job Sub Sections -----------------
    {
      path: "/project",
      element: <Projects />,
    },
    {
      path: "/projectdetails",
      element: <ProjectDetails />,
    },
    {
      path: "/proposalsend",
      element: <ProposalSend />,
    },
    {
      path: "/contest",
      element: <Contest />,
    },
    {
      path: "/contestdetails",
      element: <ContestDetails />,
    },
   
   
    {
      path: "/contestproposal",
      element: <ContestProposal />,
    },
    {
      path: "/entries",
      element: <Entries />,
    },



  ]);
  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}

export default App
