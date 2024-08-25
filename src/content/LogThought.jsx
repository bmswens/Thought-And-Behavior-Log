// React
import React from 'react'

// MUI
import { Autocomplete, Box, Button, Grid, Slider, Stack, Step, StepLabel, Stepper, TextField, Typography } from '@mui/material'

// datetime
import { DateTimePicker } from '@mui/x-date-pickers'
import { renderTimeViewClock } from '@mui/x-date-pickers/timeViewRenderers'

// custom
import db, { blankThought } from '../db'


function Scene(props) {

    const { thought, setThought } = props
    const { nextStep } = props

    let canContinue = thought.background.length && thought.antecedent.length

    return (
        <>
            <DateTimePicker
                label="Datetime"
                required
                viewRenderers={{
                    hours: renderTimeViewClock,
                    minutes: renderTimeViewClock,
                    seconds: renderTimeViewClock,
                }}
                value={thought.datetime}
                onChange={(value) => setThought({ ...thought, datetime: value })}
            />
            <TextField
                fullWidth
                required
                label="Background"
                multiline
                minRows={4}
                helperText="How were you feeling, what happened that day, what were you doing?"
                value={thought.background}
                onChange={event => setThought({ ...thought, background: event.target.value })}
            />
            <TextField
                fullWidth
                required
                label="Antecedent"
                multiline
                minRows={4}
                helperText="What specifically prompted the thought?"
                value={thought.antecedent}
                onChange={event => setThought({ ...thought, antecedent: event.target.value })}
            />
            <Stack direction="row-reverse">
                <Button
                    variant="contained"
                    disabled={!canContinue}
                    onClick={nextStep}
                >
                    Next
                </Button>
            </Stack>
        </>
    )
}

function Thought(props) {
    const { thought, setThought } = props
    const { previousStep, nextStep, submit } = props

    let canContinue = thought.thought.length && thought.response.length


    return (
        <>
            <TextField
                fullWidth
                required
                label="Thought"
                multiline
                minRows={4}
                value={thought.thought}
                onChange={event => setThought({ ...thought, thought: event.target.value })}
            />
            <TextField
                fullWidth
                required
                label="Response"
                multiline
                minRows={4}
                helperText="How did you respond to the thought? What emotions did you feel? What urges did you have?"
                value={thought.response}
                onChange={event => setThought({ ...thought, response: event.target.value })}
            />
            <Stack direction="row">
                <Button
                    variant="contained"
                    onClick={previousStep}
                >
                    Back
                </Button>
                <Box sx={{ flexGrow: 1 }} />
                <Button
                    variant="contained"
                    disabled={!canContinue}
                    onClick={submit}
                >
                    Submit
                </Button>
                <Box sx={{ flexGrow: 1 }} />
                <Button
                    variant="contained"
                    disabled={!canContinue}
                    onClick={nextStep}
                >
                    Challenge
                </Button>
            </Stack>
        </>
    )
}

