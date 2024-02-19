import React, { useEffect, useState } from "react";
import { Container, Button, Row, Col, Image } from "react-bootstrap";
import MenuBar from "./MenuBar";
import Nav_bar_Sign from "../parts/nav_bar_Sign";
import axios from "axios";
import { useLocation, useNavigate } from "react-router-dom";


const Follower = () => {


    const [users,setUsers]= useState('')
    const location = useLocation();
    const searchParams = new URLSearchParams(location.search);
    const voter_random = searchParams.get('id_follow');
    console.log(voter_random);
    useEffect(()=>{
        axios.post("http://localhost:2000/get/voter",{id : voter_random}).then((res)=>{
            if(!res.data.error)
            {
                setUsers(res.data);
                
            }
        })   
        
    },[])
    
    const Delete=()=>{
        axios.post("http://localhost:2000/get/voter",{id : voter_random ,state :true}).then((res)=>{
            if(!res.data.error)
            {
                navigator("/")
                console.log(res.data);
               
            }
            }) 
       }
       const Accept=()=>{
        axios.post("http://localhost:2000/get/voter",{id : voter_random ,accept :true}).then((res)=>{
            if(!res.data.error)
            {
               navigator("/")
               
            }
            }) 
       }
  return (
    <div>
      <div className="">
       <Nav_bar_Sign/>
      </div>
      <div className="d-flex container">
        <div>
          <Container className="mt-5">
            <Row className="justify-content-center">
              <Col xs={12} md={4} className="text-center">
                <Image
                  src={'./img/'+users[0]?.img_File}
                  alt="Candidate Image"
                  style={{
                    width: "200px",
                    height: "200px",
                    borderRadius: "50%",
                  }}
                  fluid
                />
                <h3 className="mt-3">{users[0]?.firstname +","+users[0]?.lasrname}</h3>
                <p className="text-muted">Birthday: {users[0]?.dateB}</p>
                <p className="text-muted">Location: {users[0]?.country}, {users[0]?.state}</p>
                <Button variant="primary" className="mt-3 me-2">
                Accept  
                </Button>
                <Button variant="danger" className="mt-3 me-2" onClick={Delete}>
                refuse   
                </Button>
              </Col>
              <Col xs={12} md={8}>
                <div className="mb-4">
                  <h5>Plan:</h5>
                  <p className="text-muted">
                  {users[0]?.plans}
                  </p>
                </div>
                
               
              </Col>
            </Row>
            
          </Container>
        </div>
        
      </div>
    </div>
  );
};

export default Follower;
