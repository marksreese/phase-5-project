import { Card } from "@mui/material"

function Tile({ number }) {

  return (
    <Card variant="outlined" sx={{margin:2}} draggable >
      Tile #{number}
    </Card>
  )
}

export default Tile