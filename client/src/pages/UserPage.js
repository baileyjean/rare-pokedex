import React, { useState, useEffect } from 'react'
import { Input, Select } from 'react-rainbow-components'
import CardCard from '../components/CardCard'
import { BASE_URL } from '../globals'
import axios from 'axios'

const UserPage = (props) => {
  const [user, setUser] = useState({})
  const [cards, setCards] = useState([])
  const [posting, setPosting] = useState(false)
  const [formInfo, setFormInfo] = useState({
    name: '',
    image: '',
    price: '',
    quality: 1,
    user_id: props.match.params.id
  })

  const getUserInfo = async () => {
    const res = await axios.get(`${BASE_URL}/users/${props.match.params.id}`)
    setUser(res.data)
    setCards(res.data.cards)
  }

  useEffect(() => {
    getUserInfo()
  }, [])

  const handleSubmit = async () => {
    const res = await axios.post(`${BASE_URL}/cards`, formInfo)
    setCards([...cards, formInfo])
    setPosting(false)
    setFormInfo({
      name: '',
      image: '',
      price: '',
      quality: 1,
      user_id: props.match.params.id
    })
  }

  const options = [
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

  return (
    <div>
      <div>You are viewing {user.name}'s profile</div>
      <img src={user.image} style={{ width: '70vw' }} />
      <div>{user.name}'s cards:</div>
      <div style={{ display: 'flex', flexWrap: 'wrap' }}>
        {cards.map((card, index) => (
          <CardCard
            key={index}
            name={card.name}
            img={card.image}
            price={card.price}
            quality={card.quality}
            id={card.id}
            props={props}
          />
        ))}
      </div>
      <div
        style={{
          display: `${!posting ? 'flex' : 'none'}`,
          flexDirection: 'column',
          alignItems: 'center'
        }}
      >
        <div onClick={() => setPosting(true)}>ADD CARD</div>
      </div>
      <div
        style={{
          display: `${posting ? 'flex' : 'none'}`,
          flexDirection: 'column',
          alignItems: 'center'
        }}
      >
        <div style={{ display: 'flex' }}>
          <Input
            label="Name"
            type="text"
            value={formInfo.name}
            style={{ width: '25vw', marginRight: '10px' }}
            onChange={(e) => setFormInfo({ ...formInfo, name: e.target.value })}
          />
          <Input
            label="Image"
            type="text"
            value={formInfo.image}
            style={{ width: '25vw' }}
            onChange={(e) =>
              setFormInfo({ ...formInfo, image: e.target.value })
            }
          />
        </div>
        <div style={{ display: 'flex' }}>
          <Input
            label="Price"
            type="number"
            value={formInfo.price}
            style={{ width: '25vw', marginRight: '10px' }}
            onChange={(e) =>
              setFormInfo({ ...formInfo, price: e.target.value })
            }
          />
          <Select
            label="PSA Grade"
            options={options}
            value={formInfo.value}
            style={{ alignItems: 'center', width: '25vw' }}
            onChange={(e) =>
              setFormInfo({ ...formInfo, quality: e.target.value })
            }
          />
        </div>
        <div>
          <div onClick={() => setPosting(false)}>Cancel</div>
          <div onClick={handleSubmit}>Submit</div>
        </div>
      </div>
    </div>
  )
}

export default UserPage
