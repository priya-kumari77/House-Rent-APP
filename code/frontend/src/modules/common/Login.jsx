// import React, { useState } from 'react'
// import { Link, useNavigate } from 'react-router-dom';
// import Navbar from 'react-bootstrap/Navbar';
// import { Container, Nav } from 'react-bootstrap';
// import Avatar from '@mui/material/Avatar';
// import Button from '@mui/material/Button';
// import TextField from '@mui/material/TextField';
// import Grid from '@mui/material/Grid';
// import Box from '@mui/material/Box';
// import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
// import Typography from '@mui/material/Typography';
// import axios from 'axios';
// import { message } from 'antd';

// const Login = () => {
//   const navigate = useNavigate()
//   const [data, setData] = useState({
//     name: "",
//     email: "",
//     password: "",
//     type: ""
//   })

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setData({ ...data, [name]: value });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();

//     if (!data?.email || !data?.password) {
//       return alert("Please fill all fields");
//     } else {
//       axios.post('http://localhost:8001/api/user/login', data)
//         .then((res) => {
//           if (res.data.success) {
//             message.success(res.data.message);

//             localStorage.setItem("token", res.data.token);
//             localStorage.setItem("user", JSON.stringify(res.data.user));
//             const isLoggedIn = JSON.parse(localStorage.getItem("user"));

//             switch (isLoggedIn.type) {
//               case "Admin":
//                 navigate("/adminhome");
//                 break;
//               case "Renter":
//                 navigate("/renterhome");
//                 break;
//               case "Owner":
//                 if (isLoggedIn.granted === 'ungranted') {
//                   message.error('Your account is not yet confirmed by the admin');
//                 } else {
//                   navigate("/ownerhome");
//                 }
//                 break;
//               default:
//                 navigate("/login");
//                 break;
//             }
//             setTimeout(()=>{
//               window.location.reload()
//             },1000)
//           } else {
//             message.error(res.data.message);
//           }
//         })
//         .catch((err) => {
//           if (err.response && err.response.status === 401) {
//             alert("User doesn't exist");
//           }
//           navigate("/login");
//         });
//     }
//   };

//   return (
//     <>
//       <Navbar expand="lg" className="bg-body-tertiary">
//         <Container fluid>
//           <Navbar.Brand><h2>RentEase</h2></Navbar.Brand>
//           <Navbar.Toggle aria-controls="navbarScroll" />
//           <Navbar.Collapse id="navbarScroll">
//             <Nav
//               className="me-auto my-2 my-lg-0"
//               style={{ maxHeight: '100px' }}
//               navbarScroll
//             >
//             </Nav>
//             <Nav>
//               <Link to={'/'}>Home</Link>
//               <Link to={'/login'}>Login</Link>
//               <Link to={'/register'}>Register</Link>
//             </Nav>

//           </Navbar.Collapse>
//         </Container>
//       </Navbar>


//       <Container component="main" >
//         <Box
//           sx={{
//             marginTop: 8,
//             marginBottom: 4,
//             display: 'flex',
//             flexDirection: 'column',
//             alignItems: 'center',
//           }}
//         >
//           <Avatar sx={{ bgcolor: 'secondary.main' }}>
//             <LockOutlinedIcon />
//           </Avatar>
//           <Typography component="h1" variant="h5">
//             Sign In
//           </Typography>
//           <Box component="form" onSubmit={handleSubmit} noValidate>

//             <TextField
//               margin="normal"
//               fullWidth
//               id="email"
//               label="Email Address"
//               name="email"
//               value={data.email}
//               onChange={handleChange}
//               autoComplete="email"
//               autoFocus
//             />
//             <TextField
//               margin="normal"
//               fullWidth
//               name="password"
//               value={data.password}
//               onChange={handleChange}
//               label="Password"
//               type="password"
//               id="password"
//               autoComplete="current-password"
//             />
//             <Box mt={2}>
//               <Button
//                 type="submit"
//                 variant="contained"
//                 style={{ width: '200px' }}
//               >
//                 Sign Up
//               </Button>
//             </Box>
//             <Grid container>
//               <Grid item>forgot password?
//                 <Link style={{ color: "red" }} to={'/forgotpassword'} variant="body2">
//                   {" Click here"}
//                 </Link>
//               </Grid>
//               <Grid item>Have an account?
//                 <Link style={{ color: "blue" }} to={'/register'} variant="body2">
//                   {" Sign Up"}
//                 </Link>
//               </Grid>
//             </Grid>
//           </Box>
//         </Box>
//       </Container>
//     </>
//   )
// }

