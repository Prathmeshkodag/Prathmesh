import React, { useEffect, useState } from 'react'
import Info from './Info'
import Select from './Select'
import { API, USER } from './Contastan'

import '../Form1/Form.css'

export default function Form() {
   const [page,setpage]=useState(0)
   const [User,setUser]=useState(USER)
   const [update,setupdate]=useState(false)

   const Pagedisplaye=()=>{
    if(page==0){
        return <Info User={User} setUser={setUser}/>
    } else if(page ==1){
        return <Select User={User} setUser={setUser}/>
    }
   }
   
   const getdata=async()=>{
    const resp=await fetch(API)
    const data=await resp.json()
   }
   useEffect(()=>{
    getdata()
   },[update])

 const handelsubmit=async()=>{
     const resp= await fetch(API,{
        method:"POST",
        headers:{
            "content-type": "application/json",
            "Access-Control-Allow-Origin": "*",
        },
        body:JSON.stringify(User)
     })
     if(resp.status===201){
        // alert('data submit')
        setUser(USER)
        setupdate((value)=>!value)
     }
  }


  return (
    <div>
         <div className='flooterform'>
            <div className='header'>
                {/* <h6>{Formtitels[page]}</h6> */}
            </div>
            <div className='body'>
                {Pagedisplaye()}
            </div>
            <div className='footer'>
                {page==0?<button className='flooterbtn1' disabled={page===1} onClick={()=>{
                    setpage((currentpage)=>currentpage+1)
                }}>Procced</button>:
                <button className='flooterbtn2' disabled={page===0} onClick={()=>{
                    setpage((currentpage)=>currentpage-1)
                }}>Back</button>}
                { page==1?<button className='flooterbtn3' disabled={page==0} onClick={handelsubmit}>Submit</button>:
                <button style={{display:'none'}}></button>}
            </div>

         </div>
    </div>
  )
}
