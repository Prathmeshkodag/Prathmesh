import React, { useState } from 'react'
import '../Pages/Pages.css'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faShareNodes} from '@fortawesome/free-solid-svg-icons'

export default function Car() {
  const [dropdown,setdropdown]=useState(false)
  const handeltoggel=()=>{
      setdropdown(!dropdown)
  }
  return (
    <div className='pages' style={{paddingTop:150}}>
           <div className='card'>
               <div className='header'>
                <img className='cardimg' src='https://www.icicilombard.com/images/default-source/Testimonials/testimonial' alt='car'></img>
                <div className='info'>
                  <h6>Dominic Braganza</h6>
                  <p>Teacher - Pune</p>
                  
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

              <div className='card'>
               <div className='header'>
                <img className='cardimg' src='https://www.icicilombard.com/images/default-source/Testimonials/nandhini-shanmugham' alt='bike'></img>
                <div className='info'>
                  <h6>Nandhini Shanmugham </h6>
                  <p>Project Manager - Mumbai</p>
                  
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
  )
}
