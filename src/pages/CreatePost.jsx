import React from 'react'
import "../styles/Createpost.css"
import { FaListUl } from "react-icons/fa";
import { FaListOl } from "react-icons/fa";
import { FaBold } from "react-icons/fa6";
import { FaItalic } from "react-icons/fa6";
import { FaUnderline } from "react-icons/fa6";
import { ImQuotesLeft } from "react-icons/im";
import { SiHtmx } from "react-icons/si";
import { FaImages } from "react-icons/fa";
import { FaLink } from "react-icons/fa";
import { HiLinkSlash } from "react-icons/hi2";

export default function CreatePost() {
  return (
    <>
    <div className="form-cont">
        <h2 className='form-tittle'>Create post</h2> 
          <form className='post-form'>
            <div className="input-cont">
              <label className='form-input' for="Tittle">Tittle</label>
              <input className='form-input' type='text'/>
                    <br/>
              <label className='form-input' for="subtittle">Subtittle</label>
              <input className='form-input' type='text'/>

            <div className="icon-cont">
               <div className="icon-bar">
               <div className="icons"><FaBold /></div>
               <div className="icons"><FaItalic /></div>
               <div className="icons"><FaUnderline /></div>
               <div className="icons"><HiLinkSlash /></div>
               <div className="icons"><FaLink /></div>
               <div className="icons"><h4>Heading</h4></div>
               <div className="icons"><h4>Subheading</h4></div>
               <div className="icons"><ImQuotesLeft /></div>
               <div className="icons"><SiHtmx /></div>
               <div className="icons"> <FaListUl /></div>
               <div className="icons"> <FaListOl /> </div>
               <div className="icons"> <FaImages /></div>
            </div>
              <label className='form-input'for=''>Content</label>
              <textarea className='content-input'/> 
            </div>
            </div>
         </form>
    </div>
    </>
  )
}
