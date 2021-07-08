import React, { useState, useEffect } from 'react'
import SellerCard from '../components/SellerCard'
import axios from 'axios'
import { Button, Input } from 'react-rainbow-components'

const SellerPage = (props) => {
  const [sellers, setSellers] = useState([])
  const [posting, setPosting] = useState(false)
  const [formInfo, setFormInfo] = useState({
    username: '',
    image: ''
  })

  const getSellers = async () => {
    const res = await axios.get()
    setSellers(res.data)
  }

  console.log(formInfo)

  useEffect(() => {
    // getSellers()
  }, [])

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
          value={formInfo.username}
          onChange={(e) =>
            setFormInfo({ ...formInfo, username: e.target.value })
          }
        />
        <Input
          label="Image"
          type="text"
          value={formInfo.image}
          onChange={(e) => setFormInfo({ ...formInfo, image: e.target.value })}
        />
        <div onClick={() => setPosting(false)}>Cancel</div>
      </div>
      <div>
        {sellers.map((seller) => (
          <SellerCard
            username={seller.username}
            img={seller.image}
            id={seller.id}
          />
        ))}
      </div>
    </div>
  )
}

export default SellerPage
