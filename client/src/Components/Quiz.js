import { Paper,
  CssBaseline,
  Container,
  Box,
  Button,
  FormLabel } from "@mui/material/"
import { useState, useEffect } from "react"
import Question from "./Question.js"
import { useNavigate } from "react-router-dom"

function Quiz() {
  const [questions, setQuestions] = useState(null)
  const [loaded, setLoaded] = useState(false)
  const [total, setTotal] = useState(0)

  useEffect(() => {
    fetch("/questions").then(resp => resp.json()).then(data => {
      setQuestions(data)
      setLoaded(true)
    })
  }, [])

  const handleSubmit = () => {

  }

    return (
      <Paper elevation={2} sx={{pt:2}}>
        <Container>
        <CssBaseline/>
        {loaded ?
        <Box>
        {questions.map(question =>
        <Question question={question} setTotal={setTotal} />)}
        </Box>
        : 
        <FormLabel>
          Loading quiz questions...
        </FormLabel>
        }
        </Container>
        <Container justifyContent="center">
        <FormLabel>
          A perfect score gets you two (2) tokens! 11/14 gets one (1) token, and 8/14 gets half (0.5) of a token.
        </FormLabel>
        <Button onClick={handleSubmit}>
          Submit Quiz! Good luck!
        </Button>
        </Container>
      </Paper>
    )
}

export default Quiz