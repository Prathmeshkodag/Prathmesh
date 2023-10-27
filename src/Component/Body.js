import React from 'react'
import {BrowserRouter as Router,Route, Routes ,Link} from 'react-router-dom'
import "../Component/testimonials.css"
import All from '../Pages/All'
import Car from '../Pages/Car'
import BIke from '../Pages/BIke'
import Heltha from '../Pages/Heltha'
import Travel from '../Pages/Travel'

export default function Body() {
  return (
      <div>
        
       
    <Router>
      <div>
        <nav className='prth4'>
          <ul className='prthul'>
         <li className='prthli'><Link className='lilink' to="/all"><img src='https://www.icicilombard.com/docs/default-source/assets/customer-testimonials/images/all_tab.svg' alt='all' ></img>All</Link></li>
         <li className='prthli'><Link className='lilink' to="/car"><img src='https://www.icicilombard.com/docs/default-source/assets/customer-testimonials/images/car_tab.svg' alt='car' ></img>Car</Link></li>
         <li className='prthli'><Link className='lilink' to='/bike'><img src='https://www.icicilombard.com/docs/default-source/assets/customer-testimonials/images/bike_tab.svg' alt='bike'></img>Bike</Link></li>
        <li className='prthli'> <Link className='lilink' to='/helath'><img src='https://www.icicilombard.com/docs/default-source/assets/customer-testimonials/images/health_tab.svg' alt='helath'></img>Helath</Link></li>
         <li className='prthli'><Link className='lilink' to='/travel'><img src='https://www.icicilombard.com/docs/default-source/assets/customer-testimonials/images/travel_tab.svg' alt='travel' ></img>Travel</Link></li>
          </ul>
        </nav>
           <Routes>
          <Route path="/" Component={All}></Route>
          <Route path="/all" Component={All}></Route>
           <Route path="/car" Component={Car}></Route>
          <Route path="/bike" Component={BIke}></Route>
          <Route path="/helath" Component={Heltha}></Route>
          <Route path='/travel' Component={Travel}></Route>

          </Routes>
        

      </div>
      
    </Router>
      </div>
    
  )
}
