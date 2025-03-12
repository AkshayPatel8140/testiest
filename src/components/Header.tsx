import React from 'react'
import { AppBar, Toolbar, Typography, Button } from '@mui/material';
import * as AI_Academic_AdviserSvg from '../assets/AI_Academic_Adviser.svg';
import Logo from './logo.tsx';


export const Header = () => {
    return (
        <AppBar position="static" sx={{ backgroundColor: '#0A4EB2', paddingY: 1.5 }}>
            <Toolbar>
                <Logo />
                <AI_Academic_AdviserSvg.ReactComponent />
                {/* <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                    App Name
                </Typography> */}
                {/* <Button color="inherit">Login</Button> */}
            </Toolbar>
        </AppBar>
    )
}
