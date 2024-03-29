import React from "react";
import { Link } from "react-router-dom";
export default ()=>{
    
    return(

        <>
        <nav className="welcome navbar navbar-expand-lg navbar-dark  fixed-top"id="" style={{transition:'1s'}}>
                <div class="container px-5">
                <a class="navbar-brand" href="#">
        <img src="./img/vote.png" alt="VOTE" width="100" />
            </a> <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation"><span class="navbar-toggler-icon"></span></button>
                    <div class="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
                            <li class="nav-item"><a class="nav-link" href="#home">Home</a></li>
                            <li class="nav-item"><a class="nav-link" href="#about">Posts</a></li>
                            
                        </ul>
                        <form class="d-flex m-2" action='/home'>
                        <Link to={'/sign'}><a href='#Sign' class="btn btn-light me-4 d-inline-block" type="submit">SIGN UP</a></Link>
                        <Link to={'/login'}><a class="btn btn-outline-light "href="login" >LOGIN</a></Link>   
            </form>
                    </div>
                </div>
            </nav>
            <header class="masthead " id="home">
            
            <div class="container ">
                <div class="masthead-heading text-uppercase text-white ">Welcome to our voting platform!</div>
                <div class="blur- lh-lg fw-light h5 text-white ">Our website is a secure and reliable way to make your voice heard. Cast your ballot in just a few clicks and be confident that your vote is protected and confidential. <a className="btn btn-link" href="login">Join us in the democratic process today!</a></div>
               
            </div>
    </header>
        </>
    )
}