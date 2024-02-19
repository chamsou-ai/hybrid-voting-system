import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';

import Home from './pages/Home';
import Sign from './pages/Sign_Up';
import Candidat from './pages/candidat';
import Profile from './pages/Profile';
import Home_pr from './pages/parts/Home_pr';
import Login from './pages/login';
import Event from './pages/parts/Event';
import EventPage from './pages/parts/EventPage';
import Ep from './pages/parts/Ep';
import axios from 'axios';
import EventDetails from './pages/parts/EventDetails';

function PrivateRoute({ path, element: Component }) {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    
    // const isAuthenticated = // Check if the user is authenticated
    
    axios.get('/api/user')
      .then(response => {
        if (response.data.isAuthenticated) {
          setIsAuthenticated(true);
        } else {
          setIsAuthenticated(false);
        }
      })
      .catch(error => {
        console.log(error);
      });
  }, []);

  return (
    <Router>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/candidat" element={<Candidat />} />
        <Route path="/Sign" element={<Sign />} />
        <Route path="/" element={<Home_pr />} />
        <Route exact path="/home" element={Home_pr} />
        <Route exact path="/Profile" element={Profile} isAuthenticated={isAuthenticated} />
        <Route exact path="/Event" element={Event} isAuthenticated={isAuthenticated} />
        <Route exact path="/Edeta" element={EventDetails} isAuthenticated={isAuthenticated} />
        <Route exact path="/Epage" element={Ep} isAuthenticated={isAuthenticated} />
      </Routes>
    </Router>
  );
}

function App() {
  
  return (
    <Router>
      <Routes>
        <PrivateRoute path="/home" element={Home_pr} />
        <PrivateRoute path="/Profile" element={Profile} isAuthenticated={isAuthenticated} />
        <PrivateRoute path="/Event" element={Event} isAuthenticated={isAuthenticated} />
        <PrivateRoute path="/Edeta" element={EventDetails} isAuthenticated={isAuthenticated} />
        <PrivateRoute path="/Epage" element={Ep} isAuthenticated={isAuthenticated} />
      </Routes>
    </Router>
  );
}

export default App;
