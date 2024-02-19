import React from "react";
import { Container, Button, Row, Col, Image } from "react-bootstrap";
import MenuBar from "../pages/Check/MenuBar";
import Posts from "../pages/parts/posts";
import Nav_bar_Sign from "../pages/parts/nav_bar_Sign";


const CandidateProfile = () => {
  return (
    <div>
      <div className="">
       <Nav_bar_Sign/>
      </div>
      <div className="d-flex">
        <MenuBar />
        <div>
          <Container className="mt-5">
            <Row className="justify-content-center">
              <Col xs={12} md={4} className="text-center">
                <Image
                  src='./img/web_img_source/P_h.png'
                  alt="Candidate Image"
                  style={{
                    width: "200px",
                    height: "200px",
                    borderRadius: "50%",
                  }}
                  fluid
                />
                <h3 className="mt-3">Chamsou mekahal</h3>
                <p className="text-muted">Birthday: 06/04/2002</p>
                <p className="text-muted">Location: Algeria, laghouat</p>
                <Button variant="primary" className="mt-3">
                  Vote Now
                </Button>
              </Col>
              <Col xs={12} md={8}>
                <div className="mb-4">
                  <h5>Plan:</h5>
                  <p className="text-muted">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                    aliquet scelerisque nunc, id luctus ligula dapibus vel.
                    Nulla vitae magna vitae augue posuere tempor a non elit.
                    Donec sed fringilla neque. Vestibulum porttitor orci et
                    turpis feugiat dapibus. Integer tincidunt euismod lobortis.
                    Integer a nulla malesuada, rutrum nulla vel, condimentum
                    dui. Phasellus non imperdiet dolor, et dapibus nulla. Sed
                    imperdiet bibendum velit, id consectetur nunc sollicitudin
                    nec. Vivamus gravida elit et libero efficitur tincidunt.
                    Quisque vestibulum mi at libero lobortis lobortis.
                  </p>
                </div>
                
               
              </Col>
              <div className="w-100">
              
              <h5 className="fs-2 m-5 mb-1">Recent Posts</h5>
                <Col className="container text-center w-100 d">
                <div>
                        <div className="d-flex al-c jus-b w-100">
                      <Row class="border" style={{width: "18rem;"}}>
                        <img src="./we-o.jpg" class="card-img-top" alt="./we-o.jpg"/>
                       
                      </Row>
                        <Row class="border" style={{width: "18rem;"}}>
                        <img src="./we-o.jpg" class="card-img-top" alt="./we-o.jpg"/>
                       
                      </Row>
                        <Row class="border" style={{width: "18rem;"}}>
                        <img src="./we-o.jpg" class="card-img-top" alt="./we-o.jpg"/>
                       
                  </Row>
                  </div>
                  </div>
                </Col>
              </div>
            </Row>
            
          </Container>
        </div>
        
      </div>
    </div>
  );
};

export default CandidateProfile;
