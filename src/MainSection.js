import React from "react";
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import SearchIcon from '@mui/icons-material/Search';
import { useEffect, useState } from "react";
import axios from "axios";
import './style.css';



export default function MainSection() {
    const [img, changeImg] = useState([""])
    useEffect(() => {
        const getImgaes = async () => {
            const config = {
                parmas: {
                    page: 364,
                },
                attributes:{
                    rel:"first"
                }
            }
            const res = await axios.get("https://api.unsplash.com/photos/?client_id=pU8yYlV2cvqWFW2nTOlfEWkgeludhX_dL5WPIhT8gdU", config)
            const urls = res.data.map(arr => arr.urls)
            changeImg(urls)
        }
        getImgaes()
    })
    return (
        <div>
            <Box
                sx={{
                    width: 500,
                    maxWidth: '100%',
                    margin: "8em 10em 0em 25em"
                }}
            >

                <TextField fullWidth label={<SearchIcon />} placeholder="Search high-resolution images" id="fullWidth" autoFocus />
            </Box>
            {img.map(src=>
                <img className="img-container" src={src.thumb}/>
            )}
        </div>

    );
}