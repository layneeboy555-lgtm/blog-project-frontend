import { Route,Routes } from 'react-router-dom'
import Category from './pages/Category'
import AdminDashboard from './Admin/AdminDashboard'
import Navbar from './component/Navbar';
import Home from "./pages/Home";
import  Displaydetails  from './component/DisplayDetails'
import { useState } from 'react';




function App() {
  const [count, setCount] = useState(0)

  return (
    <>   
       <Navbar />
   <div className="app">
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/blog/:id' element={< Displaydetails/>}/>
        <Route path='/admindashboard' element={<AdminDashboard />} />
        <Route path='/categories' element={<Category />} />
      </Routes>
   </div>   
    </> 
  )
}

export default App
