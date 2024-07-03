import { Button, Grid, TextField, Typography } from '@mui/material'
import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'

const Signup = () => {

    const [form,setForm] = useState({
        name:'',
        email:'',
        phone:'',
        password:''
      })

      const inputHandler = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
      };

      function capValue(){
        axios.post('https://blog-app-eta-one.vercel.app//user/signup', form).then((res)=>{
          alert('Blog Added!')
        })}

  return (
    <div style={{margin:'12%'}}> 
    <h3>SignUp here!</h3><hr />
      <Grid container spacing={1}>
  <Grid item xs={6} md={6} sm={6}>
  <TextField fullWidth id="outlined-basic" label="Name" variant="outlined" name="name" value={form.name}onChange={inputHandler} />
  </Grid>
  <Grid item xs={6} md={6} sm={6}>
  <TextField fullWidth id="outlined-basic" label="Email" variant="outlined" name="email" onChange={inputHandler} />
  </Grid>
  <Grid item xs={6} md={6} sm={6}>
  <TextField fullWidth id="outlined-basic" label="Phone" variant="outlined" name="phone" onChange={inputHandler} />
  </Grid>
  <Grid item xs={6} md={6} sm={6}>
  <TextField fullWidth id="outlined-basic" label="Password" variant="outlined" name="password" onChange={inputHandler} />
  </Grid>
  <Grid item xs={6} md={12} sm={12}>
  <Button variant="contained" onClick={capValue}>Submit</Button>
  </Grid>
  <Grid item xs={12}>
  <Typography>
    <Link to={'/'}>Back to Login!</Link>
  </Typography>
  </Grid>
</Grid></div>
  )
}

export default Signup