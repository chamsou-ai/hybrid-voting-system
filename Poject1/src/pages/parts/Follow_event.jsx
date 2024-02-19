import axios from "axios";
import React, { useContext,useState,useEffect,useRef } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../Require/Auth";
import formData from "form-data"



const Events = () => {
  const errRef = useRef();
  const userRef = useRef();
  const msgRef = useRef();
  const [err,setErr] = useState(false)
  const [msgerr,setMsg] = useState('')



  const send = useRef();
  const [display,setDisplay] = useState(false)
  const [Value_b,setValue] = useState("Send you information")
  const isEventClosed = false;
  const location = useLocation();

  const {currentUser} = useContext(AuthContext)

  const [faceimg,setImg] = useState("")
  const [catreimg,setImgcarte] = useState("")
  const [carteSrc,setSrccarte] = useState("./img/web_img_source/carte.png")
  const [faceSrc,setSrcface] = useState("./img/web_img_source/carte.png")


  const searchParams = new URLSearchParams(location.search);

  const eventsid = searchParams.get('id');
  



  const navigate = useNavigate() 
  const [data,setData] = useState([])


  useEffect(()=>{

      if(currentUser ==null)
      navigate('/login')
  },[])



  useEffect(()=>{

        axios.post("http://localhost:2000/get/getevent",{id :eventsid , userId :currentUser.id_users}).then((res)=>{
       
        if(res.data.existe){
          setDisplay(true)
          setValue('Sending ..')
          setData(res.data.existe)
          
          }else{
            setData(res.data)
          }
      })
  },[])




  function Rn() {
    return Math.floor(Math.random(new Date().getTime())*100000000000000);
   };
   function number() {
    return Math.floor(Math.random(new Date().getTime())*1000);
   };


   async function  Click(e){
        console.log("object");
        e.preventDefault()
      if(!display){
      let formdata = new formData()
      formdata.append("face",faceimg)
      formdata.append("carte",catreimg)
      formdata.append("firstname",currentUser.firstname)
      formdata.append("lastname",currentUser.lasrname)
      formdata.append("Category","true")
      formdata.append("plans",e.target.elements.plans.value)
      formdata.append("id_voter_random",Rn())
      formdata.append("event",data.id_events)
      formdata.append("state_acc","false")
      formdata.append("address","address")
      formdata.append("userId",currentUser.id_users)
      formdata.append("time",new Date().getFullYear())
      try{
        e.preventDefault();
        const res = await axios.post("http://localhost:2000/get/followrs",formdata)
        if(res.data)
      {
        if(res.data.error)
        {
          console.log('errrrrrrr');
          setErr(true)
          errRef.current.focus()
          setMsg('Your already in here')
        }
        if(res.data.field)
        {
          setMsg('Require fields')
          errRef.current.focus()
        }
        if(res.data)
          {console.log(res.data);
          navigate("/events")}
        }
        }
      catch(err)
      {
        console.log(err);
        setErr(true)
      errRef.current.focus()
      }
    }}








    function onChange_Method (event)
    {const file = event.target.files[0];
      if (file) {
        const reader = new FileReader();
        reader.onloadend = () => {
          setSrccarte(reader.result);
        };
        reader.readAsDataURL(file);
      }
  
       }





    function onChange_Face (event)
    {const file = event.target.files[0];
      if (file) {
        const reader = new FileReader();
        reader.onloadend = () => {
          setSrcface(reader.result);
        };
        reader.readAsDataURL(file);
      }
  
       }

  return (
    <div>
    {!data?  (<><h1>Not found 404</h1></>):(
      <div className=" ">
        <div className="container d-flex f-d-c al-c">
        <div className="" style={{backgroundImage :"url(./img/"+ data.img_back+")"}}>
            <div className=" container p-4" >
                <div class="card " style={{width : "100%" ,border:'none'}}>
                <div class="card-body row jus-c">
            <div className="">
                <h1 class="display-5 fw-normal text-black mb-2">{data?.eventsname}</h1 >
            </div>
                <p class="card-text">
                  <h5 className=" fw-normal text-black-40 mb-4 mt-2">Events Org </h5>
                   {data?.event_org}
                    <br/>
                </p>
                <p class=" fw-normal text-black-40 mb-4">
                  <h5>Events Description</h5>
                    {data?.descr}
                    <br/>
                </p>
                <p>
                      <strong className=" fw-normal text-black-40 mb-4">Start Date:</strong>{" "}
                      <span style={{ color: "#006699" }}>
                        {data?.dateStart}
                      </span>
              </p>
                <p>
                      <strong className=" fw-normal text-black mb-4">Start Date:</strong>{" "}
                      <span style={{ color: "#006699" }}>
                        {data?.dateStart}
                      </span>
              </p>
                </div>
                </div>
                
            </div>
          </div>
         
          <div className="col-lg-6 p-4 w-100">
            <div className="card border-0 shadow-lg p-4 ">
              <h1 className="  mb-4 mt-2 fs-3">
                Registration: <span>{data?.eventsname}</span>
              </h1>
              <div ref={errRef} className={err? " text-center alert alert-danger p-a cntr":"text-center alert alert-danger d-none "} role="alert">
              {msgerr}
              </div>
              <form onSubmit={Click}>
               
              <div className="col mb-3">
                <label for="validationCustom04" className="form-label fw-bold">Category  :</label>
                <select name='Category' className="form-select" id="validationCustom04" required >
                                <option selected >Voter</option>
                                <option>Candidate</option>
                  </select>
                   </div>

                   <div className="mb-3">
                  <label
                    htmlFor="eventDescription"
                    className="form-label fw-bold"
                  >
                     Your plans :
                  </label>
                  <textarea
                    className="form-control"
                    id="eventDescription"
                    rows="3"
                    placeholder="Your plans ..."
                    name="plans"
                    required
                  ></textarea>
                </div>
                <div className="col d-flex jus-b mb-3">
                  
                  <div className=" col me-2">
                  <div className="">
                    <label
                      htmlFor="eventStartDate"
                      className="form-label fw-bold"
                    >
                      Picture of your carte :
                    </label>
                    <input
                      type="file"
                      className="form-control"
                      id="eventStartDate"
                      onChange={(e)=>{
                        setImgcarte(e.target.files[0])
                        onChange_Method(e)
                      }}
                      required
                      />
                     
                  </div>
                  
                  <div className="image-event  jus-a al-c m-2" style={{width :"200px",height :"200px"}}>
                    <img src={carteSrc} alt=""width={"100%"} height={"100%"}/>
                  </div>
                  </div>
                        <div className="col mb-3">
                          <div className=" al-c jus-b">
                          <div className="">
                    <label
                      htmlFor="eventEndDate"
                      className="form-label fw-bold"
                    >
                      Your image face :
                    </label>
                    <input
                      type="file"
                      className="form-control"
                      id="eventEndDate"
                      name="face"
                      onChange={(e)=>{
                        setImg(e.target.files[0])
                        onChange_Face(e)
                      }}
                      required
                    />
                  </div>
                    <div className="image-event  jus-a al-c m-2"  style={{width :"200px",height :"200px"}}>
                    <img src={faceSrc} alt="" width={"100%"} height={"100%"}/>
                  </div>
                          </div>
                 </div>
                  
                  
                </div>
                
                
               
                <div className="text-center">
                  {isEventClosed ? (
                    <div className="alert alert-danger mb-3">
                      This event is closed for voting.
                    </div>
                  ) : (
                    <button  ref={send} type="submit" className={display?("btn btn-primary me-2 disabled"):("btn btn-primary me-2" )}  name="button">{Value_b}</button>
                  )}
                  
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
      )}
    </div>
  );
};

export default Events;
