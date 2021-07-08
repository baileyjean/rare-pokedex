import React from 'react'

const CardCard = (props) => {
  return (
    <div
      onClick={() => {
        props.history.push(`/card/${props.id}`)
      }}
    >
      <img src={props.img} />
      <div>{props.name}</div>
      <div>
        {props.price} | {props.quality}
      </div>
    </div>
  )
}

export default CardCard
