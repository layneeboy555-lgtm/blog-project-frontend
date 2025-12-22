import React from 'react'
import { RiDeleteBin5Line } from "react-icons/ri";
import { FaRegEdit } from "react-icons/fa";
import { catInformations } from "../Admin/CatinfoDisplay"
import { NavLink } from 'react-router-dom';
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
                       <input className='search-input' type='text' placeholder=' 🔍︎ Search blog by name....'/>
                   </div>

                    <div className="add-blog">
                        <NavLink className='add-btn' to='/createpost'>+ Add New Blog</NavLink>
                    </div>
              </div>

              
              <div className="child-3">
              
                     <table className='table-list' border='1px'>
                     <thead>    
                           <tr>
                              <th>Blog</th>
                              <th>Tittle</th>
                              <th>Subtittle</th>
                              <th>Category</th>
                              <th>Time</th>
                              <th>Actions</th>
                           </tr>
                    </thead>
                    <tbody> 
                            {catInformations.map((e)=>(
                           <tr key={e.id}>
                              <td className='id'> {e.id}</td>
                              <td className='display-tittle'>{e.tittle} </td>
                              <td className='display-sub'>{e.subtittle}</td>
                              <td className='display-cat'>{e.category}</td>
                              <td className='display-time'>{e.time}</td>
                              <td className='actions'> <div className="edit"><FaRegEdit /></div>    <div className="delect"><RiDeleteBin5Line /></div>  </td> 
                           </tr>
                           ))}
                    </tbody>
                    </table>
              </div>
  
        </div>

      </div>
    </>
  )
}
