import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from "../../Require/Auth";


const DataFetcher = () => {


        const {currentUser} = useContext(AuthContext);
        const [change,setImagePreview] =useState(null)
        const [selectedOption,setSelectedOption] =useState(null)
        const handleSelectChange = (event) => {
                const selectedValue = event.target.value;
                setSelectedOption(selectedValue);
              };
        const handleImageSelect = (e) => {
                const file = e.target.files[0];
                setImagePreview(URL.createObjectURL(file));
              };

       function Click (e){
    
       }
        return(
                   
                <div className="container-fluid " style={{height:"1000px"}}>
                <form className="row g-3 needs-validation container-sm" novalidate>
                        <div className="container mt-5 mb-5 d-flex al-c ">
                                <img src={!change?(`./img/${currentUser?.imgFile}`):(change)} alt="" style={{with:"300px",height:"300px",backgroundSize:"cover"}  }className="" />
                                <label className=' btn btn-secondary fs-5 m-5  ' htmlFor="inputGroupFile04"> <i class="fs-5 bi bi-image text-white me-2"></i>Change your Picture</label>
                                <input type="file" class="form-control m-5 h-100 d-none" id="inputGroupFile04" aria-describedby="inputGroupFileAddon04" aria-label="Upload"
                                onChange={e=>handleImageSelect(e)}
                                />
                        </div>
                                <p className='fs-3 mt-4 mb-1'>Account Setting : </p>
                                <div className="col-md-3">
                                <label for="validationCustom01" className="form-label">First name :</label>
                                <input value={currentUser?.firstname} name='firstname' type="text" className="form-control" id="validationCustom01"  required />
                                
                                </div>
                                <div className="col-md-3">
                                <label for="validationCustom02" className="form-label">Last name :</label>
                                <input value={currentUser?.lasrname} name='lastname' type="text" className="form-control" id="validationCustom02"  required />
                                
                                </div>
                                <div className="col-md-3">
                                <label for="validationCustom02" className="form-label">Country :</label>
                                <input  value={currentUser?.country} name='country' type="text" className="form-control" id="validationCustom02"  required />
                                
                                </div>
                                <div className="col-md-3">
                                <label for="validationCustom02" className="form-label">State :</label>
                                <input value={currentUser?.state} name="state" type="text" className="form-control" id="validationCustom02"  required />
                                
                                </div>
                                <div className="col-md-3">
                                <label for="validationCustomUsername" className="form-label">Username</label>
                                <div className="input-group has-validation">
                                
                                <input  value={currentUser?.username} name='username' type="text" className="form-control" id="validationCustomUsername" aria-describedby="inputGroupPrepend" required />
                                </div>
                                </div>
                                <div className="col-md-3">
                                <label for="validationCustom03" className="form-label">Birth date :</label>
                                <input  name='birth' type="date" className="form-control " id="validationCustom03" value={currentUser?.dateB}required />
                               
                                </div>
                                <div className="col-md-3">
                                <label for="validationCustom04" className="form-label">Sexe :</label>
                                <select   name='sexe' className="form-select" id="validationCustom04" required  value={selectedOption} onChange={handleSelectChange}>
                                <option selected> {currentUser?.sexe} </option>
                                <option>Female</option>
                                </select>
                               
                                </div>
                                <div className="col-md-4">
                                <label for="validationCustom05" className="form-label">ID number :</label>
                                <input value={currentUser?.id_number} name='idNumber' type="number" className="form-control" id="validationCustom05" required  onClick={Click}/>
                                
                                </div>
                                <div className="col-md-4">
                                <label for="validationCustom05" className="form-label">Password :</label>
                                <input name='password' type="password" className="form-control" id="validationCustom05" required  onClick={Click}/>
                                
                                </div>
                                <div className="col-12">
                                <div className="form-check">
                                <input className="form-check-input" type="checkbox" value="" id="invalidCheck" required />
                                <label className="form-check-label" for="invalidCheck">
                                        I want to save this change 
                                </label>
                               
                                </div>
                                </div>
                                <div className="col-12">
                                <div className="d-flex">
                                <button className="btn btn-primary me-2" type="submit">Update</button>
                                <button className="btn btn-outline-danger  " onClick={Click}>Cancel</button>
                                </div>
                                </div>
                 </form>
                 </div>
        )
};

export default DataFetcher;
