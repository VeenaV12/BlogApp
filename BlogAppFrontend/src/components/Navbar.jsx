import { AppBar, Box, Button, Toolbar, Typography, } from '@mui/material'
import React from 'react'
import { Link, useNavigate} from 'react-router-dom'

const Navbar = () => {

  const navigate = useNavigate()

  return (
    <>
    <Box sx={{ flexGrow: 1 }}>
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6" component="div"align="left" sx={{ flexGrow: 1 }}>
          BlogApp
        </Typography>
       <Link to={'/blogs'}><Button style={{color:'white'}}>Blogs</Button></Link>
        <Link to={'/addblog'}><Button style={{color:'white'}}>AddBlog</Button></Link>
        <Button style={{color:'white'}} onClick={()=>{
          localStorage.removeItem('token')
          navigate('/')
        }}>Logout</Button>
      </Toolbar>
    </AppBar>
  </Box>
    </>
  )
}

export default Navbar