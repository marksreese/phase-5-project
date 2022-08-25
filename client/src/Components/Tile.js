import { Card } from "@mui/material"

function Tile({ number }) {

  return (
    <Card variant="outlined" sx={{margin:2}} draggable >
      NFT placeholder #{number}
    </Card>
  )
}

export default Tile