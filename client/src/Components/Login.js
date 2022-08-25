import React, { useState } from "react";
import { Button,
  CssBaseline,
  TextField,
  Box,
  Typography,
  Container } from '@mui/material'
import { useNavigate } from "react-router-dom"

function Login({ setUser, handleLogin }) {

  const initialForm = {
    username: "",
    password: "",
  }

  const [form, setForm] = useState(initialForm)
  const [errors, setErrors] = useState(null)
  const nav = useNavigate()

  function handleInput(e) {
    const target = e.target.name;
    const value = e.target.value;
    setForm({ ...form, [target]: value });
  }

  function handleSubmit(e) {
    e.preventDefault();
    fetch("/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json",
      },
      body: JSON.stringify(form),
    }).then(resp => {
      if (resp.ok) {
        resp.json().then(user => {
          setErrors(null)
          setForm(initialForm)
          setUser(user)
          nav("/")
        })
      }
      else {
        resp.json().then(err => {
          setErrors(err)
        })
      }
    })
  }

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <Box sx={{
        mt: 3,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
      }} >
        <Typography component="h1" variant="h5">
          Sign In:
        </Typography>
        <Box component='form' >
          <TextField
            margin="normal"
            name="username"
            type="text"
            label="Username"
            required
            fullWidth
            value={form.username}
            onChange={handleInput}
          />
          <TextField
            margin="normal"
            name="password"
            type="password"
            label="Password"
            required
            fullWidth
            value={form.password}
            onChange={handleInput}
          />
          {errors ?
          <Typography>{errors.error}</Typography>
          :
          null}
          <Button
            onClick={handleSubmit}
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }} >
            Sign In
          </Button>
        </Box>
      </Box>
    </Container>
  )
}

export default Login;
