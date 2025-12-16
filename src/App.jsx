import { Route,Routes } from 'react-router-dom'
import Category from './pages/Category'
import AdminDashboard from './Admin/AdminDashboard'

function App() {

  return (
    <>

      <Routes>
        <Route path='/admindashboard' element={<AdminDashboard />} />
        <Route path='/category/:id' element={<Category />} />
      </Routes>
      
    </> 
  )
}

export default App
