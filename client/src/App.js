import { useState } from "react"
import { Routes, Route } from "react-router-dom"
import NavBar from "./Components/NavBar"
import Footer from "./Components/Footer"
import LoginOrSignup from "./Components/LoginOrSignup"
import Landing from "./Components/Landing"
import MyNFTs from "./Components/MyNFTs"
import Quiz from "./Components/Quiz"
import '@fontsource/roboto/300.css'
import '@fontsource/roboto/400.css'
import '@fontsource/roboto/500.css'
import '@fontsource/roboto/700.css'
import { ThemeProvider, createTheme } from "@mui/material/styles"
// import CssBaseline  from "@mui/material/Cssbaseline"

function App() {
  const darkTheme  = createTheme({
    palette: {
      mode: "dark"
    }
  })
  return (
    <ThemeProvider theme={darkTheme} >
      <NavBar/>
      <Routes>
        <Route path="/" element={<Landing/>} />
        <Route path="/login" element={<LoginOrSignup/>} />
        <Route path="/nfts" element={<MyNFTs/>} />
        <Route path="/quiz" element={<Quiz/>} />
      </Routes>
      <Footer/>
    </ThemeProvider>
  )
}

export default App;
