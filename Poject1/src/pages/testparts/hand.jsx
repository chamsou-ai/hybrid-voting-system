import axios from 'axios';
import React, { useState, useEffect } from 'react';
import Testnextpage from './testnextpage';

const Hand = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isGetting, setIsGetting] = useState(false);

  
  useEffect(() => {
    // Check if session data exists in local storage
    const sessionData = localStorage.getItem('sessionData');
    if (sessionData) {
      // Parse and use session data if available
      const { isLoggedIn } = JSON.parse(sessionData);
      setIsLoggedIn(isLoggedIn);
    }
  }, []);

  async function handleLogin  ()  {
    // Simulating a successful login API response
    const sessionData = { isLoggedIn: true };

    // Store session data in local storage
    localStorage.setItem('sessionData', JSON.stringify(sessionData));

    setIsLoggedIn(true);
    axios.get('http://localhost:2000/get').then((res)=>{
    console.log( res);
    setIsGetting(true)
  })
  };

  const handleLogout = () => {
    // Clear session data from local storage
    localStorage.removeItem('sessionData');
    
    setIsLoggedIn(false);
    axios.post('http://localhost:2000/set',{state :1}).then((res)=>{
    console.log( res);
    if(res.data){
    setIsGetting(false)
}
  })
  };
  
  return (
    <div>
      {isLoggedIn ? (
<>        <button onClick={handleLogout}>Logout</button>
        </>    ) : (
        <><button onClick={handleLogin}>Login</button>
        <Testnextpage/>
        </> )}
      {isGetting ? <h1>Welcome, user!</h1> : <h1>Please log in</h1>}
    </div>
  );
};

export default Hand;
