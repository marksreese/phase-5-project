import { Paper, Typography, CssBaseline } from "@mui/material"
import { useState } from "react"

function Landing() {
  const [user, setUser] = useState("")
  return (
    <Paper elevation={2}>
        <CssBaseline />
        <Typography>
        Welcome to the landing page! Current user: {user}
        </Typography>
    </Paper>
  )
}

export default Landing