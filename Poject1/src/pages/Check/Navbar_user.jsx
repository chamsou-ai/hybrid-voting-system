import React from "react";


export default (params)=>{


    return (
        <>
           <div className="mt-5">
        <nav className="container navbar navbar-expand-lg navbar-dark bg-dark">
          <div className="container-fluid">
            <a className="navbar-brand me-4" href="#">
              <img
                src={"./img/"+params.img_File}
                alt="Profile"
                className="rounded-circle"
                style={{ width: "auto", height: "40px" }}
              />
              <span className="ms-2 text-light">{params.userProfile.firstname +" " + params.userProfile.lasrname}</span>
            </a>
            <div className="navbar-nav ms-auto">
              <a className="nav-link" href="#">
                Followers: {params.userProfile.followers}
              </a>
              <a className="nav-link" href="#">
                Events Created: 5
              </a>
              <a className="nav-link" href="#">
                Candidates Supported: 10
              </a>
            </div>
          </div>
        </nav>
      </div>
</>
    )
}