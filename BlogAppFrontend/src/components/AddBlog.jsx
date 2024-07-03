import { Button, Grid, TextField } from '@mui/material'
import React, { useState } from 'react'
import axios from 'axios'
import axiosInstance from '../axiosInterceptor'

const AddBlog = () => {
  const [form,setForm] = useState({
    image:'',
    title:'',
    description:''
  })

  function capValue(){
        axiosInstance.post('https://blog-app-eta-one.vercel.app/api/add', form).then((res)=>{
          alert('Blog Added!')
        })
  }
  return (
    <div style={{margin:'5%'}}>
    
    <Grid container spacing={1}>
    <Grid item xs={6} md={12} sm={12}>
    <TextField fullWidth id="outlined-basic" label="BlogName" value={form.title}
    onChange={(e)=>{setForm({...form,title:e.target.value})}} variant="outlined" />
    </Grid>
    <Grid item xs={6} md={12} sm={12}>
    <TextField fullWidth multiline rows={12} id="outlined-basic" label="Blog Description" value={form.description}
    onChange={(e)=>{setForm({...form,description:e.target.value})}} variant="outlined" />
    </Grid>
    <Grid item xs={6} md={12} sm={12}>
    <TextField fullWidth id="outlined-basic" label="Image URL" value={form.image}
    onChange={(e)=>{setForm({...form,image:e.target.value})}} variant="outlined" />
    </Grid>
    <Grid item xs={6} md={12} sm={12}>
    <Button variant="contained" onClick={capValue}>Add Blog</Button>
    </Grid>
    </Grid>
    </div>
  )
}

export default AddBlog