function Challenge(props) {
    const { thought, setThought } = props
    const { previousStep, submit } = props

    return (
        <>
            <Grid container spacing={1}>
                <Grid item xs={12}>
                    <Typography variant="h5">
                        Belief
                    </Typography>
                </Grid>
                <Grid item xs={8} md={11}>
                    <Slider
                        value={typeof thought.belief === 'number' ? thought.belief : 0}
                        onChange={(event, value) => setThought({ ...thought, belief: value })}
                    />

                </Grid>
                <Grid item xs={4} md={1} sx={{paddingRight: 1}}>
                    <TextField
                        fullWidth
                        value={thought.belief}
                        onChange={event => setThought({ ...thought, belief: event.target.value })}
                    />
                </Grid>
                <Grid item xs={12}>
                    <Typography variant="caption" >
                        How much do you believe this thought? (0-100 scale)
                    </Typography>
                </Grid>
            </Grid>
            <TextField
                fullWidth
                label="Evidence For"
                multiline
                minRows={3}
                helperText="What evidence do you have in support of the thought?"
                value={thought.evidence}
                onChange={event => setThought({ ...thought, evidence: event.target.value })}
            />
            <TextField
                fullWidth
                label="Evidence Against"
                multiline
                minRows={3}
                helperText="What evidence do you have against the thought?"
                value={thought.refute}
                onChange={event => setThought({ ...thought, refute: event.target.value })}
            />
            <Autocomplete
                renderInput={(params) => <TextField {...params} label="Distortions" helperText="Can you recognize any thought distortions that are relevant to this thought?" />}
                options={[
                    "Black-and-White Thinking",
                    "Demandingness",
                    "Emotional Reasoning",
                    "Frustration Intolerance",
                    "Jumping to Conclusions",
                    "Magnification and Minimization",
                    "Mental Filter",
                    "Mind-Reading",
                    "Overgeneralization",
                    "Personalization",
                    "Catastrophizing"
                ]}
                multiple
                freeSolo
                value={thought.distortions}
                onChange={(event, newValue) => setThought({...thought, distortions: newValue})}
            />
            <TextField
                fullWidth
                label="Replacement Thought"
                multiline
                minRows={2}
                helperText="What is a replacement thought that doesn’t include thought distortions, and is more rational, balanced, and fair?"
                value={thought.replacement}
                onChange={event => setThought({ ...thought, replacement: event.target.value })}
            />
            <Grid container spacing={1}>
                <Grid item xs={12}>
                    <Typography variant="h5">
                        Replacement Thought Belief
                    </Typography>
                </Grid>
                <Grid item xs={8} md={11}>
                    <Slider
                        value={typeof thought.replacement_belief === 'number' ? thought.replacement_belief : 0}
                        onChange={(event, value) => setThought({ ...thought, replacement_belief: value })}
                    />

                </Grid>
                <Grid item xs={4} md={1} sx={{paddingLeft: 3, paddingRight: 1}}>
                    <TextField
                        fullWidth
                        value={thought.replacement_belief}
                        onChange={event => setThought({ ...thought, replacement_belief: event.target.value })}
                    />
                </Grid>
                <Grid item xs={12}>
                    <Typography variant="caption" >
                        How much do you believe this replacement thought? (0-100 scale)
                    </Typography>
                </Grid>
            </Grid>
            <TextField
                fullWidth
                disabled={thought.replacement_belief === 100}
                label="Holdbacks"
                multiline
                minRows={2}
                helperText="If not replacement thought belief is not 100%, what is keeping them you completely believing the replacement thought?"
                value={thought.holdback}
                onChange={event => setThought({ ...thought, holdback: event.target.value })}
            />
            <Stack direction="row">
                <Button
                    variant="contained"
                    onClick={previousStep}
                >
                    Back
                </Button>
                <Box sx={{ flexGrow: 1 }} />
                <Button
                    variant="contained"
                    onClick={submit}
                >
                    Submit
                </Button>
            </Stack>
        </>
    )
}

function LogThought(props) {

    const [currentStep, setCurrentStep] = React.useState(0)
    const [thought, setThought] = React.useState(blankThought)

    function nextStep() {
        setCurrentStep(currentStep + 1)
    }

    function previousStep() {
        setCurrentStep(currentStep - 1)
    }

    async function submit() {
        await db.thoughts.add(thought)
        window.location.replace("/")
    }

    const steps = [
        (
            <Scene
                thought={thought}
                setThought={setThought}
                nextStep={nextStep}
            />
        ),
        (
            <Thought
                thought={thought}
                setThought={setThought}
                previousStep={previousStep}
                nextStep={nextStep}
                submit={submit}
            />
        ),
        (
            <Challenge
                thought={thought}
                setThought={setThought}
                previousStep={previousStep}
                nextStep={nextStep}
                submit={submit}
            />
        )
    ]

    return (
        <Stack spacing={2} sx={{ margin: 1 }}>
            <Stepper activeStep={currentStep}>
                <Step>
                    <StepLabel>
                        Scene
                    </StepLabel>
                </Step>
                <Step>
                    <StepLabel>
                        Thought
                    </StepLabel>
                </Step>
                <Step>
                    <StepLabel>
                        Challenge
                    </StepLabel>
                </Step>
            </Stepper>
            {steps[currentStep]}
        </Stack>
    )

}

export default LogThought