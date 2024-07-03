import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios'

const Login = () => {

  const navigate = useNavigate()

  const [form,setForm] = useState({
    email:'',
    password:''
  })

  function capValue(){
    axios.post('http://localhost:3000/user/login', form).then((res)=>{
      alert(res.data.message)
      if(res.data.token){
      localStorage.setItem('token',res.data.token)
      navigate('/blogs')
    }
    })
}
  
return (
    <div>
      <h2>App Login</h2>
    <div className="mb-3">
      
      <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" 
      name="email" value={form.email} onChange={(e)=>{setForm({...form,email:e.target.value})}}/>
    </div>
    <div className="mb-3">
      <input type="password" className="form-control" id="exampleInputPassword1" 
      name="password" value={form.password}
      onChange={(e)=>{setForm({...form,password:e.target.value})}}/>
    </div>
   
    <button  className="btn btn-primary" onClick={capValue}>Login</button>
    <hr></hr>
    <Link to={'/signup'}><h6>New user signup here!</h6></Link>
  </div>
  )
}

export default Login