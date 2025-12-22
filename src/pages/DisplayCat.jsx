import React from 'react'
import { useParams } from 'react-router-dom'
import { Categories } from '../data/Categories'


export default function DisplayCat() {
      const { id } =  useParams()
    const items = Categories.find((e)=> e.id == id)
    console.log(items)
  return (
    <>
     <div className='displaycards'>
        <div className='catdisplay'>
          <p className='figure1' src={items.name}/>
        </div>
     </div>
    </>
  )
}
