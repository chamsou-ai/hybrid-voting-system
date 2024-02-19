import React, { useContext, useEffect, useState } from "react"
import Events_card from "./events_card"
import MenuBar from "./MenuBar"
import Nav_bar_Sign from "../parts/nav_bar_Sign"
import axios from "axios"
import { AuthContext } from "../../Require/Auth"

export default ()=>{

    const {currentUser} = useContext(AuthContext)
    const [close ,setClose] = useState(false)
    const [data ,setData] = useState([])
    const [counter, setCounter] =useState(200);
    useEffect(() => {
        counter > 0 && setTimeout(() => setCounter(counter - 1), 1000);
      }, [counter]);
    axios.post('http://localhost:2000/get/myevents',{id :currentUser.id_users}).then((res)=>{
      if(res.data.data)
      setData(res.data.data);
    })

    return (
        <>
        <Nav_bar_Sign/>
        <div className="d-flex">
    <MenuBar data ={currentUser}/>
    <div className="container">
    <h1 className=" mt-5 mb-5 fs-1">
            My Events
    </h1>
    <div className="grid ">
    

        {
            data?(
                data?.map((event)=>(
                    <Events_card to={'/eventpage?id='+event.id_events_random+'&idUser='+event.id_user}  location ={event.location} Instructions ={event.instruction} status = {close} data={event.dateStart} img ={'./img/'+event.img_back} title={event.eventsname} text={event.descr}/>)
                    )
            ):(<h1>Dont have Event </h1>)
        }
        </div>
        </div>
    </div>
        </>
    )
}