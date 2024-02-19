import axios from "axios";
import React, {useEffect} from "react";
import { Link, useParams } from "react-router-dom";


const Profile = (params) => {
  // Get the userId from the URL params
  const { userId } = useParams();

  // function Supprimer(e){
  //   alert('')
  //     axios.post("http://localhost:2000/get/delete",{id_user :params.data[0].id_users,id_random :e})
  //     .then((res)=>{
  //     if(!res.data.error)   
  //     {
  //       console.log(res.data);
  //     }
  //     })
  // }

  // You can fetch the user profile data based on the userId
  // Replace this with your actual API call or data retrieval method
  const userProfile = {
    id: userId,
    name: "John Doe",
    bio: "The customer is very important, the customer will be followed by the customer.",

    eventCount: 5,
    candidateCount: 10,
  };

  return (
    <div>
      
      <header className="py-2  mb-5 " >
                <div className=" px-5">
                  
                    <div className="row gx-5 ">
                    <div className="row-xl-5 col-xxl-6 d-none d-xl-block text-center">
                            <div className="image-container">
                              <img class="img-fluid" src={"./img/"+params.data[0]?.imgFile} alt="..." />
                                </div>
                             
                        </div>
                        <div className="card-body col-lg-8 col-xl-7 col-xxl-6">
                            <div className=" ">
                                <h2 className=" display-2 card-title text-dark mb-2">{params.data[0]?.firstname +" "+ params.data[0]?.lasrname} </h2>
                                <p className="card-text fs-5"><span className="">Country : </span> {params.data[0]?.country}</p>
                                <p className="card-text fs-5"><span className="">State : </span> {params.data[0]?.state} </p>
                                <p className="card-text fs-5"><span className="">Birth date : </span> {params.data[0]?.dateB}</p>
                                <p className="card-text fs-5"><span className="">Id number : </span> {params.data[0]?.id_number} </p>
                                <p className="card-text fs-5"><span className="">Username : </span> {params.data[0]?.username} </p>
                               
                            </div>
                        </div>
                        
                    </div>
         
                </div>
            </header>
      
      <div className="container-md">
        <div className="row justify-content-center mb-5">
          <div className="col-12">
            <h1>My events :</h1>
            <div className="card" style={{border: "none"}}>
              <div className="card-body text-center">
              
                {params.data?.map((event) => (
                <div className="card mt-3" >
                  <div className="card-body">
                    <div className="row">
                      <div className="col-md-6">
                        <h3 className="card-title text-primary fw-bold mb-3">
                          {event.eventsname}
                        </h3>
                        <p className="card-text mb-4">
                          {event.descr}
                        </p>
                      </div>
                      <div className="col-md-6">
                        <div className="event-details">
                          <p className="mb-2 text-info">
                            <strong>Location:</strong> {event.location}
                          </p>
                          <p className="mb-2 text-success">
                            <strong>Date:</strong> {event.dateStart}
                          </p>
                          <p className="mb-2">
                            <strong>Voting Instructions:</strong> 
                            {event.instruction}
                          </p>
                          <p className="mb-0 text-muted">
                            <strong>Status:</strong> Event open
                          </p>
                          <Link to={"/eventpage?id="+event.id_events_random}>
                          <button className="btn btn-info mt-3" >
                            Preview
                          </button>
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                  ))}
                <div className="text-end mt-4">
                  <a href="#" className="btn btn-primary">
                    View All Events
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
