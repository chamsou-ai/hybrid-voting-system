import React from 'react';
import {useNavigate} from 'react-router-dom'

export default ()=> {
  const history = useNavigate();

  function handleLogin() {
    // perform login logic here...
    const userId = '123'; // set the user ID
    history.push(`/home?userId=${userId}`); // redirect to the home page with the user ID as a query parameter
  }

  return (
    <div>
      <button onClick={handleLogin}>Login</button>
    </div>
  );
}
