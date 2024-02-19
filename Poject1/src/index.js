import React from 'react';
import ReactDOM from 'react-dom/client';
import { Route,Routes } from 'react-router-dom';
import App from './App';
import { AuthContexProvider} from './Require/Auth';



const root = ReactDOM.createRoot(document.getElementById('root'));
//const model = ReactDOM.createRoot(document.querySelector('#model'));

 root.render(
   <React.StrictMode>
    <AuthContexProvider>
     <App />
     </AuthContexProvider>
   </React.StrictMode>
 );


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

//reportWebVitals();
