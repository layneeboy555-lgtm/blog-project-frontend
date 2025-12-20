import { Route,Routes } from 'react-router-dom'
import Category from './pages/Category'
import AdminDashboard from './Admin/AdminDashboard'
import Navbar from './component/Navbar';
import Home from "./pages/Home";
import  Displaydetails  from './component/DisplayDetails'
import { useState } from 'react';
import About from "./pages/About";
import Login from './component/Login'
import Foot from './component/Foot'
import DisplayCat from './pages/DisplayCat';




function App() {
  const [count, setCount] = useState(0)

  return (
    <>   
       <Navbar />
   <div className="app">
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/blog/:id' element={< Displaydetails/>}/>
        {/* <Route path='/admindashboard' element={<AdminDashboard />} /> */}
        <Route path='/admindashboard/:id' element={<AdminDashboard />} />
        <Route path='/categories' element={<Category />} />
        <Route path='/categories/id' element={<DisplayCat/>} />
        <Route path='/about' element={ <About /> } />
        <Route path='/login' element={ <Login /> } />
      </Routes>
      <Foot/>
   </div>   
    </> 
  )
}

export default App
