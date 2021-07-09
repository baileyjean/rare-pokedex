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
  }, [])

  return (
    <div className="card-page">
      <img src={card.image} />
      <h1>{card.name}</h1>
      <div className="card-details">
        <div>Listed Price:  <b>${card.price}</b> | PSA Grade:  <b>{card.quality}</b></div>
      </div>
      <div onClick={() => props.history.push(`/user/${card.user_id}`)}>
        Check out more from this seller!
      </div>
    </div>
  )
}

export default CardPage
