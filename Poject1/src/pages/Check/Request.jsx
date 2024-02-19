import axios from "axios";
import React, { useEffect, useState } from "react";

export default  (params) =>{

    const [data,setData]=useState(null)
    
    
        setInterval(()=>{
        
        axios.post('http://localhost:2000/get/request',{ id :params.id}).then( (res)=>{
        if(!res.data.error)
        {
            setData(res.data)
        }else{
        }
    })
        },2000)
        
    return(
        <>
        <section className="py-5 ">
                <div className="container px-5">
                    <div className="">
                            
                        <div className="col-xl-8">
                            <h2 className="fw-bolder  mb-4">All Request :</h2>
                {data?.map( (item) => (
                            <div className="mb-4">
                                <div className="small text-muted">{item?.time}</div>
                                <a className="link-dark" href="#!"><h3>{item?.firstname + "" + item?.firstname}</h3></a>
                            </div>
                ))}
                            <div className="text-end mb-5 mb-xl-0">
                                <a className="text-decoration-none" href="#!">
                                    More news
                                    
                                </a>
                            </div>
                        </div>
                        
                       
                    </div>
                </div>
            </section>
        </>
    )
}