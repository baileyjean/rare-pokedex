import React from 'react'

const CardCard = (props) => {
  return (
    <div className="card-card">
      <img src={props.img} style={{ width: '60%' }} />
      <h3>{props.name}</h3>
      <div>
        ${props.price} | PSA Grade: {props.quality}
      </div>
      <button onClick={() => {
        props.props.history.push(`/card/${props.id}`)
      }}><span>Catch Em</span></button>
    </div>
  )
}

export default CardCard
