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
// import InputLabel from '@mui/material/InputLabel';
// import MenuItem from '@mui/material/MenuItem';
// import Select from '@mui/material/Select';
// import axios from 'axios';
// import { message } from 'antd';
// const Register = () => {
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
//     e.preventDefault()
//     if (!data?.name || !data?.email || !data?.password||! data?.type ) return alert("Please fill all fields");
//     else {
//       axios.post('http://localhost:8001/api/user/register', data)
//         .then((response) => {
//           if (response.data.success) {
//             message.success(response.data.message);
//             navigate('/login')

//           } else {
//             message.error(response.data.message)
//           }
//         })
//         .catch((error) => {
//           console.log("Error", error);
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
//             Sign up
//           </Typography>
//           <Box component="form" onSubmit={handleSubmit} noValidate>
//             <TextField
//               margin="normal"
//               fullWidth
//               id="name"
//               label="Renter Full Name/Owner Name"
//               name="name"
//               value={data.name}
//               onChange={handleChange}
//               autoComplete="name"
//               autoFocus
//             />
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
//             <InputLabel id="demo-simple-select-label">User Type</InputLabel>
//             <Select
//               labelId="demo-simple-select-label"
//               id="demo-simple-select"
//               name='type'
//               value={data.type}
//               label="type"
//               defaultValue="Select User"
//               onChange={handleChange}
//               style={{ width: '200px' }}
//             >
//               <MenuItem value={'Select User'} disabled>Select User</MenuItem>
//               <MenuItem value={'Renter'}>Renter</MenuItem>
//               <MenuItem value={"Owner"}>Owner</MenuItem>
//             </Select>
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
//               <Grid item>Have an account?
//                 <Link style={{ color: "blue" }} to={'/login'} variant="body2">
//                   {" Sign In"}
//                 </Link>
//               </Grid>
//             </Grid>
//           </Box>
//         </Box>
//       </Container>
//     </>
//   )
// }

// export default Register

// import React, { useState } from 'react';
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
//   const navigate = useNavigate();
//   const [data, setData] = useState({
//     name: "",
//     email: "",
//     password: "",
//     type: ""
//   });

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
//             setTimeout(() => {
//               window.location.reload()
//             }, 1000);
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
//       <Navbar expand="lg" style={{ backgroundColor: '#2c3e50' }}>
//         <Container fluid>
//           <Navbar.Brand><h2 style={{ color: '#fff', fontFamily: 'Arial, sans-serif', fontSize: '26px' }}>RentEase</h2></Navbar.Brand>
//           <Navbar.Toggle aria-controls="navbarScroll" />
//           <Navbar.Collapse id="navbarScroll">
//             <Nav className="me-auto my-2 my-lg-0" style={{ maxHeight: '100px' }} navbarScroll />
//             <Nav>
//               <Link to={'/'} style={{ color: '#fff', fontSize: '18px', marginRight: '20px', textDecoration: 'none' }}>Home</Link>
//               <Link to={'/login'} style={{ color: '#fff', fontSize: '18px', marginRight: '20px', textDecoration: 'none' }}>Login</Link>
//               <Link to={'/register'} style={{ color: '#fff', fontSize: '18px', textDecoration: 'none' }}>Register</Link>
//             </Nav>
//           </Navbar.Collapse>
//         </Container>
//       </Navbar>

