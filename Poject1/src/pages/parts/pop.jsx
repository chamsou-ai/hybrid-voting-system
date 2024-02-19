import React, { useState,useRef } from "react";

var timer = 0;
export default (prams)=>{
    const refTimer = useRef()
    const [time,setTime] = useState(0)
    console.log('object');
    var endDate = new Date("jun 3, 2023 15:37:22").getTime()
    console.log(new Date().getTime());
   

    return (
        <>
         <div className=" col-xl-4" style={{width :'300px' ,height :'300px'}}>
                            <div className="card border-0 bg-light mt-xl-5">
                                <div className="card-body p-4 py-lg-5">
                                    <div className="d-flex align-items-center justify-content-center">
                                        <div className="text-center">
                                            <div className="h6 fw-bolder">Have more questions?</div>
                                            <p className="text-muted mb-4"  >
                                                <h1 id="couter"></h1>
                                                <br />
                                            </p>
                                            <div className="h6 fw-bolder">Follow us</div>
                                            
                                        </div>
                                    </div>
                                </div>
                            </div>
            </div>
        </>
    )
}