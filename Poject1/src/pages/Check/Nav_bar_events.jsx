import React from "react"
import { Link } from "react-router-dom"

export default  (parms)=>
{
    return(
        <>
        <nav className="  nav navbar navbar-expand-lg navbar-light mt-3 " id="nav" >
         <div className="container">
            
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation"><span className="navbar-toggler-icon"></span></button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            
                            <form className="d-none d-lg-inline-block form-inline ms-auto me-0 me-md-3 my-2 my-md-1 w-100">
                <div className="input-group">
                    <input className="form-control" type="text" placeholder="Search for ..." aria-label="Search for..." aria-describedby="btnNavbarSearch" />
                    <button className="btn btn-light" id="btnNavbarSearch" type="button"><i class="bi bi-search fs-5 text-dark"> </i></button>
                </div>
            </form>
            <ul className="navbar-nav ms-auto  mb-lg-0 ">
                            <li className="nav-item "><Link to='/' className="nav-link">Posts</Link></li>
                            <li className="nav-item "><Link to='/' className="nav-link" >Polls</Link></li>
                            <li className="nav-item "><Link to='/' className="nav-link" >Candidates</Link></li>
                           
                                <li className="nav-item "><Link to={'/notification?id='+parms.idEvent} className="nav-link" >Notification</Link></li>
                           
            </ul>
            </div>
            </div>
            
        </nav>
        </>
    )
}