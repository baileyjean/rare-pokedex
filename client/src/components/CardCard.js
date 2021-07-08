import React from 'react'

const CardCard = (props) => {
  return (
    <div
      onClick={() => {
        props.props.history.push(`/card/${props.id}`)
      }}
      // stlye={{ width: '10%' }}
    >
      <img src={props.img} style={{ width: '20vw' }} />
      <div>{props.name}</div>
      <div>
        {props.price} | {props.quality}
      </div>
    </div>
  )
}

export default CardCard
