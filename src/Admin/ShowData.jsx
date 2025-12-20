import React from 'react'

export default function ShowData() {
  return (
    <>
     <div className="displayitem">
        {catInformations.map((e)=>(
                    
       <div className="blogs-cont">
            <img className='image' src={e.image} />
            <h4 className='Display-tittle'>{e.tittle}</h4>
           <h4 className='Display-subtittle'>{e.subtittle}</h4>
           <h4 className='Display-category'>{e.category}</h4>
           <h4 className='Display-time'>{e.time}</h4>
     </div>
                
    ))} 
</div>
    </>
  )
}
