import { Box, Typography, Paper } from "@mui/material"

function Footer() {
  return (
    <Paper
        sx={{position:"absolute", bottom:"0", width:"100vw"}}
    >
        <Typography>
        This project was made by Mark Reese for Phase 5 of the Flatiron School Software Engineering Bootcamp
        </Typography>
    </Paper>
  )
}

export default Footer