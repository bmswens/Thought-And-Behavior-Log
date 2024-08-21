// React
import React from 'react'
import { Suspense } from 'react'

// MUI
import { LinearProgress } from '@mui/material'

// router
import { Route, Routes } from 'react-router'

// custom
import Home from './Home'

function Content(props) {
    return (
        <Suspense fallback={<LinearProgress />}>
            <Routes>
                <Route
                    path="/"
                    element={<Home />}
                />
            </Routes>
        </Suspense>
    )
}

export default Content