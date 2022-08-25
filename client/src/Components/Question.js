import { Box,
    CssBaseline,
    Toolbar,
    IconButton,
    Typography,
    Button } from "@mui/material/"

function Question({ question }) {
  const {id, text, answer_one, answer_two, answer_three, answer_four, correct} = question

  return (
    <Box>
        Question #{id}:
        {text}
    </Box>
  )
}

export default Question