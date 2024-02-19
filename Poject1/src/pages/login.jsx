import React, { useEffect, useState,useRef,useContext } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from 'react-router-dom';
import { AuthContext } from "../Require/Auth";





export default () => {

  
  const navigate = useNavigate()
  const [err,setErr] = useState(false)
  const userRef = useRef();
  const errRef = useRef();
  const [data,setform]=useState({username :'',password:''})
  const [user, setUser] = useState('');
  const [pwd, setPwd] = useState('');
  
  const {login,currentUser,logout} = useContext(AuthContext)
    
  useEffect(()=>{
logout()
  },[])
       async function Click(e) 
     {
 
      try{
      e.preventDefault();
    
      setform({username : user, password : pwd})
      await login({username : user, password : pwd})
      if(currentUser !==null)
      navigate('/')
      else{
        setErr(true)
        errRef.current.focus()
      }
  }
          catch(err)
          {
            console.log('catch');
            
              setErr(true)
              errRef.current.focus()

            }
              
            }

    useEffect(()=>{

      userRef.current.focus()
    },[])

    useEffect(()=>{

      setErr(false)
    },[user,pwd])


    useEffect(()=>{
      
    },[data])


  return (
    <>

      <div className=" container  p-a cntr"style={{ width: "1000px" }} >
        <div className="row justify-content-center">
          <div className="col-12 col-md-8 col-lg-6">
           
            <div className="card shadow">
            <div ref={errRef} className={err? "m-2 text-center alert alert-danger ":"text-center alert alert-danger d-none "} role="alert">
              Username or password is wrong!!!
              </div>
              <div className="row justify-content-center card-body p-3 pt-5 pb-5">
              
                   <h4 className="mb-4 display-5 ">Login your account </h4>
                <img  className=" w-50 mb-5" src="./img/LOGIN.png" alt="" />
                
                <form action="" method="post"  encType="multipart/form-data" noValidate onSubmit={Click}>
                  <div className="form-floating mb-3">
                    <input
                      type="text"
                      className="form-control"
                      id="floatingInput"
                      name="username"
                      ref={userRef}
                      placeholder="Your usrname address"
                      onChange={(e)=>{setUser(e.target.value)}}
                  />

                    <label htmlFor="floatingInput">Username...</label>
                  </div>
                  <div className="form-floating mb-3">
                    <input
                      type="password"
                      className="form-control"
                      id="floatingPassword"
                      placeholder="Password"
                      name="password"
                      onChange={(e)=>{setPwd(e.target.value)}}
                      
                    />
                    <label htmlFor="floatingPassword">Password...</label>
                  </div>
                  {/* <div className="form-floating mb-3">
                    <input
                      type="password"
                      className="form-control"
                      id="floatingConfirmPassword"
                      placeholder="Confirm password"
                    />
                    <label htmlFor="floatingConfirmPassword">
                      Confirm password
                    </label>
                  </div> */}
                  
                  <div className=" text-center">
                    <button className="btn btn-primary btn-lg" type="submit">
                      LOGIN
                    </button>
                  </div>
                </form>
                <hr className="my-4" />
                <p>
                  {/* Already have an account? <a href="#">SIGN up</a> */}
                  Don't have account? <Link to={'/sign'}  >SIGN UP</Link>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      
    </>
  );
};
