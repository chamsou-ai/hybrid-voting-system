import React ,{useState} from 'react';
import { useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import axios from 'axios'

export default()=> {
    const [data, setData] =useState([]);

    useEffect(()=>{
        axios.get('http://localhost:2000/').then(res=>{
            setData(res.data);
        })
    },[])
    


        const location = useLocation();
        const searchParams = new URLSearchParams(location.search);
        const userId = searchParams.get('id');

  return (


    <div>
        {data.map(row =>{

            const id= "'"+row.id_cnd+"'"
            console.log(id);
            if((id===userId))
        {
            
            return(
                <div className="col-lg-4 mb-5">

                <div className="card h-100 shadow border-0">
                            <img className="card-img-top" src={row.image} alt="..." />
                            <div className="card-body p-4">
                                <div className="badge bg-primary bg-gradient rounded-pill mb-2">{row.id_cnd}</div>
                                <a className="text-decoration-none link-dark stretched-link" href="#!"><h5 className="card-title mb-3">{row.first_name}</h5></a>
                                <p className="card-text mb-0">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            </div>
                    </div>
            </div>

            )
        }else{
            return(
                <div className="col-lg-4 mb-5">
                    not found
                </div>
            )
        }
        })}
    </div>
  );
}
