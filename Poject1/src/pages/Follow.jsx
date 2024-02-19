
import React, { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../Require/Auth";
import Follow from "./parts/Follow_event";
import Nav_bar_Sign from "./parts/nav_bar_Sign";

export default ()=>
{
    const navigate = useNavigate() 
    const {currentUser} = useContext(AuthContext)
    useEffect(()=>{
        if(currentUser ==null)
        navigate('/login')
    },[])


    return(
        <>
        <Nav_bar_Sign/>
        <Follow/>
        
        </>
    )
}