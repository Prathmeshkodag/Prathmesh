import React, { useState } from 'react'
import '../Pages/Pages.css'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faShareNodes} from '@fortawesome/free-solid-svg-icons'


import { Routes,Route,Link, Router } from 'react-router-dom'
import Heltha from './Heltha'
import Car from './Car'
import BIke from './BIke'
import Travel from './Travel'

export default function All() {
  const [dropdown,setdropdown]=useState(false)
  const handeltoggel=()=>{
      setdropdown(!dropdown)
  }
  return (
  <div className='mainpage'>
    <div className='pages' style={{paddingTop:150}} >
             {/* 1 */}
            <div className='card'>
               <div className='header'>
                <img className='cardimg'src='https://www.icicilombard.com/images/default-source/Testimonials/ravindra-choudhary' ></img>
                <div className='info'>
                  <h6>Ravindra Choudhary</h6>
                  <p>Sales Manager American Express - New Delhi</p>
                  <div>
                    {/* <Router> */}
                   <Link to='/helath'><button className='cardbtn'>Health insurance</button></Link>
                     <Routes>
                       <Route path='/helatha'Component={Heltha}></Route>
                     </Routes>
                    {/* </Router> */}
                  </div>
                </div>
                <div class='Dropdown'>
                  <button className='sharebtn dropdownbtn' onClick={handeltoggel}><FontAwesomeIcon icon={faShareNodes}></FontAwesomeIcon></button>
                   {dropdown && (
                    <div class='Dropdown-contant'>
                      <a  href='https://www.facebook.com/'><img src='https://img.freepik.com/premium-photo/facebook-logo-round-button-icon-with-empty-background-3d_272306-348.jpg' 
                      style={{width:40,height:40}}></img></a>
                      <a href='https://in.linkedin.com/'><img src='https://image.shutterstock.com/image-photo/image-260nw-2320610849.jpg' style={{height:40,width:40,}}></img></a>
                       <a href='https://twitter.com/i/flow/login?input_flow_data=%7B%22requested_variant%22%3A%22eyJsYW5nIjoiZW4ifQ%3D%3D%22%7D'><img src='https://www.citypng.com/public/uploads/preview/-51614117232aso9q2exl5.png'style={{height:40,width:40}}></img></a>
                      </div>

                    )}
                    
                 </div>
                         

                </div>
                             
              <div className='body'>
                  <p>
                  Excellent service..strict timelines..flawless..I would never change my policy even if I have to pay a few extra bucks. Already referred to various family members. I had a conservative view towards private insurers which has changed now. Undoubtedly the best.
                   Have seen services of various others Apollo Munich, MaxBupa all useless and pathetic.
                  </p>
              </div>
               
            </div>





             {/* 2 */}
            <div className='card'>
               <div className='header'>
                <img className='cardimg' src='https://www.icicilombard.com/images/default-source/Testimonials/testimonial' alt='car'></img>
                <div className='info'>
                  <h6>Dominic Braganza</h6>
                  <p>Teacher - Pune</p>
                  <div>
                    {/* <Router> */}
                   <Link to='/car'><button className='cardbtn' style={{position:'absolute'}}>Car insurance</button></Link>
                     <Routes>
                       <Route path='/car'Component={Car}></Route>
                     </Routes>
                    {/* </Router> */}
                  </div>
                </div>
                <div class='Dropdown'>
                  <button className='sharebtn dropdownbtn' style={{marginLeft:150}} onClick={handeltoggel}><FontAwesomeIcon icon={faShareNodes}></FontAwesomeIcon></button>
                   {dropdown && (
                    <div class='Dropdown-contant'>
                      <a  href='https://www.facebook.com/'><img src='https://img.freepik.com/premium-photo/facebook-logo-round-button-icon-with-empty-background-3d_272306-348.jpg' 
                      style={{width:40,height:40}}></img></a>
                      <a href='https://in.linkedin.com/'><img src='https://image.shutterstock.com/image-photo/image-260nw-2320610849.jpg' style={{height:40,width:40,}}></img></a>
                       <a href='https://twitter.com/i/flow/login?input_flow_data=%7B%22requested_variant%22%3A%22eyJsYW5nIjoiZW4ifQ%3D%3D%22%7D'><img src='https://www.citypng.com/public/uploads/preview/-51614117232aso9q2exl5.png'style={{height:40,width:40}}></img></a>
                      </div>

                    )}
                    
                 </div>
                </div>
               
                         

                
              <div className='body'>
                  <p>
                  Your sales representative is the best salesman I have ever encountered. My dad was in sales for P&G for 30 years, so I know that Sales is not easy, yet it is the backbone of every organization. I appreciate him for being able to sell me the right policy. I am a third-party insurance customer, and was interestd in the cheapest policy available. He converted me to a comprehensive insurance customer, and got me to spend 3 times more than I had intended. The call lasted 53 minutes and 32 seconds. During the call, I had gone online to check with PolicyBazaar, and saw an offer from HDFC Ergo, which was offering a 30% cheaper policy. However, your representative managed to convince me that ICICI Lombard was still better, by pointing out the 98% settlement rate, versus HDFC's 83%, and that was enough for me. Great guy. If ICICI Lombard is staffed with more such sales people,
                   the company will do very well indeed, and I will definitely invest in its future.
                  </p>
              </div>
              </div>


            {/* 3 */}
            <div className='card'>
               <div className='header'>
                <img className='cardimg' src='https://www.icicilombard.com/images/default-source/Testimonials/vatsal-sharma' alt='bike'></img>
                <div className='info'>
                  <h6>Vatsal Sharma</h6>
                  <p>Sr. Software Engineer TCS - Bengaluru</p>
                  <div>
                   {/* <Router> */}
                   <Link to='/bike'><button className='cardbtn'>Two wheeler Insurance</button></Link>
                     <Routes>
                       <Route path='/bike'Component={BIke}></Route>
                     </Routes>
                     {/* </Router> */}
                    
                  </div>
                </div>
                <div class='Dropdown'>
                  <button className='sharebtn dropdownbtn' onClick={handeltoggel}><FontAwesomeIcon icon={faShareNodes}></FontAwesomeIcon></button>
                   {dropdown && (
                    <div class='Dropdown-contant'>
                      <a  href='https://www.facebook.com/'><img src='https://img.freepik.com/premium-photo/facebook-logo-round-button-icon-with-empty-background-3d_272306-348.jpg' 
                      style={{width:40,height:40}}></img></a>
                      <a href='https://in.linkedin.com/'><img src='https://image.shutterstock.com/image-photo/image-260nw-2320610849.jpg' style={{height:40,width:40,}}></img></a>
                       <a href='https://twitter.com/i/flow/login?input_flow_data=%7B%22requested_variant%22%3A%22eyJsYW5nIjoiZW4ifQ%3D%3D%22%7D'><img src='https://www.citypng.com/public/uploads/preview/-51614117232aso9q2exl5.png'style={{height:40,width:40}}></img></a>
                      </div>

                    )}
                    
                 </div>
               </div>
              <div className='body'>
                  <p>
                  Very good and professional service as always from ICICI Lombard. I am pleased with my two wheeler insurance policy coverage and online buying process. It was quick and self-explanatory and very easy. Always in the future, I will check first for my
                   two wheeler insurance here. Well done for all of you keeping high tandards on your services.
                  </p>
              </div>
               
            </div>
              {/* 4 */}
            
             
             

    </div>
     
    


    <div className='pages' >
             {/* 7*/}
            <div className='card'>
               <div className='header'>
                <img className='cardimg'src='https://www.icicilombard.com/images/default-source/Testimonials/shilpa-dansinghani' ></img>
                <div className='info'>
                  <h6>Shilpa Dansinghani</h6>
                  <p>Reservation and Ticketing Agent All Nippon Airways - Mumbai</p>
                  <div>
                    {/* <Router> */}
                   <Link to='/travel'><button className='cardbtn'>Travel insurance</button></Link>
                     <Routes>
                       <Route path='/travel'Component={Travel}></Route>
                     </Routes>
                    {/* </Router> */}
                  </div>
                </div>
                <div class='Dropdown'>
                  <button className='sharebtn dropdownbtn' onClick={handeltoggel}><FontAwesomeIcon icon={faShareNodes}></FontAwesomeIcon></button>
                   {dropdown && (
                    <div class='Dropdown-contant'>
                      <a  href='https://www.facebook.com/'><img src='https://img.freepik.com/premium-photo/facebook-logo-round-button-icon-with-empty-background-3d_272306-348.jpg' 
                      style={{width:40,height:40}}></img></a>
                      <a href='https://in.linkedin.com/'><img src='https://image.shutterstock.com/image-photo/image-260nw-2320610849.jpg' style={{height:40,width:40,}}></img></a>
                       <a href='https://twitter.com/i/flow/login?input_flow_data=%7B%22requested_variant%22%3A%22eyJsYW5nIjoiZW4ifQ%3D%3D%22%7D'><img src='https://www.citypng.com/public/uploads/preview/-51614117232aso9q2exl5.png'style={{height:40,width:40}}></img></a>
                      </div>

                    )}
                    
                 </div>
                         

                </div>
                             
              <div className='body'>
                  <p>
                  I got to know about ICICI Lombard from my brother. I logged on to the website to buy a travel insurance policy for my trip to Japan. The entire process was easy and the policy was purchased in a few minutes.
                   Got the soft copy in my email well in advance. Had a great worry free trip
                  </p>
              </div>
               
            </div>





             {/* 8 */}
            <div className='card'>
               <div className='header'>
                <img className='cardimg' src='https://www.icicilombard.com/images/default-source/Testimonials/testimonial' alt='car'></img>
                <div className='info'>
                  <h6>Sayak Boral</h6>
                  <p>Asst. Manager - Ahmedabad</p>
                  <div>
                    {/* <Router> */}
                   <Link to='/travel'><button className='cardbtn' style={{position:'absolute'}}>Travel insurance</button></Link>
                     <Routes>
                       <Route path='/travel'Component={Travel}></Route>
                     </Routes>
                    {/* </Router> */}
                  </div>
                </div>
                <div class='Dropdown'>
                  <button className='sharebtn dropdownbtn' style={{marginLeft:100}} onClick={handeltoggel}><FontAwesomeIcon icon={faShareNodes}></FontAwesomeIcon></button>
                   {dropdown && (
                    <div class='Dropdown-contant'>
                      <a  href='https://www.facebook.com/'><img src='https://img.freepik.com/premium-photo/facebook-logo-round-button-icon-with-empty-background-3d_272306-348.jpg' 
                      style={{width:40,height:40}}></img></a>
                      <a href='https://in.linkedin.com/'><img src='https://image.shutterstock.com/image-photo/image-260nw-2320610849.jpg' style={{height:40,width:40,}}></img></a>
                       <a href='https://twitter.com/i/flow/login?input_flow_data=%7B%22requested_variant%22%3A%22eyJsYW5nIjoiZW4ifQ%3D%3D%22%7D'><img src='https://www.citypng.com/public/uploads/preview/-51614117232aso9q2exl5.png'style={{height:40,width:40}}></img></a>
                      </div>

                    )}
                    
                 </div>
                </div>
               
                         

                
              <div className='body'>
                  <p>
                  Thank you for providing fantastic travel insurance
                   coverage for my long trip to Europe last time. Keep up the good work.
                  </p>
              </div>
              </div>


            {/* 9 */}
            <div className='card'>
               <div className='header'>
                <img className='cardimg' src='https://www.icicilombard.com/images/default-source/Testimonials/nandhini-shanmugham' alt='bike'></img>
                <div className='info'>
                  <h6>Nandhini Shanmugham </h6>
                  <p>Project Manager - Mumbai</p>
                  <div>
                    
                   <Link to='/car'><button className='cardbtn'>Car Insurance</button></Link>
                     <Routes>
                       <Route path='/car'Component={Car}></Route>
                     </Routes>
                    
                  </div>
                </div>
                <div class='Dropdown'>
                  <button className='sharebtn dropdownbtn'style={{marginLeft:90}} onClick={handeltoggel}><FontAwesomeIcon icon={faShareNodes}></FontAwesomeIcon></button>
                   {dropdown && (
                    <div class='Dropdown-contant'>
                      <a  href='https://www.facebook.com/'><img src='https://img.freepik.com/premium-photo/facebook-logo-round-button-icon-with-empty-background-3d_272306-348.jpg' 
                      style={{width:40,height:40}}></img></a>
                      <a href='https://in.linkedin.com/'><img src='https://image.shutterstock.com/image-photo/image-260nw-2320610849.jpg' style={{height:40,width:40,}}></img></a>
                       <a href='https://twitter.com/i/flow/login?input_flow_data=%7B%22requested_variant%22%3A%22eyJsYW5nIjoiZW4ifQ%3D%3D%22%7D'><img src='https://www.citypng.com/public/uploads/preview/-51614117232aso9q2exl5.png'style={{height:40,width:40}}></img></a>
                      </div>

                    )}
                    
                 </div>
               </div>
              <div className='body'>
                  <p>
                  Very good and professional service as always from ICICI Lombard. I am pleased with my two wheeler insurance policy coverage and online buying process. It was quick and self-explanatory and very easy. Always in the future, I will check first for my
                   two wheeler insurance here. Well done for all of you keeping high tandards on your services.
                  </p>
              </div>
               
            </div>
            
             
             

    </div>
   

  </div>
  )
}
