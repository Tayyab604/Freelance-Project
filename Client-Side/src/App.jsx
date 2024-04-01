import './App.css'
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Signup from './Auth/Pages/Signup';
import Signin from './Auth/Pages/Signin';
import TermsOfUse from './Rule/TermsOfUse';
import PrivacyPolicy from './Rule/PrivacyPolicy';
import Welcome from './Auth/Welcome';
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
import { QueryClient, QueryClientProvider } from 'react-query'
import { ReactQueryDevtools } from 'react-query/devtools'
import React from 'react';
import RegisterEmailVerify from './Auth/RegisterEmailVerify';
import ForgetPassword from './Auth/Pages/ForgetPassword';
import NewPassword from './Auth/Pages/NewPassword';
import ProtectRoute from './Auth/ProtectedRoute/ProtectRoute';
import AlreadySigninProtectRoute from './Auth/ProtectedRoute/AlreadySigninProtectRoute';
import BuyerDashboard from './Root/BuyerRoot/BuyerDashboard';
function App() {
  const queryClient= new QueryClient()
  const router = createBrowserRouter([
    {
      path: "/",
      element: <AlreadySigninProtectRoute><PublicPage/></AlreadySigninProtectRoute>
    },
    {
      path: "/signup",
      element: <AlreadySigninProtectRoute><Signup /></AlreadySigninProtectRoute>   
    },
    {
      path: "/forgetpassword",
      element: <AlreadySigninProtectRoute><ForgetPassword /></AlreadySigninProtectRoute>  
    },
    {
      path: "/newpassword/:token",
      element: <AlreadySigninProtectRoute><NewPassword /></AlreadySigninProtectRoute>
    },
    {
      path: "/register-email-verify/:email",
      element: <AlreadySigninProtectRoute><RegisterEmailVerify /></AlreadySigninProtectRoute> 
    },
    {
      path: "/login",
      element:  <AlreadySigninProtectRoute><Signin /></AlreadySigninProtectRoute>,
    },
    {
      path: "/signup/termofuse",
      element: <AlreadySigninProtectRoute><TermsOfUse /></AlreadySigninProtectRoute>,
    },
    {
      path: "/signup/privacypolicy",
      element: <AlreadySigninProtectRoute><PrivacyPolicy /></AlreadySigninProtectRoute>,
    },
    {
      path: "/login/termofuse",
      element: <AlreadySigninProtectRoute><TermsOfUse /></AlreadySigninProtectRoute>,
    },
    {
      path: "/login/privacypolicy",
      element: <AlreadySigninProtectRoute><PrivacyPolicy /></AlreadySigninProtectRoute>,
    },
    {
      path: "/welcome/:token",
      element: <AlreadySigninProtectRoute><Welcome/></AlreadySigninProtectRoute>,
    },
    {
      path: "/dashboard",
      element: <ProtectRoute><Dashboard /></ProtectRoute>,
    },
    {
      path: "/buyerdashboard",
      element: <BuyerDashboard />,
    },
    {
      path: "/jobs",
      element: <ProtectRoute><Jobs /></ProtectRoute>,
    },
    {
      path: "/proposal",
      element: <ProtectRoute><Proposal /></ProtectRoute>,
    },
    {
      path: "/report",
      element: <ProtectRoute><Reports /></ProtectRoute>,
    },
    {
      path: "/saveproject",
      element: <ProtectRoute><SavedProject /></ProtectRoute>,
    },
    {
      path: "/notification",
      element: <ProtectRoute><Notification /></ProtectRoute>,
    },
    {
      path: "/messages",
      element: <ProtectRoute><Messages /></ProtectRoute>,
    },
    {
      path: "/profile",
      element: <ProtectRoute><Profile /></ProtectRoute>,
    },
    {
      path: "/payment",
      element: <ProtectRoute><Payment /></ProtectRoute>,
    },
    {
      path: "/setting",
      element: <ProtectRoute><Setting /></ProtectRoute>,
    },
    {
      path: "/project",
      element: <ProtectRoute><Projects /></ProtectRoute>,
    },
    {
      path: "/projectdetails",
      element: <ProtectRoute><ProjectDetails /></ProtectRoute>,
    },
    {
      path: "/proposalsend",
      element: <ProtectRoute><ProposalSend /></ProtectRoute>,
    },
    {
      path: "/contest",
      element: <ProtectRoute><Contest /></ProtectRoute>,
    },
    {
      path: "/contestdetails",
      element: <ProtectRoute><ContestDetails /></ProtectRoute>,
    },
   
   
    {
      path: "/contestproposal",
      element: <ProtectRoute><ContestProposal /></ProtectRoute>,
    },
    {
      path: "/entries",
      element:<ProtectRoute><Entries /></ProtectRoute> ,
    },



  ]);
  return (
    <>
    <QueryClientProvider client={queryClient} >
      <RouterProvider router={router} />
      <ReactQueryDevtools initialIsOpen={false} />
      </QueryClientProvider>
    </>
  )
}

export default App
