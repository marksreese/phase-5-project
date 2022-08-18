import { useState } from "react"
import Login from "./Login.js"
import Signup from "./Signup.js"
import { Paper, ToggleButton, ToggleButtonGroup } from "@mui/material"


function LoginOrSignup() {
    const [toggle, setToggle] = useState("login")

    const handleChange = (e, newToggle) => {
        // console.log(e)
        // console.log(newToggle)
        setToggle(newToggle);
      }

  return (
    <Paper elevation={1} >
        <ToggleButtonGroup
        color="primary"
        value={toggle}
        exclusive
        onChange={handleChange}
        sx={{mt:3}}
        >
        <ToggleButton value="login">Login</ToggleButton>
        <ToggleButton value="signup">Sign Up</ToggleButton>
        </ToggleButtonGroup>
        {toggle==="login" ? <Login/> : <Signup/>}
    </Paper>
  )
}

export default LoginOrSignup