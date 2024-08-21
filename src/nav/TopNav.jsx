// React
import React from 'react'

// MUI
import { AppBar, Box, IconButton, Toolbar, Tooltip } from '@mui/material'

// MUI Icons
import HomeIcon from '@mui/icons-material/Home'

// router
import { Link } from 'react-router-dom'

function TopNav(props) {

    return (
        <Box sx={{flexGrow: 1}}>
            <AppBar position="static">
                <Toolbar>
                    <Link to="/" style={{color: "inherit", textDecoration: "none"}}>
                        <Tooltip
                            title="Home"
                        >
                            <IconButton
                                aria-label='Home'
                            >
                                <HomeIcon fontSize='large' />
                            </IconButton>
                        </Tooltip>
                    </Link>
                </Toolbar>
            </AppBar>
        </Box>
    )
}

export default TopNav