import React from 'react'

const SellerCard = (props) => {
  return (
    <div onClick={() => props.props.history.push(`/user/${props.id}`)}>
      <img src={props.img} style={{ width: '20vw' }} />
      <div>{props.name}</div>
    </div>
  )
}

export default SellerCard
