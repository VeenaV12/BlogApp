
import { Route, Routes } from 'react-router-dom'
import './App.css'
import Login from './components/Login'
import Signup from './components/Signup'
import AddBlog from './components/AddBlog'
import Blogs from './components/Blogs'
import Main from './components/Main'
import PrivateRoutes from './components/PrivateRoutes'


function App() {

  return (
    <>
    <Routes>
      <Route path='/' element={<Login/>}></Route>
      <Route path='/signup' element={<Signup/>}></Route>
      <Route element={<PrivateRoutes/>}>
      <Route path='/addblog' element={<Main child={<AddBlog/>}/>}></Route>
      <Route path='/blogs' element={<Main child={<Blogs/>}/>}></Route>
      </Route>
    </Routes>
    </>
  )
}

export default App
