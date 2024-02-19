import React from "react";
import { Link } from "react-router-dom";
import Card from './Card_c';
import Header from './head_';

export default ()=>{

    // const [nav,setNav] = React.useState('')
    // setNav('navbar navbar-expand-lg navbar-dark  fixed-top')
    // window.addEventListener('scroll', function(){
    //     const dark = 'navbar navbar-expand-lg navbar-dark bg-dark  fixed-top'
    //     setNav(dark)
    // })
    window.addEventListener('scroll', function(){
        const header = document.querySelector('.welcome');
        header.classList.toggle("bg-dark", window.scrollY > 0 );
    });

    return (
        <>
         <main class="flex-shrink-0 ">
          
           <Header/>
           
            <section class="py-4 bg-light" id="scroll-target">
                <div class=" px-5 my-2">
                <div class="py-5 text-center">
                        <h2 class="fw-bolder fs-1">WE OFFER YOU</h2>
                        <p class="lead fw-normal text-muted mb-5">Dedicated to quality and your success</p>
                    </div>
                
                    <div class="row gx-5 jus-c ">
                        <div class="w-auto col-lg-6 " >
                           <Card data='12 Feb' img ='https://wp.xpeedstudio.com/electionify/wp-content/uploads/2019/12/blog_image4-730x465.jpg ' title='Secure, Powerful, Inclusive' text='We offer a range of features and tools to help candidates and voters get the most out of our platform. For candidates, we provide advanced analytics and reporting to help you understand your audience and make data-driven decisions. For voters, we offer a simple and intuitive interface that makes it easy to browse and participate in polls. And for everyone, we provide a safe and secure platform that ensures the integrity of the voting process'/>
                           </div>
                        
                        <div class="w-auto col-lg-6">
                           <Card data='12 Feb' img =' ./We-o.jpg'title='Secure, Powerful, Inclusive' text='We offer a range of features and tools to help candidates and voters get the most out of our platform. For candidates, we provide advanced analytics and reporting to help you understand your audience and make data-driven decisions. For voters, we offer a simple and intuitive interface that makes it easy to browse and participate in polls. And for everyone, we provide a sa'/>
                        </div>
                        <div class="w-auto col-lg-6">
                           <Card data='12 Feb' img =' ./We-o.jpg'title='Secure, Powerful, Inclusive' text='We offer a range of features and tools to help candidates and voters get the most out of our platform. For candidates, we provide advanced analytics and reporting to help you understand your audience and make data-driven decisions. For voters, we offer a simple and intuitive interface that makes it easy to browse and participate in polls. And for everyone, we provide a sa'/>
                        </div>
                        
                    </div>
                </div>
            </section>
           
            <section class="py-5">
                <div class="container px-5 my-5">
                    <div class="row gx-5 align-items-center">
                        <div class="col-lg-6 order-first order-lg-last"><img class="img-fluid rounded mb-5 mb-lg-0" src="https://dummyimage.com/600x400/343a40/6c757d" alt="..." /></div>
                        <div class="col-lg-6">
                            <h2 class="fw-bolder">Join Democracy Now</h2>
                            <p class="lead fw-normal text-muted mb-0">Whether you're a candidate running for office or a voter looking to make a difference, our platform has everything you need to participate in the democratic process. So why wait? Sign up today and join the thousands of others who are already making a difference on our platform!</p>
                        </div>
                    </div>
                </div>
            </section>
            
            <section class="py-5 bg-light" id="about">
                <div class="container px-5 my-5">
                    <div class="text-center">
                        <h2 class="fw-bolder">Our team</h2>
                        <p class="lead fw-normal text-muted mb-5">Dedicated to quality and your success</p>
                    </div>
                    <div class="row gx-5 row-cols-1 row-cols-sm-2 row-cols-xl-4 justify-content-center">
                        <div class="col mb-5 mb-5 mb-xl-0">
                            <div class="text-center">
                                <img class="img-fluid rounded-circle mb-4 px-4" src="https://dummyimage.com/150x150/ced4da/6c757d" alt="..." />
                                <h5 class="fw-bolder">Ibbie Eckart</h5>
                                <div class="fst-italic text-muted">Founder &amp; CEO</div>
                            </div>
                        </div>
                        <div class="col mb-5 mb-5 mb-xl-0">
                            <div class="text-center">
                                <img class="img-fluid rounded-circle mb-4 px-4" src="https://dummyimage.com/150x150/ced4da/6c757d" alt="..." />
                                <h5 class="fw-bolder">Arden Vasek</h5>
                                <div class="fst-italic text-muted">CFO</div>
                            </div>
                        </div>
                        <div class="col mb-5 mb-5 mb-sm-0">
                            <div class="text-center">
                                <img class="img-fluid rounded-circle mb-4 px-4" src="https://dummyimage.com/150x150/ced4da/6c757d" alt="..." />
                                <h5 class="fw-bolder">Toribio Nerthus</h5>
                                <div class="fst-italic text-muted">Operations Manager</div>
                            </div>
                        </div>
                        <div class="col mb-5">
                            <div class="text-center">
                                <img class="img-fluid rounded-circle mb-4 px-4" src="https://dummyimage.com/150x150/ced4da/6c757d" alt="..." />
                                <h5 class="fw-bolder">Malvina Cilla</h5>
                                <div class="fst-italic text-muted">CTO</div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </main>
        <footer class="bg-dark py-4 mt-auto">
            <div class="container px-5">
                <div class="row align-items-center justify-content-between flex-column flex-sm-row">
                    <div class="col-auto"><div class="small m-0 text-white">Copyright &copy; Your Website 2023</div></div>
                    <div class="col-auto">
                        <Link to={'#'}><a class="link-light small">Privacy</a></Link>
                        <span class="text-white mx-1">&middot;</span>
                        <Link to='#'><a class="link-light small" >Terms</a></Link>
                        <span class="text-white mx-1">&middot;</span>
                        <Link to='#'><a class="link-light small" >Contact</a></Link>
                    </div>
                </div>
            </div>
        </footer>
        </>
    )
}