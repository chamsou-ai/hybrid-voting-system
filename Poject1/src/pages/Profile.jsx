import React,{useContext, useEffect,useState} from "react";
import { useNavigate } from "react-router-dom";
import formData from 'form-data'
import Nav_bar from "./parts/nav_bar_Sign";
import axios from "axios";
import See from './Check/See2';
import Fouter from "./parts/fouter";
import { AuthContext } from "../Require/Auth";
import Side_nav_profile from "./testparts/Side_nav_profile";
import EventProf from "./Check/EventProf1";
import Profile_l from "./Check/Profile_l";
import MenuBar from "./Check/MenuBar";
import DataFetcher from "./Check/Dash_Profile";

export default  ()=>{
    var formdata = new formData()
    const [data,setData]  = useState('')
    const {currentUser} = useContext(AuthContext)
    const navigate = useNavigate()
   useEffect(()=>{
    if(currentUser ==null)
    navigate('/login')
    },[])
    useEffect(()=>{
        axios.post("http://localhost:2000/get/myevents", {id : currentUser?.id_users_random}).then((res)=>{
        if(!res.data.error)   
        setData(res.data)
            console.log(res.data);
        })
    },[])
    return(
        
    <>
    <Nav_bar/>
        
        <div className="d-flex jus-b">
           <MenuBar/>
           <div className="">
           <DataFetcher/>
            {!data? <h1></h1> :(<See data = {data}/>)}
            </div>
            </div>
           <Fouter/>
    </> 
    )
}