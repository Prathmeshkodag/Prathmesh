import React from 'react'
import '../Component/testimonials.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faFacebookF} from  '@fortawesome/free-brands-svg-icons'
import {faLinkedinIn} from '@fortawesome/free-brands-svg-icons'
import {faTwitter} from '@fortawesome/free-brands-svg-icons'
import {faYoutube} from '@fortawesome/free-brands-svg-icons'
import {faInstagram} from '@fortawesome/free-brands-svg-icons'

export default function Footer() {
  return (
    <div>
      <div className='footer'>
        <div className='footerdiv1'>
          <img src='https://www.icicilombard.com/docs/default-source/assets/home-revamp/images/icicilombard-footer-logo.png'
            alt='logo' style={{ height: 50, width: 180 }}></img>
          <p>ICICI Lombard General Insurance Company Limited,</p>
          <p style={{ fontSize: 12 }}> ICICI Lombard House, 414, Veer Savarkar Marg, Near Siddhi Vinayak Temple,<br></br> Prabhadevi, Mumbai - 400025.</p>
          <p style={{ fontSize: 12 }}>Reg. No.115</p>
          <p style={{ fontSize: 12 }}>Email:<span> customersupport@icicilombard.com</span></p>
          <p style={{ fontSize: 12 }}>Fax no - 022 61961323</p>
          <p style={{ fontSize: 12 }}>Contact - 1800 2666</p>

          <ul className='sociallink'>
            <li className='footerli'>  <a className='footerli' href='https://www.facebook.com/ICICILombard' target='_blank'><FontAwesomeIcon icon={faFacebookF}></FontAwesomeIcon></a></li>
            <li className='footerli'> <a className='footerli' href='https://www.linkedin.com/company/icici-lombard?trk=tyah' target='_blank'><FontAwesomeIcon icon={faLinkedinIn}></FontAwesomeIcon></a></li>
            <li className='footerli'> <a className='footerli' href='https://twitter.com/ICICILombard' target='_blank'><FontAwesomeIcon icon={faTwitter}></FontAwesomeIcon></a></li>
            <li className='footerli'> <a className='footerli' href='https://www.youtube.com/user/ICICILombardLtd' target='_blank'><FontAwesomeIcon icon={faYoutube}></FontAwesomeIcon></a></li>
            <li className='footerli'> <a className='footerli' href='https://www.instagram.com/icicilombardofficial/' target='_blank'><FontAwesomeIcon icon={faInstagram}></FontAwesomeIcon></a></li>




          </ul>

        </div>
        <div className='footerdiv2'>
          <p style={{ fontSize: 12 }}>
            ICICI Lombard General Insurance Company Ltd. is one of the leading private sector general insurance company in India offering insurance coverage for motor,</p>
          <p style={{ fontSize: 12 }}> health, travel, home, student travel and more. Policies can be purchased and renewed online as well. Immediate issuance of policy copy online.
          </p>
          <br></br>
          <p style={{ fontSize: 12 }}>ICICI trade logo displayed above belongs to ICICI Bank and is used by ICICI Lombard GIC Ltd. under license and Lombard logo belongs to ICICI Lombard GIC Ltd</p>
          <p style={{ fontSize: 12 }}>Insurance is the subject matter of the solicitation. The advertisement contains only an indication of cover offered. For more details on risk factors, terms</p>
          <p style={{ fontSize: 12 }}>conditions and exclusions, please read the sales brochure carefully before concluding a sale. CIN: L67200MH2000PLC129408</p>
          <br></br>
          
          <div style={{display:'flex'}}>
          <div className='footerimg'>
            <img src='https://www.icicilombard.com/docs/default-source/assets/images/entrust.png'
              alt='logo' style={{ height: 60, width: 60 }}></img>
            <img src='https://www.icicilombard.com/docs/default-source/assets/images/digicert.png'
              alt='logo' style={{ height: 60, width: 100 }}></img>
            
          </div>
          <div>
              <div class="dropdown  footerbtn ">
                <button class="btn  dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                Group Companies
                </button>
                <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                  <li><a class="dropdown-item" href="https://www.icicigroupcompanies.com/">ICIC Group</a></li>
                  <li><a class="dropdown-item" href="https://www.icicibank.com/">ICIC Bank</a></li>
                  <li><a class="dropdown-item" href="https://www.iciciprulife.com/">ICIC prudential life insurance</a></li>
                  <li><a class="dropdown-item" href="https://www.icicipruamc.com/">ICIC prudential life Mutul fund</a></li>
                  <li><a class="dropdown-item" href="http://www.icicidirect.com/">ICIC Direct</a></li>
                  <li><a class="dropdown-item" href="https://www.icicihfc.com/">ICIC Home finanace</a></li>
                  <li><a class="dropdown-item" href="https://www.icicihfc.com/">ICIC Home search</a></li>
                   
                  </ul>
              </div>
            </div>
           </div>


        </div>
      </div>
    </div>
  )
}
