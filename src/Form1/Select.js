import React from 'react'
import '../Form1/Form.css'

export default function Select({User,setUser}) {
  return (
    <div>
        <form className='flooterselecr'>
            <label className='flooterlabel'>Car <br/> <select className='flootercb' value={User.Car} onChange={(e)=>setUser({...User,Car:e.target.value})}>
                <option style={{color:'black'}}>Select</option>
                <option style={{color:'black'}}>0</option>
                <option style={{color:'black'}}>1</option>
                <option style={{color:'black'}}>2</option>
                <option style={{color:'black'}}>3</option>
                    </select>
                  </label><br/>
            
                <label className='flooterlabel'>Bike<br/> <select className='flootercb'  value={User.Bike} onChange={(e)=>setUser({...User,Bike:e.target.value})}>
                <option>Select</option>
               
                <option style={{color:'black'}}>0</option>
                <option style={{color:'black'}}>1</option>
                <option style={{color:'black'}}>2</option>
                <option style={{color:'black'}}>3</option>

            </select></label>

        </form>
    </div>
  )
}
