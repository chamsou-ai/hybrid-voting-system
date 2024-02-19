import axios from "axios";
import React, { useContext, useEffect } from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../Require/Auth";
import Events from "./EventPage";
import Nav_bar_Sign from "./parts/nav_bar_Sign";
import Apools from "./Check/Apools"
import Pools from "./Check/pools"

export default  ()=>{
    const navigate = useNavigate() 
    const {currentUser} = useContext(AuthContext)
    const [data,setData] = useState('')
    const [Search,setSearch] = useState('')
    const [save,setSave] = useState('')
    useEffect(()=>{
        if(currentUser ==null)
        navigate('/login')
    },[])
    console.log(currentUser);
    useEffect(()=>{
        axios.post("http://localhost:2000/get/allevents",currentUser).then((res)=>{
        if(!res.data.error)   
        setData(res.data)
        setSave(res.data)
            console.log(res.data);
        })
    },[])   
    const Searchdata = (e) => {
    
    data.map((elements) =>(
    elements.eventsname == Search ?(

        setData([elements])
    ):(
        console.log(save)
    )
    ))
   }        

    return (
        <>
        {!data? (<h1></h1>)
        :(
            <>
        <Nav_bar_Sign/>

        <div className="container d-flex jus-c f-d-c al-c">
            <p className="display-1 mt-5"> All events </p>
        <div className="d-flex me-3 m-5 w-50" role="search">
                    <input className="form-control me-2 lg text-center" type="search" placeholder="Search for events" name = "search" aria-label="Search" onChange={(e)=>{setSearch(e.target.value); setData(save)}}/>
                    <button className="btn btn-secondary" type="submit" onClick={Searchdata}>Search</button>
              </div>
              {data? (
        <Events data = {data}/>
                ):(
                    <h1>no events</h1>
                )}
        </div>
        
        </>
         )   }
        </>
    )
}