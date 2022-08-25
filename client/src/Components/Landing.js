import { Paper,
  Typography,
  CssBaseline,
  Box,
  Button } from "@mui/material"
import { useState, useEffect } from "react"

function Landing({ user }) {

  const [tokens, setTokens] = useState(0)
  const [username, setUsername] = useState(null)
  
  useEffect(() => {
    if (user!==null) {
      setUsername(user.username)
      setTokens(user.tokens||0)
      }
  }, [])

  const handleExchange = () => {

  }

  return (
    <Paper elevation={2} >
      <CssBaseline />
      {(username !== null ?
      <Box sx={{}} >
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
      <Button onClick={handleExchange}>
        Exchange an app token for a (placeholder) NFT!
      </Button>
    </Paper>
  )
}

export default Landing

