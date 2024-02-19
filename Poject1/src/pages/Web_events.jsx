import React,{useState,useContext,useEffect} from "react";
import Nav_bar_Sign from "./parts/nav_bar_Sign";
import { AuthContext } from "../Require/Auth";
import { useLocation, useNavigate ,Link} from "react-router-dom";
import axios from "axios";
import formData from 'form-data'
import Allcandidate from "./Check/Allcandidate";
import Request_ from "./Check/Request";
import PostForm from "../Work/PostForm";
import Follow from "./Follow";
import CreatePoolPage from "./Check/pools";
import Nav_bar_events from "./Check/Nav_bar_events";
import Posts from "./parts/posts";
import { First } from "react-bootstrap/esm/PageItem";
import Header_event from "./Check/header_event";



export default ()=>{
    const [switchs,setSwitchs] = useState(true)
    const [First,setF] = useState(true)
    var formdata = new formData()
    const [data,setData]  = useState('')
    const [admin,setAdmin]  = useState(false)
    const location = useLocation();
    const {currentUser} = useContext(AuthContext)
    const navigate = useNavigate()
    const searchParams = new URLSearchParams(location.search);
    const id_events_random = searchParams.get('id');
    const id_user = searchParams.get('idUser');
    console.log(id_events_random);
    console.log(id_events_random);
   useEffect(()=>{
    if(currentUser ==null)
    navigate('/login')
    },[])
    
    useEffect(()=>{
        axios.post("http://localhost:2000/get/eventdetails", {id :id_events_random ,id_user :currentUser.id_users}).then((res)=>{
        if(!res.data.error) 
        {
            setData(res.data)
            setAdmin(true)}  
        })
    },[])
   
    return(
        <>
        <Header_event/>
        </>
    )
}