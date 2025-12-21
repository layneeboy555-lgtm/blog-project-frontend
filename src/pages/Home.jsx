import React from "react";
import'../styles/Home.css'
import { home } from '../data/home'
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import BlogCard from "../component/BlogCard";


export default function Home(){
    const navigate = useNavigate()
      const[Home, sethome] = useState("")
     
    const handleclick = (data)=>{
        navigate(`/blog/${data.id}`)
    }
    return(
        <>
        <div className="home-container">

              <BlogCard data={home} handleclick={handleclick}  />
          
        </div>
        </>
    )
}