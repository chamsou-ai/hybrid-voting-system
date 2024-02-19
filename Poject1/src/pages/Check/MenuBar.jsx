import React, { useContext } from "react";
import { Navbar, Nav, Form, FormControl, Button } from "react-bootstrap";
import { useNavigate } from "react-router";
import { Link } from "react-router-dom";
import { AuthContext } from "../../Require/Auth";


const MenuBar = (params) => {
  const {currentUser} =useContext(AuthContext)
  const Navigate = useNavigate();
  return (
    <div
      className=" "
      style={{
        width: "300px",
        minHeight: "100vh",
        padding: "20px",
        color: "white",
        textAlign: "center",
        backgroundColor:"#f2f2f2"
      }}
    >
      <div
        style={{
          position: "sticky",
          top: 10,
          marginBottom: "20px",
          zIndex: 1,
          
        }}
      >
        <ul className=" navbar-nav  ms-auto">
        
        <li className="nav-item ">
          <Link to ={'/profile'} className="nav-link d-flex al-c jus-e" href="#">
          <img
          src={'./img/'+currentUser.imgFile}
          className="img-fluid rounded-circle me-1 mb-4 fs-4"
          style={{ width: "60px" ,height:'60px'}}
          />
           <p className="fs-5 navbar-brand" href="#" >{currentUser?.firstname + " "+currentUser?.lasrname}</p>
          </Link>
        </li>
        </ul>
          <Link to={"/Allevents_dash"}
           className="fs-5 btn btn-light text-dark d-flex al-c jus-b"
           
           style={{
             textDecoration: "none",
             transition: "color 0.3s",
            }}
           >
            Events
            <i class="fs-4 bi bi-calendar3-range-fill text-dark"></i>
           </Link>
        
        <hr
          style={{
            borderTopColor: "rgb(255, 255, 255)",
            margin: "10px 0",
          }}
        />
         <Link to={"/notification"}
          
          className="fs-5 btn btn-light text-dark d-flex al-c jus-b"
          style={{
            textDecoration: "none",
            transition: "color 0.3s",
          }}
        >
          Notification
          <i class="fs-4 bi bi-bell text-dark"></i>
          
        </Link>
        <hr
          style={{
            borderTopColor: "rgb(255, 255, 255)",
            margin: "10px 0",
          }}
        />
         <Link to={"/Follow Events"}
          
          className="fs-5 btn btn-light text-dark d-flex al-c jus-b"
          style={{
            textDecoration: "none",
            transition: "color 0.3s",
          }}
        >
          Follow Events
          <i class="fs-4 bi bi-bookmark-fill text-dark"></i>
          
        </Link>
       
        
        
        <hr
          style={{
            borderTopColor: "rgb(255, 255, 255)",
            margin: "10px 0",
          }}
        /> <Link to={"/Allevents_dash"}
        
        className=" fs-5 btn btn-light text-dark d-flex al-c jus-b"
        style={{
          textDecoration: "none",
          transition: "color 0.3s",
        }}
      >
        Settings
        <i class="fs-4 bi bi-gear text-dark"></i>
      </Link>
        <hr
          style={{
            borderTopColor: "rgb(255, 255, 255)",
            margin: "10px 0",
          }}
        />
         <Link to={"/Allevents_dash"}
        
          className="fs-5 btn btn-primary text-dark d-flex al-c jus-b "
          style={{
            textDecoration: "none",
            transition: "color 0.3s",
          }}
         
        >
          <i class="fs-4 bi bi-box-arrow-right text-dark"></i>
          LOGOUT
        </Link>
      </div>
    </div>
  );
};

export default MenuBar;
