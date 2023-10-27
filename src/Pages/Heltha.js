import React, { useState }  from 'react'
import '../Pages/Pages.css'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faShareNodes} from '@fortawesome/free-solid-svg-icons'
export default function Heltha() {

  const [dropdown,setdropdown]=useState(false)
  const handeltoggel=()=>{
      setdropdown(!dropdown)
  }
  return (
    
    <div className='pages' style={{paddingTop:150}}>
       
       <div className='card'>
               <div className='header'>
                <img className='cardimg'src='https://www.icicilombard.com/images/default-source/Testimonials/ravindra-choudhary' ></img>
                <div className='info'>
                  <h6>Ravindra Choudhary</h6>
                  <p>Sales Manager American Express - New Delhi</p>
                  
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

    </div>
  )
}
