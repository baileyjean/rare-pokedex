import React from 'react'

const SellerCard = (props) => {
  return (
    <div onClick={() => props.history.push(`/user/${props.id}`)}>
      <img src={props.img} />
      <div>{props.name}</div>
    </div>
  )
}

export default SellerCard
