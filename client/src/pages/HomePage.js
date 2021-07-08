import React, { useState, useEffect } from 'react'
import CardCard from '../components/CardCard'
import axios from 'axios'

const HomePage = (props) => {
  const [cards, setCards] = useState([])

  const getCards = async () => {
    const res = await axios.get()
    setCards(res.data)
  }

  useEffect(() => {
    // getCards()
  }, [])

  return (
    <div>
      {cards.map((card) => (
        <CardCard
          name={card.name}
          img={card.image}
          price={card.price}
          quality={card.quality}
          id={card.id}
        />
      ))}
    </div>
  )
}

export default HomePage
