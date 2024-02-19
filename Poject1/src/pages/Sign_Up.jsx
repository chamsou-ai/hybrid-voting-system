
import React, { useContext , useEffect, useState } from "react";

import formData from 'form-data'
import { Link,Navigate,useLocation,useNavigate  } from "react-router-dom";
import { AuthContext } from "../Require/Auth";

export default ()=>{
    
  const [walletAddress, setWalletAddress] = useState("");


  const connectWallet = async () => {
    if (typeof window != "undefined" && typeof window.ethereum != "undefined") {
      try {
        /* MetaMask is installed */
        const accounts = await window.ethereum.request({
          method: "eth_requestAccounts",
        });
        setWalletAddress(accounts[0]);
        console.log(accounts[0]);
      } catch (err) {
        console.error(err.message);
      }
    } else {
      /* MetaMask is not installed */
      console.log("Please install MetaMask");
    }
  };
  connectWallet()


  const [dateerr,setCheck] = useState(null)
    const [file_up, setfile_up] = React.useState(null);
    const navigate = useNavigate() 
    const[firstname,Setfirst]=useState('')
    const[lastname,Setlast]=useState('')
    const[password,Setpass]=useState('')

    const [selectedOption,setSelectedOption] =useState("Male")
        const handleSelectChange = (event) => {
                const selectedValue = event.target.value;
                setSelectedOption(selectedValue);
                console.log(selectedOption);
              };


    var date =new Date()
    
     function  Ru() {
      const randomNumber = Math.floor(Math.random() * 10000); // Generate a random number between 0 and 999
      const username = `${firstname.toLowerCase()}${lastname.toLowerCase()}${randomNumber}`;
      return username
      
    }
    function verifie(date)
    {
      const date2 = new Date("2005").getTime();
      const date1 =new Date(date).getTime();
      const diffTime = date2 - date1;
      const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
      console.log(diffDays);
      if(diffTime>0)
        return true;
        else
        return false;
    }
   
    
     function Rn() {
       return Math.floor(Math.random(date.getTime())*100000000000000);
      };
      const {sign,currentUser} =  useContext(AuthContext)
     const Click  =async (e)=>
    {
      e.preventDefault(); 
      if(e.target.elements.password.value.length <10)
      {
        setCheck("Password is less to 10 ?")
      }else
        if(password !==e.target.elements.password.value){
        setCheck("Check Your password ?")
      }else{
      if(verifie(e.target.elements.brith.value) && (walletAddress !=="")){

      let formdata = new formData()
      
      formdata.append("file",file_up)
      formdata.append("firstname",e.target.elements.firstname.value)
      formdata.append("lastname",e.target.elements.lastname.value)
      formdata.append("country",e.target.elements.country.value)
      formdata.append("state",e.target.elements.state.value)
      formdata.append("brith",e.target.elements.brith.value)
      formdata.append("id",e.target.elements.idNumber.value)
      formdata.append("pass",e.target.elements.password.value)
      formdata.append("random",Rn())
      formdata.append("username",e.target.elements.username.value)
      formdata.append("sexe",selectedOption)
      console.log(formdata);
      try{
        sign(formdata)
        navigate('/')
      }
      catch(err)
      {
        console.log(err);
      }
    }else{
      setCheck("Check your date ?")
    }
  }
      
    }

    // useEffect(()=>{
    //   axios.get(`http://localhost:2000/`).then( (res)=>{
        
    //   })
    //   axios.post(`http://localhost:2000/testcc`,{text :'cc'})
    // },[])
    const [change,setImagePreview] =useState(null)

    const handleImageSelect = (e) => {
            const file = e.target.files[0];
           if(file)
            setImagePreview(URL.createObjectURL(file));
            else
            setImagePreview("./img/web_img_source/P_h.png")
          };
return (
  <>
   <div className="container shadow-lg  p-5" style={{height:"auto"}}>
   {dateerr?(
            <div class="alert alert-danger text-center mt-0 mb-2 fixed-top " role="alert">
           {dateerr}
             </div>
          ):(
            <></>
          )}
                      {walletAddress?(<div class="alert alert-success" role="alert">
              Metamask connected
                              </div>):(<>
                                <div class="alert alert-danger" role="alert">
                    Your must have account metamask
                  </div>
            </>)}
    <p className="fs-1 m-3">Create Account</p>
         
                <form className="row g-3 needs-validation container-sm border rounded p-2" novalidate onSubmit={Click}>
                        <div className="container mt-5 mb-5 d-flex al-c ">
                                <img src={!change?("./img/web_img_source/P_h.png"):(change)} alt="" style={{with:"300px",height:"300px",backgroundSize:"cover"}  }className="" />
                                <label className=' btn btn-secondary fs-5 m-5  ' htmlFor="inputGroupFile04"> <i class="fs-5 bi bi-image text-white me-2"></i>Choosing Your Profile Picture</label>
                                <input name="" type="file" class="form-control m-5 h-100 d-none" id="inputGroupFile04" aria-describedby="inputGroupFileAddon04" aria-label="Upload"
                                onChange={e=>{handleImageSelect(e);setfile_up(e.target.files[0])}}
                                />
                                
                        </div>
                                
                                <div className="col-md-3">
                                <label for="validationCustom01" className="form-label">First name :</label>
                                <input name='firstname'  type="text" className="form-control" id="validationCustom01"  required onChange={e=>Setfirst(e.target.value)} />
                                
                                </div>
                                <div className="col-md-3">
                                <label for="validationCustom02" className="form-label">Last name :</label>
                                <input name='lastname'  type="text" className="form-control" id="validationCustom02"  required onChange={e=>Setlast(e.target.value)}/>
                                
                                </div>
                                <div className="col-md-3">
                                <label for="validationCustom02" className="form-label">Country :</label>
                                <input name='country'  type="text" className="form-control" id="validationCustom02"  required />
                                
                                </div>
                                <div className="col-md-3">
                                <label for="validationCustom02" className="form-label">State :</label>
                                <input name="state"  type="text" className="form-control" id="validationCustom02"  required />
                                
                                </div>
                                <div className="col-md-3">
                                <label for="validationCustomUsername" className="form-label">Username</label>
                                <div className="input-group has-validation">
                                
                                <input name='username' type="text" className="form-control" id="validationCustomUsername" aria-describedby="inputGroupPrepend" disabled required value={Ru()}/>
                                </div>
                                </div>
                                <div className="col-md-3">
                                <label for="validationCustom03" className="form-label">Birth date :</label>
                                <input name='brith'  type="date" className="form-control " id="validationCustom03"  required onClick={e=>setCheck(false)}/>
                               
                                </div>
                                <div className="col-md-3">
                                <label for="validationCustom04" className="form-label">Sexe :</label>
                                <select name='sexe' className="form-select" id="validationCustom04" required value={selectedOption} onChange={handleSelectChange}  >
                                <option selected > Male</option>
                                <option>Female</option>
                                </select>
                               
                                </div>
                                <div className="col-md-4">
                                <label for="validationCustom05" className="form-label">ID number :</label>
                                <input name='idNumber'  type="number" className="form-control" id="validationCustom05" required />
                                
                                </div>
                                <div className="col-md-4">
                                <label for="validationCustom05" className="form-label">Password :</label>
                                <input name='password'  type="password" className="form-control" id="validationCustom05" required />
                                
                                </div>
                                <div className="col-md-4">
                                <label for="validationCustom05" className="form-label">Repeat your password:</label>
                                <input name=''  type="password" className="form-control" id="validationCustom05" required onChange={e=>Setpass(e.target.value)} />
                                
                                </div>
                                <div className="col-12">
                                <div className="form-check">
                                <input className="form-check-input" type="checkbox" value="" id="invalidCheck" required />
                                <label className="form-check-label" for="invalidCheck">
                                    Click to confirm   </label>
                               
                                </div>
                                </div>
                                <div className="col-12">
                                <div className="d-flex">
                                <button className="btn btn-primary me-2" type="submit">Create</button>
                                <Link to={"/login"} className="btn btn-outline-black  ">Already have an account? <u>LOGIN</u> </Link >
                                </div>
                                </div>
                 </form>
                 </div>
      
  </>
)
}