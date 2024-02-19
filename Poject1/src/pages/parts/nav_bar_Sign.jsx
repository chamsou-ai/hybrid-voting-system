import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../Require/Auth";

export default (ps)=>{
        const {logout,currentUser} = useContext(AuthContext)
    
    
    return (
        <>
        
        <nav className="navbar navbar-expand-lg navbar-white   position-sticky fixed-top  "id="" style={{backgroundColor :"#f2f2f2"}}>
                <div className="container px-5">
              
                <Link to='/home' className="navbar-brand"><img src="./img/vote2.png" alt="VOTE" width="100" /></Link>
             <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation"><span className="navbar-toggler-icon"></span></button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav ms-auto me-3 mb-2 mb-lg-0">
                            <Link to='/home' className="nav-link text-dark fw-normal"> <li className="nav-item">Home</li></Link>
                            <Link to='/Events' className="nav-link text-white"> <li className="nav-item">Events</li></Link>
                            <Link to='/eventsFollow' className="nav-link text-dark"> <li className="nav-item">Follow Events</li></Link>
                           

                        </ul>
                        <form className="d-flex me-3" role="search">
                    <input className="form-control me-2" type="search" placeholder="Search for page" aria-label="Search"/>
                    <button className="btn btn-outline-dark" type="submit">Search</button>
                        
                        </form>
                        <Link to={'/Create'}> <a className="btn btn-dark me-2" type="submit">Create Event</a></Link>
                            <a className=" btn"> <Link to={'/profile'}> <img className="img-nav rounded-5" src= {'./img/'+currentUser?.imgFile} alt="" /></Link></a>
                            <Link to={'/Login'}><a className=" btn btn-outline-primary" onClick={logout}>Logout</a></Link>
                        </div>
                </div>
                           
            </nav>
        </>
    )
}