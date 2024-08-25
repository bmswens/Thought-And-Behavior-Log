// React
import React from 'react'
import { Suspense } from 'react'

// MUI
import { LinearProgress } from '@mui/material'

// router
import { Route, Routes } from 'react-router'

// custom
import Home from './Home'
import LogThought from './LogThought'

function Content(props) {
    return (
        <Suspense fallback={<LinearProgress />}>
            <Routes>
                <Route
                    path="/"
                    element={<Home />}
                />
                <Route
                    path="/log-thought"
                    element={<LogThought />}
                />
            </Routes>
        </Suspense>
    )
}

export default Content