// export default Login

import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Navbar from 'react-bootstrap/Navbar';
import { Container, Nav } from 'react-bootstrap';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import axios from 'axios';
import { message } from 'antd';

const Login = () => {
  const navigate = useNavigate();
  const [data, setData] = useState({
    name: "",
    email: "",
    password: "",
    type: ""
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setData({ ...data, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!data?.email || !data?.password) {
      return alert("Please fill all fields");
    } else {
      axios.post('http://localhost:8001/api/user/login', data)
        .then((res) => {
          if (res.data.success) {
            message.success(res.data.message);

            localStorage.setItem("token", res.data.token);
            localStorage.setItem("user", JSON.stringify(res.data.user));
            const isLoggedIn = JSON.parse(localStorage.getItem("user"));

            switch (isLoggedIn.type) {
              case "Admin":
                navigate("/adminhome");
                break;
              case "Renter":
                navigate("/renterhome");
                break;
              case "Owner":
                if (isLoggedIn.granted === 'ungranted') {
                  message.error('Your account is not yet confirmed by the admin');
                } else {
                  navigate("/ownerhome");
                }
                break;
              default:
                navigate("/login");
                break;
            }
            setTimeout(() => {
              window.location.reload()
            }, 1000);
          } else {
            message.error(res.data.message);
          }
        })
        .catch((err) => {
          if (err.response && err.response.status === 401) {
            alert("User doesn't exist");
          }
          navigate("/login");
        });
    }
  };

  return (
    <>
      <Navbar expand="lg" style={{ backgroundColor: '#2c3e50' }}>
        <Container fluid>
          <Navbar.Brand><h2 style={{ color: '#fff', fontFamily: 'Arial, sans-serif', fontSize: '26px' }}>RentEase</h2></Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav className="me-auto my-2 my-lg-0" style={{ maxHeight: '100px' }} navbarScroll />
            <Nav>
              <Link to={'/'} style={{ color: '#fff', fontSize: '18px', marginRight: '20px', textDecoration: 'none' }}>Home</Link>
              <Link to={'/login'} style={{ color: '#fff', fontSize: '18px', marginRight: '20px', textDecoration: 'none' }}>Login</Link>
              <Link to={'/register'} style={{ color: '#fff', fontSize: '18px', textDecoration: 'none' }}>Register</Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      <Container component="main" maxWidth="xs">
        <Box
          sx={{
            marginTop: 8,
            marginBottom: 4,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            backgroundColor: '#ecf0f1', // light grayish background
            padding: '40px',
            borderRadius: '12px',
            boxShadow: '0 8px 20px rgba(0, 0, 0, 0.1)',
          }}
        >
          <Avatar sx={{ bgcolor: '#3498db' }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5" style={{ fontFamily: 'Roboto, sans-serif', fontWeight: 'bold', color: '#2c3e50', fontSize: '24px' }}>
            Sign In
          </Typography>
          <Box component="form" onSubmit={handleSubmit} noValidate>
            <TextField
              margin="normal"
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              value={data.email}
              onChange={handleChange}
              autoComplete="email"
              autoFocus
              style={{
                marginBottom: '20px',
                backgroundColor: '#fff', // white background for the input
                borderRadius: '8px',
                boxShadow: '0 2px 5px rgba(0, 0, 0, 0.1)',
              }}
            />
            <TextField
              margin="normal"
              fullWidth
              name="password"
              value={data.password}
              onChange={handleChange}
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
              style={{
                marginBottom: '30px',
                backgroundColor: '#fff',
                borderRadius: '8px',
                boxShadow: '0 2px 5px rgba(0, 0, 0, 0.1)',
              }}
            />
            <Box mt={2}>
              <Button
                type="submit"
                variant="contained"
                color="primary"
                style={{
                  width: '100%',
                  backgroundColor: '#3498db',
                  padding: '14px 0',
                  fontSize: '18px',
                  fontWeight: 'bold',
                  textTransform: 'none',
                  borderRadius: '8px',
                }}
              >
                Sign In
              </Button>
            </Box>
            <Grid container>
              <Grid item xs>
                <Link style={{ color: '#e74c3c', fontWeight: 'bold', fontSize: '16px' }} to={'/forgotpassword'} variant="body2">
                  Forgot password?
                </Link>
              </Grid>
              <Grid item>
                <Link style={{ color: '#2980b9', fontWeight: 'bold', fontSize: '16px' }} to={'/register'} variant="body2">
                  Don't have an account? Sign Up
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Container>
    </>
  );
}

export default Login;
