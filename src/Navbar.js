import React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import Avatar from '@mui/material/Avatar';
import { Tooltip } from '@mui/material';
import Logo from './assets/4691440_unsplash_icon.png'
import './App.css';

function Navbar(){
    const src = 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cmFuZG9tJTIwcGVyc29uJTIwaW1hZ2V8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60'
    return(
        <div>
            <AppBar>
                <Toolbar>
                    <img className='logo' src={Logo} alt="logo"/>
                    <Typography className='logo-heading'>
                        Unplash
                    </Typography>
                    <Tooltip>
                        <IconButton
                             style={{
                                marginLeft: "88%"
                            }}
                        >
                            <Avatar src={src}/>
                        </IconButton>
                    </Tooltip>
                </Toolbar>
            </AppBar>
        </div>
    )
}

export default Navbar