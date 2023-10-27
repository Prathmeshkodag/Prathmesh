import React from 'react'
import '../Form1/Form.css'

export default function Info({User,setUser}) {
  return (
    <div>
        <form className='flooterinfo'>
            <label className='flooterlabel'>Full Name</label>
            <br/>
            <input className='flooterinput' type='text' value={User.Fullname} onChange={(e)=>setUser({...User,Fullname:e.target.value})}></input>
            <br/>
            <label className='flooterlabel'>Mobile No</label>
            <br/>
            <input className='flooterinput' type='text' value={User.Mobileno} onChange={(e)=>setUser({...User,Mobileno:e.target.value})}></input>
            <br/>            
            <label className='flooterlabel'>Email</label>
            <br/>
            <input className='flooterinput' type='text'value={User.Email} onChange={(e)=>setUser({...User,Email:e.target.value})}></input>
            <br/>
        </form>
    </div>
  )
}
