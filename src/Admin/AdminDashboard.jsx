import React from 'react'
import { RiDeleteBin5Line } from "react-icons/ri";
import { FaRegEdit } from "react-icons/fa";
import { catInformations } from "../Admin/CatinfoDisplay"

import '../styles/Admin.css'
export default function AdminDashboard() {
  return (
    <>   
      <div className="Dash-board-cont">
            
        <h1 className='admin-logo'>Admin Dashboard</h1>
        <div className="child-1">

              <div className="child-2">
                <div className="Blog-Management">
                  <h2>Blog Management</h2>
                </div>

                <div className="search-bar">
                  <input type='text' placeholder=' 🔍︎ Search blog by name....'/>
                </div>

                <div className="add-blog">
                  <button className='add'>+ Add New Blog</button>
              </div>
              
          </div>
            <div className="child-3">
              
         

              

            
                    
      

          
              
             </div>

 
            
                
        </div>
      </div>
    </>
  )
}
