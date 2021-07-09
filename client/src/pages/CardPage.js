import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { BASE_URL } from '../globals'

const CardPage = (props) => {
  const [card, setCard] = useState({})
  const getCardInfo = async () => {
    const res = await axios.get(`${BASE_URL}/cards/${props.match.params.id}`)
    setCard(res.data)
  }

  useEffect(() => {
    getCardInfo()
  })

  return (
    <div>
      <img src={card.image} style={{ width: '60vw' }} />
      <h1>{card.name}</h1>
      <div>Listed Price: ${card.price}</div>
      <div>PSA Grade: {card.quality}</div>
      <div onClick={() => props.history.push(`/user/${card.user_id}`)}>
        Check out more from this seller!
      </div>
    </div>
  )
}

export default CardPage
