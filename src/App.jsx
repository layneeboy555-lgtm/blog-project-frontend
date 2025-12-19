import { Route,Routes } from 'react-router-dom'
import Category from './pages/Category'
import AdminDashboard from './Admin/AdminDashboard'
import Navbar from './component/Navbar';
import About from "./pages/About";
import Login from './component/Login'
import Foot from './component/Foot'




function App() {

  return (
    <>   
       <Navbar />
   <div className="app">
      <Routes>
        <Route path='/admindashboard/:id' element={<AdminDashboard />} />
        <Route path='/categories' element={<Category />} />
        <Route path='/about' element={ <About /> } />
        <Route path='/login' element={ <Login /> } />
      </Routes>
      <Foot/>
   </div>   
    </> 
  )
}

export default App
