// React
import { Button, Stack, Typography } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'


function Home(props) {

    return (
        <Stack spacing={1} sx={{ margin: 1}}>
            <Stack spacing={1} direction="row" justifyContent="center">
                <Link to="/log-thought">
                    <Button
                        variant='contained'
                        fullWidth
                    >
                        Log A Thought
                    </Button>
                </Link>
                <Link to="/log-behavior">
                    <Button
                        variant='contained'
                        fullWidth
                    >
                        Log A Behavior
                    </Button>
                </Link>
                <Link to="/history">
                    <Button
                        variant='contained'
                        fullWidth
                    >
                        View Previous Entries
                    </Button>
                </Link>
            </Stack>
            <Typography variant='h4' align="center">
                Thought and Behavior Log
            </Typography>
            <Typography variant='body1'>
                Why it's important, what it gains etc.
            </Typography>
            <Typography variant='body1'>
            Lorem ipsum odor amet, consectetuer adipiscing elit. Lectus enim potenti potenti laoreet nibh malesuada. Eget rutrum auctor nostra hac finibus curae luctus. Elementum lacus maximus vivamus natoque orci purus consectetur. Praesent pharetra ante consequat natoque ligula velit. Nulla himenaeos leo aliquam congue ridiculus pulvinar venenatis imperdiet torquent. Hendrerit egestas mi sagittis metus sollicitudin elementum mi justo ad. Hendrerit eu maximus aliquet bibendum cras non. Dictum morbi quisque fames quisque; ante pellentesque. Ut bibendum fringilla interdum taciti euismod lacinia vivamus nec non.
            </Typography>
            <Typography variant='body1'>
            Mollis ridiculus justo commodo leo inceptos eros, sociosqu nibh taciti? Malesuada varius semper scelerisque dis suspendisse. Blandit in nunc curabitur at consectetur fermentum felis. Scelerisque eu curae vehicula, nisi cras ante. Integer per egestas cubilia pulvinar vehicula risus augue. Tincidunt dignissim cursus penatibus auctor a. Sapien platea dui auctor molestie nec sollicitudin in donec? Nulla condimentum phasellus suscipit imperdiet ipsum diam augue tincidunt.
            </Typography>
            <Typography variant='body1'>
            Non odio id ipsum proin ridiculus consequat mi nibh maximus. Curae fringilla pellentesque quisque non, metus purus scelerisque. Faucibus odio platea phasellus posuere vivamus himenaeos diam. Aptent penatibus non lorem quis egestas molestie tellus. Curabitur ridiculus cubilia volutpat ligula auctor tempor justo. Euismod litora dis himenaeos; maecenas interdum finibus non. Tristique ex platea erat varius, molestie conubia. Semper semper fames dictum, scelerisque nulla habitasse duis finibus.
            </Typography>
            <Typography variant='h5' align="center">
                Other Resources
            </Typography>
            <ul>
                <li>
                    Link 1
                </li>
                <li>
                    Link 2
                </li>
            </ul>
        </Stack>
    )
}

export default Home