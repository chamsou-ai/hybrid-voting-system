import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import Web_events from "../Web_events";
import Nav_bar_Sign from "../parts/nav_bar_Sign";
import Header_event from "./header_event";

export default (params)=>{

    
    const[notifications,SetNoti] =useState([])
    
    const location = useLocation();
    const searchParams = new URLSearchParams(location.search);
    const id_events_random = searchParams.get('id');

               useEffect(()=>{
                axios.post("http://localhost:2000/get/Allnotification",{idEvent : id_events_random}).then((res)=>{
                    if(!res.data.error)
                    {
                        SetNoti(res.data);
                        
                       
                    }
                    })   
           
               },[])

      const handleAccept = (notificationId) => {
        // Implement logic to accept the candidate's request
        console.log(`Accepted notification with ID ${notificationId}`);
      };
    
      const handleRefuse = (notificationId) => {
        // Implement logic to refuse the candidate's request
        console.log(`Refused notification with ID ${notificationId}`);
      };
    
    return (


        <>
        <div className="container d-flex f-d-c mb-5">
          <div className="overflow-auto " >
              <h1 className="mb-4 mt-4">Notifications For events request  :</h1>
              {notifications.length === 0 ? (
                <p>No notifications to display.</p>
              ) : (
                <>
                 {notifications?.map((notification) => (
                    <li
                      key={notification.id_voter}
                      className="list-group-item d-flex justify-content-between align-items-center "
                      style={{border:"none"}}
                    >
                    <Link to={"/request?id_follow="+notification?.id_voter_random} className="nav-link p-2" >
                    <div className="d-flex align-items-center">
                        <img
                          src={"./img/"+notification.imgFile}
                          alt={notification.imgFile}
                          className="me-3 rounded-circle"
                          style={{ width: "50px", height: "50px" }}
                        />
                        <div>
                          <div className="fw-bold">{notification.firstname}</div>
                          <small>{notification.message}</small>
                        </div>
                      </div>
                    </Link>
                      <div className="d-flex align-items-center">
                        <div>
                          <button
                            className="btn btn-primary me-2"
                            onClick={() => handleAccept(notification.id)}
                          >
                            Accept
                          </button>
                          <button
                            className="btn btn-danger"
                            onClick={() => handleRefuse(notification.id)}
                          >
                            Refuse
                          </button>
                        </div>
                      </div>
                    </li>
                  ))}
              
                </>
              )}
            </div>
            
              </div>
              
        </>
    )
}