import React from "react";

export default (params)=>{

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
    const eventCandidates = [
       
      
      ];

    return(
        <>
        
        <div className="container p-5">
  
        <h1 className=" mt-2 mb-4" >All candidates : </h1>
        <div className="row mt-4">
          {eventCandidates.map((candidate) => (
            <div className="col-md-4 mb-4" key={candidate.id}>
              <div className="card h-100">
                <img  alt={candidate.name} className={"./img/"+candidate.picture} />
                <div className="card-body d-flex flex-column justify-content-between">
                  <div>
                    <h5 className="card-title text-black">
                      {candidate.name}
                    </h5>
                    <p className="card-text">
                      {candidate.description}
                    </p>
                  </div>
                  <button
                    className="btn btn-primary mt-3"
                    
                  >
                    Vote
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
        </div></>
    )
}