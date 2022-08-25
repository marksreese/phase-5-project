import { useState, useEffect, useRef } from "react"
import { Paper, CssBaseline, Grid } from "@mui/material"
import Tile from "./Tile"

function MyNFTs({ user }) {

    const [tiles, setTiles] = useState([])
    const [pinned, setPinned] = useState([])
    const dragNumber = useRef(null)
    let tokens = 0
    if (user!==null) {
    tokens=user.tokens
    }

    useEffect(() => {
      const arr = []
      for (let i = 1; i <= tokens; i++) {
        arr.push(i)
      }
      setTiles(arr)
    }, [])

    //drag and drop event handlers
    const handleDragStart = (e) => {
      dragNumber.current = parseInt(e.target.childNodes[1].data)
    }

    const allowDrag = (e) => {
      e.preventDefault()
    }

    const handleDragEnd = (e, to) => {
      e.preventDefault()
      const num = dragNumber.current
      let toKeep
      if (to==="tiles") {
        toKeep = pinned.filter(itemNum => itemNum!==num)
        setPinned(toKeep)
        setTiles([...tiles, num])
      }
      else if (to==="pinned") {
        toKeep = tiles.filter(itemNum => itemNum!==num)
        setTiles(toKeep)
        setPinned([...pinned, num])
      }
    }

    const renderTiles = tiles.map((num) => 
    (<Tile number={num} key={num} />))

    const renderPinned = pinned.map((num) => 
    (<Tile number={num} key={num} />))

  return (
    <Paper>
      <CssBaseline/>
      <Grid container spacing={2} justifyContent="center" >
        <Grid item xs={4}
        onDragStart={handleDragStart}
        onDragOver={allowDrag}
        onDrop={(e) => handleDragEnd(e, "tiles")} >
          NFTs
          {renderTiles}
        </Grid>
        <Grid item xs={4}
        onDragStart={handleDragStart}
        onDragOver={allowDrag}
        onDrop={(e) => handleDragEnd(e, "pinned")} >
          Pinned NFTs
          {renderPinned}
        </Grid>
      </Grid>
    </Paper>
  )
}

export default MyNFTs