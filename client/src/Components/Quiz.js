import { Paper,
  CssBaseline,
  Container,
  IconButton,
  Typography,
  Button } from "@mui/material/"
import { textTransform } from "@mui/system"
import { useState, useEffect } from "react"
import Question from "./Question.js"

function Quiz() {
  const [questions, setQuestions] = useState(null)
  const [loaded, setLoaded] = useState(false)

  useEffect(() => {
    fetch("/questions").then(resp => resp.json()).then(data => {
      setQuestions(data)
      setLoaded(true)
    })
  }, [])

  const renderQuestions = questions.map(question =>
  <Question question={question} />)

  if (!loaded) {
    return <Typography>Loading...</Typography>
  }
  else {
    return (
      <Paper elevation={2}>
        <Container>
        <CssBaseline/>
        {renderQuestions}
        </Container>
      </Paper>
    )
  }
}

export default Quiz