import React from 'react'
import '../styles/category.css'
import { Categories } from '../data/Categories'
import { useNavigate } from 'react-router-dom'

export default function Category() {
   const navigate = useNavigate()
       const handleClick = (e) =>{
       navigate(`/Categories/${ e.id}`)
    }
  return (
    <>
      <div  className='Category-cont'>
                <h1 className='top-guy'>Categories</h1>
                
                {Categories.map((e)=>(
                <div key={e.image} onClick={()=>handleClick(e)} className="show-categories">
                    <h1 className='name-font'>{e.name}</h1>
                </div>
                ))}
      </div>
    </>
  )
}
