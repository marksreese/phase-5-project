import { useState } from "react"

function MyNFTs() {
    const [list, setList] = useState([])



    const handleDragStart = (e) => {
        e.dataTransfer.setData("text", e.target.id)
    }

    const allowDrag = (e) => {
        e.preventDefault()
    }

    const handleDragEnd = (e) => {
        e.preventDefault()
        const data = e.dataTransfer.getData("text")
        
    }

  return (
    <div>MyNFTs</div>
  )
}

export default MyNFTs