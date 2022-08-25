import { Box,
    RadioGroup,
    Radio,
    FormControlLabel,
    FormLabel,
    Button } from "@mui/material/"
import { useState } from "react"

function Question({ question, setTotal }) {
  const {id,
    text,
    answer_one,
    answer_two,
    answer_three,
    answer_four,
    correct} = question

  const [duplicate, setDuplicate] = useState(true)

  const handleSelect = e => {
    if (parseInt(e.target.value) === correct){
      setTotal(currentTotal => currentTotal+=1)
      setDuplicate(false)
    }
    else {
      if (!duplicate) {
        setDuplicate(true)
        setTotal(currentTotal => currentTotal-=1)
      }
    }
  }

  return (
    <Box>
      Question #{id}: {text}
      <RadioGroup onChange={handleSelect} >
        <FormControlLabel value="1"
          control={<Radio/>}
          label={answer_one} />
          <FormControlLabel value="2"
          control={<Radio/>}
          label={answer_two} />
          <FormControlLabel value="3"
          control={<Radio/>}
          label={answer_three} />
          <FormControlLabel value="4"
          control={<Radio/>}
          label={answer_four} />
      </RadioGroup>
      <Button>
      </Button>
    </Box>
  )
}

export default Question