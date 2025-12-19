import React from "react";
import'../styles/Home.css'
import { home } from '../data/home'
import { useNavigate } from "react-router-dom";
import { useState } from "react";


export default function Home(){
    const navigate = useNavigate()
      const[Home, sethome] = useState("")
     
    const handleclick = (data)=>{
        navigate(`/blog/${data.id}`)
    }
    return(
       
        <>
        <div className="home-container">
            {home.map((e)=>(
               <div key={e.image} onClick={()=> handleclick(e)} className="home">
                    <div className="home-container2">
                       <img className="home" src={e.image}></img>
                       <h1 className="title">{e.name}</h1>
                       <p className="subtitle">{e.subtitle}</p>
                       <p className="date">{e.date}</p>
                       <p className="time">{e.time}</p>
                   </div>
                </div>
               
            ))}
        </div>
        </>
    )
}