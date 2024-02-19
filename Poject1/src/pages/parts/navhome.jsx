import React from "react";

export default ()=>{

    return (

        <nav class="navbar navbar-expand-lg ">
        <div class="container-fluid">
          <a class="navbar-brand ml-2" href="#"><img src="vimeo (1).png" alt=""/></a>
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse " id="navbarSupportedContent">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
              <li class="nav-item">
                <a class="nav-link active link-dark" aria-current="page" href="#">HOME</a>
              </li>
              <li class="nav-item">
                <a class="nav-link link-secondary" href="#">NEWS</a>
              </li>
              <li class="nav-item">
                <a class="nav-link link-secondary" href="#">ABOUT</a>
              </li>
            </ul>
            <form class="d-flex" action='/home'>
              <a href='#form-s' class="btn btn-primary me-4 d-inline-block" type="submit">SIGN UP</a>
              <button class="btn btn-outline-dark" type="submit">LOGIN</button>
            </form>
          </div>
        </div>
      </nav>

    )
}