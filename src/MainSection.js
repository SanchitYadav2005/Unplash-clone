import React from "react";
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import SearchIcon from '@mui/icons-material/Search';



export default function MainSection() {
   return (
        <Box
            sx={{
                width: 500,
                maxWidth: '100%',
                margin: "8em 10em 0em 25em"
            }}
        >

            <TextField fullWidth label={<SearchIcon/>} id="fullWidth" autoFocus />
        </Box>
    );
}