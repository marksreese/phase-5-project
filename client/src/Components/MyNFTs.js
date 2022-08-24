import { useState, useEffect, useRef } from "react"
import { Paper, CssBaseline, Grid } from "@mui/material"
import Tile from "./Tile"

function MyNFTs() {

    const [list, setList] = useState([])
    const [favorites, setFavorites] = useState([])
    const dragNumber = useRef(null)

    useEffect(() => {
      setList([1, 2, 3])
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
      if (to==="list") {
        toKeep = favorites.filter(itemNum => itemNum!==num)
        setFavorites(toKeep)
        setList([...list, num])
      }
      else if (to==="favorites") {
        toKeep = list.filter(itemNum => itemNum!==num)
        setList(toKeep)
        setFavorites([...favorites, num])
      }
    }

    const renderList = list.map((num) => 
    (<Tile number={num} key={num} />))

    const renderFavorites = favorites.map((num) => 
    (<Tile number={num} key={num} />))

  return (
    <Paper>
      <CssBaseline/>
      <Grid container spacing={2} justifyContent="center" >
        <Grid item xs={4}
        onDragStart={handleDragStart}
        onDragOver={allowDrag}
        onDrop={(e) => handleDragEnd(e, "list")} >
          Column 1: List
          {renderList}
        </Grid>
        <Grid item xs={4}
        onDragStart={handleDragStart}
        onDragOver={allowDrag}
        onDrop={(e) => handleDragEnd(e, "favorites")} >
          Column 2: Favorites
          {renderFavorites}
        </Grid>
      </Grid>
    </Paper>
  )
}

export default MyNFTs