import { Card, CardContent, CardMedia, Grid, TextField, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'
import axios from 'axios'
import axiosInstance from '../axiosInterceptor'

const Blogs = () => {
  const [data,setData] = useState([])
  useEffect(()=>{
          axiosInstance.get('http://localhost:3000/api/blogs').then((res)=>{
            setData(res.data)
          })
  },[])
  return (
    <div style={{margin:'5%'}}>
      <Grid container spacing={2}>
      {data.map((item)=>(
      <Grid item xs={6} md={4} sm={4}>
      <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        sx={{ height: 140 }}
        image={item.image}
        title=''
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {item.title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {item.description}
        </Typography>
      </CardContent>
    </Card>
  </Grid>
))}
  </Grid>
    </div>
  )
}

export default Blogs