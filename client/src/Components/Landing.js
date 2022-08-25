import { Paper, Typography, CssBaseline, Box } from "@mui/material"
import { useState, useEffect } from "react"

function Landing({ user }) {
    let username = null
    let tokens = null
    if (user!==null){
    username=user.username
    tokens=user.tokens
    console.log(username)
    }

  return (
    <Paper elevation={2}>
      <CssBaseline />
      {(username !== null ?
      <Box>
        <Typography>
          Current user: {username}
        </Typography>
        <Typography>
          Tokens available to redeem: {tokens}
        </Typography>
      </Box>

      :
        <Typography>
          No user currently logged in
        </Typography>
      )}
    </Paper>
  )
}

export default Landing

