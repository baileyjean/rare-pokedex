import React from 'react'

const SellerCard = (props) => {
  return (
    <div
      className="hover-div"
      onClick={() => props.props.history.push(`/user/${props.id}`)}
    >
      <img src={props.img} className="hover-div-layer_bottom" />
      <div className="hover-div-layer_top">
        <div className="hover-div-text">{props.name}</div>
      </div>
    </div>
  )
}

export default SellerCard
