import React from "react";
import { Link } from "react-router-dom";

export default (prams)=>{

    return(
        <>
        <main class="flex-shrink-0 container">
           
            
            <section class=" py-2">
                <div class=" px-5 my-5 card py-3">
                    <div class="row gx-5 jus-b ">
                       
                        <div class="col-lg-9 ">
                           
                            <article>
                               
                                <header class="mb-1">
                                    
                                    <h1 class="fw-bolder mb-2 mt-2">Now i have Your hands</h1>
                                </header>
                                
                                <figure class="mb-4"><img class="img-fluid" src="./We-o.jpg" alt="..." /></figure>
                               <div className="d-flex al-c m-2">
                                   <img src="./fischer1.jpg" alt="" style={{width:"60px",height :"60px"}} className="rounded-circle "/>
                                    <p class="fs-5 m-2"><Link to={"CandidateProfile?id"+prams?.idUser} >{prams.candidate}</Link></p>
                                </div>
                               
                                <section class="mb-5">
                                    <p class="fs-5 mb-4 ">Science is an enterprise that should be cherished as an activity of the free human mind. Because it transforms who we are, how we live, and it gives us an understanding of our place in the universe.</p>
                                    <p class="fs-5 mb-4">The universe is large and old, and the ingredients for life as we know it are everywhere, so there's no reason to think that Earth would be unique in that regard. Whether of not the life became intelligent is a different question, and we'll see if we find that.</p>
                                    <p class="fs-5 mb-4">If you get asteroids about a kilometer in size, those are large enough and carry enough energy into our system to disrupt transportation, communication, the food chains, and that can be a really bad day on Earth.</p>
                                  <p class="fs-5 mb-4">Venus has a runaway greenhouse effect. I kind of want to know what happened there because we're twirling knobs here on Earth without knowing the consequences of it. Mars once had running water. It's bone dry today. Something bad happened there as well.</p>
                                </section>
                                <from className="from d-flex al-c">
                                <textarea type="text" className="form-control  m-3" placeholder="Type Something..."/>
                                <input type="button" value="Support" className="btn btn-secondary" />
                                </from>
                            </article>
                            
                            <section>
                                
                            </section>
                        </div>
                        <div class="col-lg-3">
                            <div class="d-flex align-items-center mt-lg-5 mb-4">
                                <img class="img-fluid " src="./We-o.jpg" alt="..." height={"70px"}width={"70px"} />
                                <div class="ms-3">
                                    <div class="fw-bold"> Mark </div>
                                    <div class="text-muted">Candidate in Event 1</div>
                                </div>
                            </div>
                            <p>Check my Profile if you want and make </p>
                        </div>
                    </div>
                </div>
            </section>
        </main>
        </>
    )
}