import '../Pages/Pages.css'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faShareNodes} from '@fortawesome/free-solid-svg-icons'
import { useState } from 'react'

export default function Travel() {
  const [dropdown,setdropdown] = useState(false)
  const handeltoggel=()=>{
      setdropdown(!dropdown)
  }
  return (
    <div className='pages' style={{paddingTop:150}}>
      <div className='card'>
               <div className='header'>
                <img className='cardimg'src='https://www.icicilombard.com/images/default-source/Testimonials/shilpa-dansinghani' ></img>
                <div className='info'>
                  <h6>Shilpa Dansinghani</h6>
                  <p>Reservation and Ticketing Agent All Nippon Airways - Mumbai</p>
                  
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

            <div className='card'>
               <div className='header'>
                <img className='cardimg' src='https://www.icicilombard.com/images/default-source/Testimonials/testimonial' alt='car'></img>
                <div className='info'>
                  <h6>Sayak Boral</h6>
                  <p>Asst. Manager - Ahmedabad</p>
                  
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
         
    </div>
  )
}
