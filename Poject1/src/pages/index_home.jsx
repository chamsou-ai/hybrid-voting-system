import React ,{ useEffect, useState,useContext } from 'react';
import { Link, useLocation,useNavigate } from 'react-router-dom';
import formData from 'form-data'
import axios from 'axios'
import Nav from './parts/nav_bar_Sign';
import Card from './parts/Card_c';
import { AuthContext } from '../Require/Auth';
import Carousel from './parts/carousel';
import Posts from './parts/posts';
import PoolPage from './Check/Apools';
import PostForm from '../Work/PostForm';


export default ()=>{

    
    const navigate = useNavigate() 
    const {currentUser} = useContext(AuthContext)
    useEffect(()=>{
        if(currentUser ==null)
        navigate('/login')
    },[])
    console.log(currentUser);
    var formdata = new formData()
    const [data, setData] =useState([]);
    const [id, setid] =useState({});
    const location = useLocation();
    const searchParams = new URLSearchParams(location.search);
    var userId =searchParams.get('usersID')
    formdata.append('id',userId)
    console.log(currentUser);

     return (
        <>
        {!currentUser? navigate('/welcome') :
         <> 
        <Nav/>
        <section className="py-4 bg-light" id="scroll-target">
                <PostForm/>
                <Posts img="./works-onsite.png" content ="Content" title ="Title" candidate="Joey" />
                <Posts img="./works-onsite.png" content ="Content" title ="Title" candidate="Joey" />
                <Posts img="./works-onsite.png" content ="Content" title ="Title" candidate="Joey" />
                <PoolPage/>
                <Posts/>
                <Posts img="./works-onsite.png" content ="Content" title ="Title" candidate="Joey" />
                <Posts img="./works-onsite.png" content ="Content" title ="Title" candidate="Joey" />
         
         </section>
        </>}
         
        </>
    )
}