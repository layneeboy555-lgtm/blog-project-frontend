import { Route,Routes } from 'react-router-dom'
import Category from './pages/Category'
import AdminDashboard from './Admin/AdminDashboard'
import Navbar from './component/Navbar';
import About from "./pages/About";




function App() {

  return (
    <>   
       <Navbar />
   <div className="app">
      <Routes>
        <Route path='/admindashboard' element={<AdminDashboard />} />
        <Route path='/categories' element={<Category />} />
        <Route path='/about' element={ <About /> } />
      </Routes>
   </div>   
    </> 
  )
}

export default App