//       <Container component="main" maxWidth="xs">
//         <Box
//           sx={{
//             marginTop: 8,
//             marginBottom: 4,
//             display: 'flex',
//             flexDirection: 'column',
//             alignItems: 'center',
//             backgroundColor: '#ecf0f1', // light grayish background
//             padding: '40px',
//             borderRadius: '12px',
//             boxShadow: '0 8px 20px rgba(0, 0, 0, 0.1)',
//           }}
//         >
//           <Avatar sx={{ bgcolor: '#3498db' }}>
//             <LockOutlinedIcon />
//           </Avatar>
//           <Typography component="h1" variant="h5" style={{ fontFamily: 'Roboto, sans-serif', fontWeight: 'bold', color: '#2c3e50', fontSize: '24px' }}>
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
//               style={{
//                 marginBottom: '20px',
//                 backgroundColor: '#fff', // white background for the input
//                 borderRadius: '8px',
//                 boxShadow: '0 2px 5px rgba(0, 0, 0, 0.1)',
//               }}
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
//               style={{
//                 marginBottom: '30px',
//                 backgroundColor: '#fff',
//                 borderRadius: '8px',
//                 boxShadow: '0 2px 5px rgba(0, 0, 0, 0.1)',
//               }}
//             />
//             <Box mt={2}>
//               <Button
//                 type="submit"
//                 variant="contained"
//                 color="primary"
//                 style={{
//                   width: '100%',
//                   backgroundColor: '#3498db',
//                   padding: '14px 0',
//                   fontSize: '18px',
//                   fontWeight: 'bold',
//                   textTransform: 'none',
//                   borderRadius: '8px',
//                 }}
//               >
//                 Sign In
//               </Button>
//             </Box>
//             <Grid container>
//               <Grid item xs>
//                 <Link style={{ color: '#e74c3c', fontWeight: 'bold', fontSize: '16px' }} to={'/forgotpassword'} variant="body2">
//                   Forgot password?
//                 </Link>
//               </Grid>
//               <Grid item>
//                 <Link style={{ color: '#2980b9', fontWeight: 'bold', fontSize: '16px' }} to={'/register'} variant="body2">
//                   Don't have an account? Sign Up
//                 </Link>
//               </Grid>
//             </Grid>
//           </Box>
//         </Box>
//       </Container>
//     </>
//   );
// }

// export default Login;

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
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import axios from 'axios';
import { message } from 'antd';

const Register = () => {
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
    if (!data?.name || !data?.email || !data?.password || !data?.type) return alert("Please fill all fields");
    else {
      axios.post('http://localhost:8001/api/user/register', data)
        .then((response) => {
          if (response.data.success) {
            message.success(response.data.message);
            navigate('/login');
          } else {
            message.error(response.data.message);
          }
        })
        .catch((error) => {
          console.log("Error", error);
        });
    }
  };

  return (
    <>
      <Navbar expand="lg" style={{ backgroundColor: '#2C3E50' }}>
        <Container fluid>
          <Navbar.Brand><h2 style={{ color: '#ECF0F1', fontSize: '1.8rem' }}>RentEase</h2></Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav className="me-auto my-2 my-lg-0" navbarScroll>
              {/* Additional links if needed */}
            </Nav>
            <Nav>
              <Link style={{ color: '#ECF0F1', margin: '0 10px' }} to="/">Home</Link>
              <Link style={{ color: '#ECF0F1', margin: '0 10px' }} to="/login">Login</Link>
              <Link style={{ color: '#ECF0F1', margin: '0 10px' }} to="/register">Register</Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      <Container component="main" style={{ backgroundColor: '#ECF0F1', padding: '40px', borderRadius: '10px', marginTop: '30px', maxWidth: '600px' }}>
        <Box
          sx={{
            marginTop: 8,
            marginBottom: 4,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Avatar sx={{ bgcolor: '#3498DB', width: 60, height: 60 }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5" style={{ fontSize: '1.6rem', color: '#2C3E50' }}>
            Sign up
          </Typography>
          <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
            <TextField
              margin="normal"
              fullWidth
              id="name"
              label="Renter Full Name/Owner Name"
              name="name"
              value={data.name}
              onChange={handleChange}
              autoComplete="name"
              autoFocus
              InputLabelProps={{ style: { fontSize: '1rem' } }}
            />
            <TextField
              margin="normal"
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              value={data.email}
              onChange={handleChange}
              autoComplete="email"
              InputLabelProps={{ style: { fontSize: '1rem' } }}
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
              InputLabelProps={{ style: { fontSize: '1rem' } }}
            />
            <InputLabel id="demo-simple-select-label" style={{ marginTop: '10px', fontSize: '1rem' }}>User Type</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              name="type"
              value={data.type}
              label="User Type"
              onChange={handleChange}
              style={{ width: '200px', marginBottom: '15px' }}
            >
              <MenuItem value={'Select User'} disabled>Select User</MenuItem>
              <MenuItem value={'Renter'}>Renter</MenuItem>
              <MenuItem value={"Owner"}>Owner</MenuItem>
            </Select>
            <Box mt={2}>
              <Button
                type="submit"
                variant="contained"
                sx={{ backgroundColor: '#e6d5fd', width: '200px', fontSize: '1rem' }}
              >
                Sign Up
              </Button>
            </Box>
            <Grid container style={{ marginTop: '10px' }}>
              <Grid item>Have an account?
                <Link style={{ color: '#3498DB', marginLeft: '5px' }} to="/login" variant="body2">
                  {"Sign In"}
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Container>
    </>
  );
}

export default Register;



