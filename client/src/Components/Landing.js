import { Paper, Typography, CssBaseline } from "@mui/material"
import { useState, useEffect } from "react"

function Landing({ user }) {
  const [currentUser, setCurrentUser] = useState(null)
  const [authorized, setAuthorized] = useState(false)

  useEffect(() => {
    fetch("/users/show").then((r) => {
      if (r.ok) {
        r.json().then((user) => {
          setCurrentUser(user);
          setAuthorized(true);
        });
      } else {
        setAuthorized(true);
      }
    });
  }, []);

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