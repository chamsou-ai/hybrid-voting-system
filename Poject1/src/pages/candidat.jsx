import React, { useEffect,useState } from "react";
import axios from 'axios'



export default ()=>{

    const [data, setData] =useState([]);

    useEffect(()=>{
        axios.get('http://localhost:2000/').then(res=>{
            setData(res.data);
        })
    },[])
    
    return(<>

<div className="container mt-3 mb-5">
    <div className="row gx-5">
    <div class="row gx-5 justify-content-center mt-4">
                        <div class="col-lg-8 col-xl-6">
                            <div class="text-center">
                                <h1 class="fw-bolder">Pages</h1>
                                <p class="lead fw-normal text-muted mb-5">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eaque fugit ratione dicta mollitia. Officiis ad.</p>
                            </div>
                        </div>
                    </div>
        {data.map(row =>{
            return(
                <div className="col-lg-4 mb-5">

                    <div className="card h-100 shadow border-0">
                                <img className="card-img-top" src={row.image} alt="..." />
                                <div className="card-body p-4">
                                    <div className="badge bg-primary bg-gradient rounded-pill mb-2">{row.number}</div>
                                    <a className="text-decoration-none link-dark stretched-link" href="#!"><h5 className="card-title mb-3">{row.first_name}</h5></a>
                                    <p className="card-text mb-0">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                </div>
                        </div>
                </div>
            )
        })}
        <div class="text-end mb-5 mb-xl-0 ">
                        <a class="text-decoration-none text-warning" href="/pages">
                            More 
                            <i class="bi bi-arrow-right text-warning"></i>
                        </a>
                    </div>
                    <br/>
        </div>
    
        </div>
        </>)}