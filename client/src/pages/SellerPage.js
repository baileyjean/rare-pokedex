import React, { useState, useEffect } from 'react'
import SellerCard from '../components/SellerCard'
import axios from 'axios'
import { BASE_URL } from '../globals'
import { Button, Input } from 'react-rainbow-components'

const SellerPage = (props) => {
  const [sellers, setSellers] = useState([])
  const [posting, setPosting] = useState(false)
  const [formInfo, setFormInfo] = useState({
    name: '',
    image: ''
  })

  const getSellers = async () => {
    const res = await axios.get(`${BASE_URL}/users`)
    setSellers(res.data)
  }

  useEffect(() => {
    getSellers()
  }, [])

  const handleSubmit = async () => {
    const res = await axios.post(`${BASE_URL}/users`, formInfo)
    setPosting(false)
  }

  return (
    <div>
      <div
        style={{
          display: `${!posting ? 'flex' : 'none'}`,
          flexDirection: 'column',
          alignItems: 'center'
        }}
      >
        <div onClick={() => setPosting(true)}>ADD SELLER</div>
      </div>
      <div
        style={{
          display: `${posting ? 'flex' : 'none'}`,
          flexDirection: 'column',
          alignItems: 'center'
        }}
      >
        <Input
          label="Name"
          type="text"
          value={formInfo.name}
          onChange={(e) => setFormInfo({ ...formInfo, name: e.target.value })}
        />
        <Input
          label="Image"
          type="text"
          value={formInfo.image}
          onChange={(e) => setFormInfo({ ...formInfo, image: e.target.value })}
        />
        <div>
          <div onClick={() => setPosting(false)}>Cancel</div>
          <div onClick={handleSubmit}>Submit</div>
        </div>
      </div>
      <div>
        <div style={{ display: 'flex', flexWrap: 'wrap' }}>
          {sellers.map((seller) => (
            <SellerCard
              name={seller.name}
              img={seller.image}
              id={seller.id}
              props={props}
            />
          ))}
        </div>
      </div>
    </div>
  )
}

export default SellerPage
