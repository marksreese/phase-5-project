import React, { useState } from "react";
import { Button,
  CssBaseline,
  TextField,
  Grid,
  Box,
  Typography,
  Container } from "@mui/material"

const initialForm = {
  username: "",
  password: "",
}

function Signup({ onCreateOrLog, responseFromAccountOrLogged }) {
  const [form, setForm] = useState(initialForm);
  const [errors, setErrors] = useState(null);

  function handleCreateChange(e) {
    const target = e.target.name;
    const value = e.target.value;
    setForm({ ...form, [target]: value });
  }

  function handleCreateSubmit(e) {
    e.preventDefault();

    fetch("/users", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json",
      },
      body: JSON.stringify(form),
    }).then((r) => {
      if (r.ok) {
        r.json().then((user) => {
          setErrors(null);
          setForm(initialForm);
          onCreateOrLog(user);
        });
      } else {
        r.json().then((err) => {
          setForm(initialForm);
          setErrors(err);
        });
      }
    });
  }

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
        <Box
          sx={{
            mt: 3,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >{!responseFromAccountOrLogged ? (<>
          <Typography component="h1" variant="h5">
            Create An Account:
          </Typography>
            <Box component='form' noValidate onSubmit={handleCreateSubmit} >
              <Grid container spacing={2}>
                <Grid item xs={12}>
                  <TextField
                    name="username"
                    type="text"
                    required
                    fullWidth
                    label="Username"
                    value={form.username}
                    onChange={handleCreateChange}
                  />
                </Grid>
                  {errors ? <p>{errors.errors}</p> : null}
                <Grid item xs={12}>
                  <TextField
                    name="password"
                    type="password"
                    fullWidth
                    required
                    label="Password"
                    value={form.password}
                    onChange={handleCreateChange}
                  />
                </Grid>
              </Grid>
              <Button 
                type="submit" 
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
              >Sign Up
              </Button>
            </Box>
        </>
      ) : (
        <>
          <h2>Account created - Welcome!</h2>
        </>
      )}
      </Box>
    </Container>
  );
}

export default Signup;
