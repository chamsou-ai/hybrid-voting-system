import React, { useEffect,useState } from 'react';
import {
  createBrowserRouter as Router,
  RouterProvider
} from "react-router-dom";

import Profile from './pages/Profile';
import Sign from './pages/Sign_Up';
import Candidat from './pages/candidat';
import Gest from './pages/parts/Home_pr';
import Login from './pages/login';
import Home from './pages/index_home';
import Create_Page from './pages/Create_Page';
import Protected from './Verifer';
import AllEvents from './pages/AllEvents';
import Follow from './pages/Follow';
import Hand from './pages/testparts/hand'
import RequireAuth from './Require/Require';
import axios from 'axios';
import Web_events from './pages/Web_events';
import Pools from "./pages/Check/pools"
import Allevents_dash from './pages/Check/Allevents_dash';
import NotificationsP from './Work/Notifications';
import EventPreview from './pages/Check/Allcandidates';
import CandidateProfile from './Work/CanProfile';
import Notification_one_tag from './pages/Check/Notification_one_tag';
import Follower from './pages/Check/Profile_request';

      
      function App() {
       

         
        const router = Router(

    [

      {
        path :'/login',
        element : <Login />
      },
      {
        path :'/canProfile',
        element : <CandidateProfile />
      },
      {
        path :'/CandidateAll',
        element : <EventPreview />
      },
      {
        path :'/notification',
        element : <Notification_one_tag/>
      },
      {
        path :'/Allevents_dash',
        element : <Allevents_dash />
      },
      {
        path :'/follow',
        element : <Follow />
      },
      {
        path :'/handel',
        element : <Hand/>
      },
      {
        path :'/candidat',
        element : <Candidat/>
      },
      {
        path :'/Sign',
        element : <Sign/>
      },
      {
        path :'/Welcome',
        element : <Gest/>
      }
      ,
      {
        path :'/Profile',
        element : 
        <Profile />
      
      }
      ,
      {
        path :'/Events',
        element : 
        <AllEvents/>
      
      }
      ,
      {
        path :'/request',
        element : 
        <Follower/>
      
      }
      ,
      {
        path :'/Create',
        element : 
        <Create_Page />
      
      }
      ,
      {
        path :'/home',
        element : 
              
                <Home />
              
            
      }
      ,
      {
        path :'/',
        element :<Home/>}
      ,
      {
        path :'/eventpage',
        element :<Web_events/>}
      ,
      {
        path :'/Pools',
        element :<Pools/>}
      
    ]
  )
  return (
    <div className="App">
      
      <RouterProvider router={router}>
      </RouterProvider>
      
      </div>
  );}

export default App 
