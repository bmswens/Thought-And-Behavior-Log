// React
import React from 'react'

// router
import { BrowserRouter, HashRouter } from "react-router-dom"

// MUI
import { ThemeProvider, createTheme } from '@mui/material/styles'
import CssBaseline from '@mui/material/CssBaseline'

// datetime stuff
import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'

// bootstrap
import PWABadge from './PWABadge.jsx'

// custom
import TopNav from './nav/TopNav.jsx'
import Content from './content/Content.jsx'

function Router(props) {
  const deployment = import.meta.env.VITE_APP_DEPLOYMENT
  /* istanbul ignore if: deployment config */
  if (deployment === "github") {
    return (
      <HashRouter>
        {props.children}
      </HashRouter>
    )
  }
  return (
    <BrowserRouter>
      {props.children}
    </BrowserRouter>
  )
}

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
  },
});


function App() {

  return (
    <>
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <Router>
          <ThemeProvider theme={darkTheme}>
            <CssBaseline />
            <TopNav />
            <Content />
          </ThemeProvider>
        </Router>
      </LocalizationProvider>
      <PWABadge />
    </>
  )
}

export default App
