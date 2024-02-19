
import React, { useContext, useEffect,useState,useRef } from "react";
import axios from 'axios'
import formData from 'form-data'
import { Link,Navigate,useLocation,useNavigate  } from "react-router-dom";
import { AuthContext } from "../../Require/Auth";

const Events = () => {
  ///requre errr
  const errRef = useRef();
  const userRef = useRef();
  const msgRef = useRef();
  const [err,setErr] = useState(false)
  const [msgerr,setMsg] = useState('')

  //saving data for all pages
  const {currentUser} = useContext(AuthContext)

  const [file_up, setfile_up] = useState(null);
  const navigate = useNavigate() 
  var date =new Date()
  
   function  Ru(e) {
    const randomNumber = Math.floor(Math.random() * 10000); // Generate a random number between 0 and 999

    const username = `${e.target.elements.firstname.value.toLowerCase()}_${e.target.elements.lastname.value.toLowerCase()}_${randomNumber}`;
    return username
    
  }
  
   function Rn() {
     return Math.floor(Math.random(date.getTime())*100000000000000);
    };
    
   const Click  =async (e)=>
  {
    
    e.preventDefault();

    
    let formdata = new formData()
    // console.log(file_up);
    formdata.append("file",file_up)
    formdata.append("eventname",e.target.elements.eventname.value)
    formdata.append("startdate",e.target.elements.startdate.value)
    formdata.append("eventEndDate",e.target.elements.eventEndDate.value)
    formdata.append("location",e.target.elements.location.value)
    formdata.append("descr",e.target.elements.descr.value)
    formdata.append("eventOrg",e.target.elements.eventOrg.value)
    formdata.append("instruction",e.target.elements.instruction.value)
    formdata.append("random",Rn())
    formdata.append("user",currentUser.id_users)
    try{
      const res = await axios.post(`http://localhost:2000/get/events`,formdata)
      if(res.data)
      {
        if(res.data.error)
        {
          console.log('errrrrrrr');
          setErr(true)
          errRef.current.focus()
          setMsg('Name has been used Set another one')
        }
        if(res.data.field)
        {
          setMsg('Require fields')
          errRef.current.focus()
        }
        if(res.data.conne)
          {console.log(res.data.conne);
          navigate("/events")}
        }
      }
    
    catch(err)
    {
      console.log(err);
      console.log('catch');
      setErr(true)
      errRef.current.focus()
    }
    
  }
      useEffect(()=>{
        
        userRef.current.focus()
      },[])
    
  return (
    <div>
      <div className="   img-back">
      
          
        <div className=" mt-2 d-flex jus-c " >
          <div className="col-lg-6">
            <div className="card border-0 shadow-lg p-5">
              <div ref={errRef} className={err? " text-center alert alert-danger p-a cntr":"text-center alert alert-danger d-none "} role="alert">
              {msgerr}
              </div>
              <h1 className="card-title text-center mb-4">
                Create Voting Event
              </h1>
              <form onSubmit={Click}>
                <div className="mb-3">
                  <label htmlFor="eventName" className="form-label fw-bold">
                    Event Name
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="eventName"
                    name="eventname"
                    placeholder="Enter event name"
                    ref={userRef}
                    onChange = {()=>{
                      setErr(false) 
                      errRef.current.focus()
                    }}
                    required
                  />
                </div>
                <div className="row mb-3">
                  <div className="col-md-6">
                    <label
                      htmlFor="eventStartDate"
                      className="form-label fw-bold"
                    >
                      Event Start Date
                    </label>
                    <input
                    required
                      type="date"
                      className="form-control"
                      id="eventStartDate"
                      name="startdate"
                    />
                  </div>
                  <div className="col-md-6">
                    <label
                      htmlFor="eventEndDate"
                      className="form-label fw-bold"
                    >
                      Event End Date
                    </label>
                    <input
                    required
                      type="date"
                      className="form-control"
                      id="eventEndDate"
                      name="enddate"
                    />
                  </div>
                </div>
                <div className="row">
                <div className="col mb-3">
                  <label htmlFor="eventLocation" className="form-label fw-bold">
                    Event Location
                  </label>
                  <input
                  required
                    type="text"
                    className="form-control"
                    id="eventLocation"
                    placeholder="Enter event location"
                    name="location"
                  />
                </div>
                <div className="col mb-3">
                  <label
                    htmlFor="eventOrganizer"
                    className="form-label fw-bold"
                  >
                    Event Organizer
                  </label>
                  <input
                  required
                    type="text"
                    className="form-control"
                    id="eventOrganizer"
                    name="eventOrg"
                    placeholder="Enter event organizer"
                  />
                </div>
                </div>
                
                <div className="mb-3">
                  <label
                    htmlFor="eventDescription"
                    className="form-label fw-bold"
                  >
                    Event Description
                  </label>
                  <textarea
                  required
                    className="form-control"
                    id="eventDescription"
                    name="descr"
                    rows="3"
                    placeholder="Enter event description"
                  ></textarea>
                </div>
                
                <div className="mb-3">
                  <label
                    htmlFor="votingInstructions"
                    className="form-label fw-bold"
                  >
                    Voting Instructions
                  </label>
                  <textarea
                  required
                    className="form-control"
                    id="votingInstructions"
                    name="instruction"
                    rows="3"
                    placeholder="Enter voting instructions"
                  ></textarea>
                </div>
                <div className="mb-3">
                <label
                    htmlFor="votingInstructions"
                    className="form-label fw-bold"
                  >
                    State of event
                  </label>
                  <select name='sexe' className="form-select" id="validationCustom04" required   >
                         <option selected > Public</option>
                          <option>Private</option>
                      </select>
                </div>
                <div className="mb-5">
                  <label htmlFor="eventName" className="form-label fw-bold">
                    Customer wallpaper
                  </label>
                  <input
                  required
                    type="file"
                    className="form-control"
                    id="eventName"
                    name="file"
                    onChange={(e)=>{setfile_up(e.target.files[0]);}}
                    placeholder="Enter event name"
                  /></div>

                <div className="text-center">
                    <button type="submit" className="btn btn-primary me-2">
                      Create Event
                    </button>
                  
                  <Link to = {'/events'}>
                  <button type="button" className="btn btn-secondary">
                    Cancel
                  </button>
                  </Link>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Events;
