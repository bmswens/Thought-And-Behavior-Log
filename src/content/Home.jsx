// React
import { Button, Stack } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'


function Home(props) {

    return (
        <Stack spacing={1} sx={{ margin: 1}}>
            <Link to="/add-thought">
                <Button
                    variant='contained'
                    fullWidth
                    sx={{
                        height: "25vh"
                    }}
                >
                    Add A Thought
                </Button>
            </Link>
            <Link to="/add-behavior">
                <Button
                    variant='contained'
                    fullWidth
                    sx={{
                        height: "25vh"
                    }}
                >
                    Add A Behavior
                </Button>
            </Link>
            <Link to="/add-thought">
                <Button
                    variant='contained'
                    fullWidth
                    sx={{
                        height: "25vh"
                    }}
                >
                    View Previous Entries
                </Button>
            </Link>
        </Stack>
    )
}

export default Home