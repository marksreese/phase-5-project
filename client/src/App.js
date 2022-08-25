import { useEffect, useState } from "react"
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

function App() {
  const darkTheme  = createTheme({
    palette: {
      mode: "dark"
    }
  })

  const [user, setUser] = useState(null)
  const [nfts, setNfts] = useState([])

  useEffect(() => {
    fetch("/users/show").then(resp => {
      if (resp.ok) {
        resp.json().then(user => {
          setUser(user)
        })
      } 
    })
  }, [])

  return (
    <ThemeProvider theme={darkTheme} >
      <NavBar user={user} setUser={setUser} />
      <Routes>
        <Route path="/" element={<Landing user={user} />} />
        <Route path="/login" element={<LoginOrSignup setUser={setUser} />} />
        <Route path="/nfts" element={<MyNFTs user={user} />} />
        <Route path="/quiz" element={<Quiz/>} />
      </Routes>
      {/* <Footer/> */}
    </ThemeProvider>
  )
}

export default App;
