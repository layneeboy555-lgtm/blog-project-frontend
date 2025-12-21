import React from 'react'
import '../styles/category.css'
import { home } from '../data/home'
import { useNavigate } from 'react-router-dom'
import BlogCard from '../component/BlogCard'

export default function Category() {
   const navigate = useNavigate()
       const handleClick = (e) =>{
       navigate(`/blog/${ e.id}`)
    }
  return (
    <>
      <div  className='Category-cont'>
                <h1 className='top-guy'>Categories</h1>
                
              
                  <BlogCard data={home} handleclick={handleClick} />
              
      </div>
    </>
  )
}
