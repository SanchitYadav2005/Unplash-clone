import React from "react";
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import SearchIcon from '@mui/icons-material/Search';
import { useEffect } from "react";
import axios from "axios";



export default function MainSection() {
    useEffect(()=>{
        const getImgaes = async () =>{
            const res = await axios.get("")
        }
    })
   return (
        <Box
            sx={{
                width: 500,
                maxWidth: '100%',
                margin: "8em 10em 0em 25em"
            }}
        >

            <TextField fullWidth label={<SearchIcon/>} placeholder="Search high-resolution images" id="fullWidth" autoFocus />
        </Box>
    );
}