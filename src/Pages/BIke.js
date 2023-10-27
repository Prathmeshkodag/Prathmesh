import React, { useState } from 'react'
import '../Pages/Pages.css'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faShareNodes} from '@fortawesome/free-solid-svg-icons'

export default function BIke() {
  const [dropdown,setdropdown] = useState(false)
  const handeltoggel=()=>{
      setdropdown(!dropdown)
  }
  return (
    <div className='mainpage'>
    <div className='pages' style={{paddingTop:150}}>
            <div className='card'>
               <div className='header'>
                <img className='cardimg' src='https://www.icicilombard.com/images/default-source/Testimonials/vatsal-sharma' alt='bike'></img>
                <div className='info'>
                  <h6>Vatsal Sharma</h6>
                  <p>Sr. Software Engineer TCS - Bengaluru</p>
                  
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
            <div className='card'>
               <div className='header'>
                <img className='cardimg'src='https://www.icicilombard.com/images/default-source/Testimonials/varun-mahajan' ></img>
                <div className='info'>
                  <h6>Varun Mahajan</h6>
                  <p>Student - New Delhi</p>
                  
                </div>
                <div class='Dropdown'>
                  <button className='sharebtn dropdownbtn'style={{marginLeft:120}} onClick={handeltoggel}><FontAwesomeIcon icon={faShareNodes}></FontAwesomeIcon></button>
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
                  I Varun Mahajan, renewed my two wheeler insurance policy from ICICI Lombard. The most excellent thing is that you people remind me just in time which avoids expiring of policy. Your team explained everything about the policy and
                   went through each and every points individually. The most important thing there is no...
                  </p>
              </div>
               
            </div>  
            <div className='card'>
               <div className='header'>
                <img className='cardimg' src='https://www.icicilombard.com/images/default-source/Testimonials/saurabh-maheshwari' alt='car'></img>
                <div className='info'>
                  <h6>Saurabh Maheshwari</h6>
                  <p>Manager Private Insurance Firm - Jaipur</p>
                  
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
                  I wish to convey my sincere thanks and appreciation to the entire ICICI Lombard. I just bought an insurance policy for my motorcycle. I had a lot of queries on policy, so I contacted your advisor through chat window available on your website.
                   Your advisor was excellent! Explained all the aspects of motorcycle ins...
                  </p>
              </div>
              </div>
  
    </div>
    </div>
  )
}
