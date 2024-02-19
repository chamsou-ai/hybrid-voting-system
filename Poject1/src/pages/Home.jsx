
import React ,{ useEffect, useState } from 'react';
import axios from 'axios'
import Card from './parts/card';
import Navhome from './parts/navhome';
import Carousel from './parts/carousel';
import Fouter from './parts/fouter';
import Head from './parts/head';
import Call from './parts/best_call';
import Candidate from './candidat';
import Sign from './Sign_Up';
export default ()=>{
    const [data, setData] = React.useState([]);

    React.useEffect(() => {
      fetch("http://localhost:2000/")
        .then((res) => res.json())
        .then((data) => setData(data));
    }, []);
    return (
        
        
    <div className="">
    <Head/>
    <Candidate/>
    <Call/>
    <Sign/>
    <Fouter/>
  
</div>
    
)
}