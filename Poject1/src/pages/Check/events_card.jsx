import React, { useState } from "react";
import { Link } from "react-router-dom";
const Events_card = (props) => {

    const [close ,setClose] = useState(props?.status)
  return (
    
      <div className="CardSn shadow rounded-bottom-3 g-col-6">
        <div className="CardSn-image">
          <img
            src={props.img}
            alt="CardSn Image"
          />
          <div className="CardSn-overlay d-flex  f-d-c jus-c">
            <h1 className="CardSn-date fs-1">{props.data}</h1>
          </div>
        </div>
        <div className="CardSn-content">
        <h1 className="CardSn-title fs-4">
            {props.title}
            </h1>
          <p className="CardSn-text ">
            {props.text}
          </p>
          <p className="CardSn-text ">
            {props.Instructions}
          </p>
          <div className="m-2">
            {close?(
                <span class="badge bg-danger"> Is close</span>
                
                ):(
                    
                    <span class="badge bg-success"> Is open</span>
            )}
            </div>
            <Link to = {props.to}>
            <a className="btn btn-info me-1">
                            View details
                        </a>
            </Link>
            <Link to = {props.to}>
            <a className="btn  me-1">
                            Candidate (6)
                            
                        </a>
            </Link>
            <Link to = {props.to}>
            <a className="btn  me-1">
            Voter (6)
                            
                        </a>
            </Link>
          
        </div>
      </div>
    
  );
};

export default Events_card;