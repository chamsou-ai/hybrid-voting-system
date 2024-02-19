import React from "react";
import { Link } from "react-router-dom";
const CardSn = (props) => {
  return (
    
      <div className="CardSn shadow rounded-bottom-3">
        <div className="CardSn-image">
          <img
            src={props.img}
            alt="CardSn Image"
          />
          <div className="CardSn-overlay d-flex  f-d-c jus-c">
            <h1 className="CardSn-date fs-1">{props.data}</h1>
            <h1 className="CardSn-title fs-4">
            {props.title}
            </h1>
          </div>
        </div>
        <div className="CardSn-content">
          <p className="CardSn-text ">
            {props.text}
            <Link to = {props.to}>
            <a className="btn btn-link">
                            {props.link}
                            
                        </a>
                        </Link>
          </p>
          
        </div>
      </div>
    
  );
};

export default CardSn;