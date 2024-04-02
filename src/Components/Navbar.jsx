import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { Link, Outlet } from 'react-router-dom';
import myColors from '../assets/Util/myColors';
import logo from '../assets/images/logo.png'
import { useEffect, useRef, useState } from 'react';

const Navbar = () => {

    const myref = useRef(null)
    const [myHeight, setMyHeight] = useState(null);
    useEffect(() => {
        setMyHeight(myref.current.clientHeight + 'px')
        console.log(` nav height - ${myref.current.clientHeight + 'px'}`)
        localStorage.setItem('navbarHeight',myref.current.clientHeight + 'px')
    }, [])

    return (
        <>
            <Box zIndex={999} sx={{ flexGrow: 1 }}>
                <AppBar  ref={myref} m={0} p={0} color={'transparent'} position="fixed">
                    <Toolbar p={0} m={0}>
                        {/* <IconButton
                            size="large"
                            edge="start"
                            color="inherit"
                            aria-label="menu"
                            sx={{ mr: 2 }}
                        >
                            <MenuIcon />
                        </IconButton> */}
                        <Box mb={1} mt={1} sx={{
                            flexGrow: 1,
                            height: {
                                xs: '2.5em',
                                md: '3.5em'
                            }
                             
                        }} component="div" >
                            <img alt="OLMS-LOGO" height={'100%'} src={logo}></img>
                        </Box>
                        <Link to='/login'><Button color="inherit">Login</Button></Link>
                        <Link to='/dashboard'><Button color="inherit">Dashboard</Button></Link> 
                    </Toolbar>
                </AppBar>
            </Box>
            <Box sx={{
                height: myHeight
            }} >
                
            </Box>
            <Outlet />
        </>
    )
}


export default Navbar;