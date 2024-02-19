import React from "react";
import { Link, useParams } from "react-router-dom";
import MenuBar from "./MenuBar";
import Nav_bar_Sign from "../parts/nav_bar_Sign";


const EventPreview = () => {
  // Get the eventTitle from the URL params
  const { eventTitle } = useParams();

  // Fetch the event details based on the eventTitle
  // Replace this with your actual API call or data retrieval method
  const eventDetails = {
    status: "Event open",
    eventName: "Sample Event",
    eventStartDate: "2023-06-01",
    eventEndDate: "2023-06-10",
    eventLocation: "Sample Location",
    eventDescription: "Sample Description",
    eventOrganizer: "Sample Organizer",
    votingInstructions: "Sample Voting Instructions",
  };

  // Fetch the candidates for the event
  // Replace this with your actual API call or data retrieval method
  const eventCandidates = [
    
      
    // Add more candidates as needed
    {
      id: 4,
      name: "Youcef Boudia",
      description:
        "Click details to see my Profile.",
      picture: "P_h.png",
      from: "event4"
    },
    {
      id: 5,
      name: "Lakas Mohamed",
      description: "Champion of education and youth empowerment.",
      picture: "P_h.png",
      from: "event4"
    }  ,  {
      id: 6,
      name: "Chamsou mekahal",
      description: "Check my Profile.",
      picture: "P_h.png",
      from: "Event2"
    },
  ];
  const handleVote = (candidateId) => {
    // Implement your logic to handle the voting process here
    console.log(`Vote for candidate with ID ${candidateId}`);
  };

  return (
    <>
    <Nav_bar_Sign/>
    <div className="d-flex">
      <MenuBar/>
          <div className="mt-3 container">
        
      <h1 className="text-center mt-2" >All candidates : </h1>
        <div className="row mt-4">
          {eventCandidates.map((candidate) => (
            
            <div className="col-md-4 mb-4 " key={candidate.id}>
              <div className="card h-100">
                <img   alt={candidate.name} className="card-img-top" src={"./img/web_img_source/"+candidate.picture} />
                <div className="card-body d-flex flex-column justify-content-between">
                  <div>
                    <h5 className="card-title text-black">
                      {candidate.name}
                    </h5>
                    <p className="card-text">
                      {candidate.description}
                    </p>
                    <p>From : <a className=" btn text-primary">{candidate.from}</a></p>
                    <Link to ={'/canProfile'}
                    className="btn btn-info mt-3"
                    onClick={() => handleVote(candidate.id)}
                  >
                    Details
                  </Link>
                  </div>
                  
                </div>
                
              </div>
            </div>
          ))}
        </div>
      </div>
      </div>
      </>
  );
};

export default EventPreview;
