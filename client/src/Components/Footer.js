import { Typography, Paper } from "@mui/material"

function Footer() {
  return (
    <Paper
        sx={{minHeight: "100vh", width:"100vw", bottom:"0"}}
    >
        <Typography>
        This project was made by Mark Reese for Phase 5 of the Flatiron School Software Engineering Bootcamp
        </Typography>
    </Paper>
  )
}

export default Footer