import "./index.css"
import React from "react"
import { Router } from "@reach/router"
import ReactDOM from "react-dom"

import Home from "./pages/home"
import { ThemeProvider } from "styled-components"
import { theme } from "../theme"

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <Home path="/" />
      </Router>
    </ThemeProvider>
  )
}

ReactDOM.render(<App />, document.getElementById("root"))
