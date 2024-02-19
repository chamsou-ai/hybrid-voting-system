import React,{useState,useContext,useEffect} from "react";
import Nav_bar_Sign from "../parts/nav_bar_Sign";
import { AuthContext } from "../../Require/Auth";
import { useLocation, useNavigate ,Link} from "react-router-dom";
import axios from "axios";
import formData from 'form-data'
import Nav_bar_events from "./Nav_bar_events";
import { First } from "react-bootstrap/esm/PageItem";
import Notification_one_tag from "./Notification_one_tag";
import Posts from "../parts/posts";
import PostForm from "../../Work/PostForm";
import CreatePoolPage from "./pools";



export default ()=>{
    const [switchs,setSwitchs] = useState(true)
    const [First,setF] = useState(true)
    var formdata = new formData()
    const [data,setData]  = useState('')
    const [admin,setAdmin]  = useState(false)
    const location = useLocation();
    const {currentUser} = useContext(AuthContext)
    const navigate = useNavigate()
    const searchParams = new URLSearchParams(location.search);
    const id_events_random = searchParams.get('id');
    const id_user = searchParams.get('idUser');


    //
    const[notification,setnotification]=useState(false);
    const[post,setpost]=useState(false);
    const[poll,setpoll]=useState(false);
    const[candidate,setcandidate]=useState(false);
    const[voter,setVoter]=useState(false);
    //

    console.log(id_events_random);
    console.log(id_events_random);
   useEffect(()=>{
    if(currentUser ==null)
    navigate('/login')
    },[])
    
    useEffect(()=>{
        axios.post("http://localhost:2000/get/eventdetails", {id :id_events_random ,id_user :currentUser.id_users}).then((res)=>{
        if(!res.data.error) 
        {
            setData(res.data)
            setAdmin(true)}  
        })
    },[])
    return(
        <>
        <Nav_bar_Sign/>
        
         <header id="head" className=" w-100 container"style={{backgroundImage:"url(./img/"+data[0]?.img_back +")", backgroundRepeat :"no-repeat",backgroundSize:"cover",height :"auto",width:"100%"} }  >
         
        <div className=" px-5 w-100" >
                    <div className="d-flex gx-5 jus-b al-c h-100 w-100 " >
                        <div className=" my-5 h-100 w-100">
                            <div className=" text-center text-xl-start bg-white p-5 h-100">
                                <h1 className="display-3 fw-bolder text-black mb-2">{data[0]?.eventsname}</h1>
                                <p className="lead fw-normal text-light-40 mb-4 "> {data[0]?.descr}</p>
                                <p className="lead fw-normal text-light-40 mb-4">{data[0]?.instruction}</p>
                                <p className="  fw-normal text-primary mb-4">
                                    <u className="me-2">{data[0]?.dateEnd}</u>
                                    <u>{data[0]?.dateStart}</u>
                                    </p>
                                <div className="d-grid gap-3 d-sm-flex justify-content-sm-center justify-content-xl-start">
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
        </header>
        
      <Nav_bar_events idEvent={data[0]?.id_events_random}/>
                        

        <div className="container  border rounded mb-1">
            <div className="d-flex al-c jus-c ">

            <button className="btn  m-2 fs-3"
            onClick={ ()=>{setSwitchs(true);setF(false)}}
            >  <i class=" bi bi-image text-dark me-2">
                </i> <u>
            Create Post

            </u></button>
            <button className="btn  m-2 fs-3" 
            
            onClick={ ()=>{setSwitchs(false) ;setF(false)}}
            >  <i class=" bi bi-book-fill text-dark me-2"></i>
            <u>
            Create Poll

            </u>
            </button>
            </div>
           
            {switchs?(
                First?(""):
                <>
                 <button className="btn  m-2 fs-1  top-50 end-100" 
            
            onClick={ ()=>{setF(true)}}
            >  <i class=" bi bi-x text-dark me-2"></i></button>

                <PostForm/>
                </>
            ):
            First?(""):
            <>
             <button className="btn  m-2 fs-1  top-50 end-100" 
            
            onClick={ ()=>{setF(true)}}
            >  <i class=" bi bi-x text-dark me-2"></i></button>

            <CreatePoolPage/>
            </>
            }
            
            {/* <Request_ id = {data[0]?.id_events}/> */}
        </div>

        </>
    )
}