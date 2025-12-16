import React from 'react'

import { Categories } from './Categories'
export default function Category() {
  return (
    <>
      <div className='container'>
        <h1 className='top-guy'>Categories</h1>
        {Categories.map((e)=>(
        <div className="show-categories">
            <h1 className='name-font'>{e.name}</h1>
        </div>

        ))}

      </div>
    </>
  )
}
