import React, { useState, useEffect } from 'react'
import CardCard from '../components/CardCard'
import axios from 'axios'
import { BASE_URL } from '../globals'

const HomePage = (props) => {
  const [cards, setCards] = useState([])

  const getCards = async () => {
    const res = await axios.get(`${BASE_URL}/cards`)
    console.log(res.data)
    setCards(res.data)
  }

  useEffect(() => {
    getCards()
  }, [])

  return (
    <div className="card-card-card">
      <div style={{ display: 'flex', flexWrap: 'wrap' }}>
        {cards.map((card) => (
          <CardCard
            name={card.name}
            img={card.image}
            price={card.price}
            quality={card.quality}
            id={card.id}
            props={props}
          />
        ))}
      </div>
    </div>
  )
}

export default HomePage
