import { useState } from "react"
import Login from "./Login.js"
import Signup from "./Signup.js"
import { Paper, ToggleButton, ToggleButtonGroup } from "@mui/material"


function LoginOrSignup({ setUser }) {
    const [toggle, setToggle] = useState("login")

    const handleChange = (e, newToggle) => {
        setToggle(newToggle)
        //why does newToggle work this way?
      }

  return (
    <Paper elevation={1} >
        <ToggleButtonGroup
        justifyContent="align-self"
        color="primary"
        value={toggle}
        exclusive
        onChange={handleChange}
        sx={{mt:3}}
        >
        <ToggleButton value="login">Login</ToggleButton>
        <ToggleButton value="signup">Sign Up</ToggleButton>
        </ToggleButtonGroup>
        {toggle==="login" ? <Login setUser={setUser} /> : <Signup setUser={setUser} />}
    </Paper>
  )
}

export default LoginOrSignup