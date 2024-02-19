import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import Pop from "./parts/pop";
import See from "./Check/See"

const EventPage = (prams) => {
  const [events, setEvents] = useState([]);

  const Navigate = useNavigate();
  
  
  return (
    
    <div className="container ">
      <div className="d-flex jus-c">
              
                        </div>
        {prams.data?.map((event) => (
          
          <div className="d-flex jus-c" style={{minWidth :"700px"}}>
        
          <div key={event.id_events_random} className=" col-md-8 col-lg-10 mb-5 ">
            <div className=" rounded h-100 shadow-lg p-5 "  >
              <div className="card-body ">
                <h5 className="font-l-48 card-title  mb-3 text-black text-center  ">
                  {event.eventsname}
                </h5>
               
                <div className="image-event">
                <img
                    src={'./img/'+event.img_back}
                  />
                  </div>
                <div className="d-flex align-items-sm-center mt-4 mb-4">
                  
                  <h6 className="card-subtitle text-muted text-center  d-inline-block">
                    <strong className="fw-normal fs-2" >{event.event_org}</strong>
                  </h6>
                </div>
                <p className="card-text mb-4">{event.descr}</p>
                <div className="event-details">
                  <p>
                    <strong className="text-black fw-normal">Location:</strong>{" "}
                    <span style={{ color: "#006699" }}>
                      {event.location}
                    </span>
                  </p>
                  <div className="d-flex justify-content-between mb-2">
                    <p>
                      <strong className="text-black fw-normal">Start Date:</strong>{" "}
                      <span style={{ color: "#006699" }}>
                        {event.dateStart}
                      </span>
                    </p>
                    <p>
                      <strong className="text-black fw-normal">End Date:</strong>{" "}
                      <span style={{ color: "#006699" }}>
                        {event.dateEnd}
                      </span>
                    </p>
                  </div>
                  <p>
                    <strong className="text-black fw-normal">Voting Instructions : </strong>{" "}
                    <span style={{ color: "#006699" }}>
                      {event.instruction}
                    </span>
                  </p>
                 
                </div>
              </div>
              <div className="card-footer text-center">
                {event.isFollowed ? (
                  <p className="text-muted">Following this event</p>
                ) : (
                  <button
                    className="btn btn-info  btn-ls"
                    
                    onClick={()=>Navigate(`/follow?id=${event.id_events_random}`)}
                  >
                    Follow Event
                  </button>
                )}
              </div>
              
           
          
            </div>
            </div>
          </div>
            
        ))}
    </div>
  );
};

export default EventPage;
