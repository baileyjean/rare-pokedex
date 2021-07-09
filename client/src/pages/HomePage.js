import React, { useState, useEffect } from 'react'
import CardCard from '../components/CardCard'
import axios from 'axios'
import { BASE_URL } from '../globals'
import { Select } from 'react-rainbow-components'

const HomePage = (props) => {
  const [cards, setCards] = useState([])
  const [psa, setPsa] = useState('All')

  const getCards = async () => {
    if (psa === 'All') {
      const res = await axios.get(`${BASE_URL}/cards`)
      console.log(res.data)
      setCards(res.data)
    } else {
      const res = await axios.get(`${BASE_URL}/cards/quality/${psa}`)
      console.log(res.data)
      setCards(res.data)
    }
  }

  const options = [
    { value: 'All', label: 'All' },
    { value: 1, label: '1' },
    { value: 2, label: '2' },
    { value: 3, label: '3' },
    { value: 4, label: '4' },
    { value: 5, label: '5' },
    { value: 6, label: '6' },
    { value: 7, label: '7' },
    { value: 8, label: '8' },
    { value: 9, label: '9' },
    { value: 10, label: '10' }
  ]

  useEffect(() => {
    getCards()
  }, [])

  return (
    <div>
      <div
        style={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}
      >
        <div>Filter by PSA grade:</div>
        <Select
          options={options}
          value={psa}
          onChange={(e) => setPsa(e.target.value)}
        />
        <div className="card-card">
          <button onClick={getCards}>Filter</button>
        </div>
      </div>
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
    </div>
  )
}

export default HomePage
