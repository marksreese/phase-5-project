import { Paper,
  Typography,
  CssBaseline,
  Box,
  Button } from "@mui/material"
import { useState, useEffect } from "react"

function Landing({ user }) {
    let username = null
    let tokens = null
    if (user!==null) {
    username=user.username
    tokens=user.tokens
    }

  return (
    <Paper elevation={2}>
      <CssBaseline />
      {(user !== null ?
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
      <Button>
        Exchange an app token for an NFT (placeholder)!
      </Button>
    </Paper>
  )
}

export default Landing

