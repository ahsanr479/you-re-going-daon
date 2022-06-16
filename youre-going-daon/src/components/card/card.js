import React, { useEffect } from 'react'

function Card(props) {
  return (
    <div hidden={props.hiddenFlag}>
        {props.info}
        {console.log("CARD: ", props.hiddenFlag)}
    </div>
  )
}

export default Card;