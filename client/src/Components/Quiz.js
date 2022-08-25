import { Paper,
  CssBaseline,
  Container,
  Box,
  Button } from "@mui/material/"
import { useState, useEffect } from "react"
import Question from "./Question.js"

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

    return (
      <Paper elevation={2}>
        {total}
        <Container>
        <CssBaseline/>
        {loaded ?
        <Box>
        {questions.map(question =>
        <Question question={question} setTotal={setTotal} />)}
        </Box>
        : 
        null
        }
        </Container>
      </Paper>
    )
}

export default Quiz