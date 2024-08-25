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
            <Typography>
                This app is meant to help people track and find patterns in their thinking and actions. Whether you deal with depression, anxiety, intrusive thoughts, or unwanted behaviors (e.g. self-injury, substance use), it can be helpful to recognize patterns in when and where these thoughts and behaviors occur. Additionally, it can be helpful to recognize trends in the consequences of these thoughts and behaviors. Knowing these patterns can aid you in finding ways to change these thoughts and behaviors, such as by avoiding unhealthy situations that contribute to unhelpful thoughts, or finding a healthy replacement for an unwanted behavior to satisfy a need. Finally, in the case of thoughts, it can be helpful to find healthy thoughts to replace illogical or unhelpful negative thoughts. 
            </Typography>
            <Typography>
                This app can be used by anyone who is interested in understanding the relationship between their thoughts, feelings, behaviors, and bodily sensations. The app is designed to be used standalone, however, for best effect, it should be used under a licensed therapist’s direction as part of a psychotherapy regimen, or as a supplement to a reputable self-help program (for example, Dr. Tom likes the book Mind Over Mood by Drs. Dennis Greenberger and Christine Padesky for help with emotions such as sadness, anxiety, and anger). However you use it, though, we hope you find it helpful!
            </Typography>
            <Typography>
                Developed by Brandon Swenson and Dr. Tom Bivona
            </Typography>

        </Stack>
    )
}

export default Home