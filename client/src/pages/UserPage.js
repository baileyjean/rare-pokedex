import React, { useState } from 'react'
import { Input, Select } from 'react-rainbow-components'

const UserPage = (props) => {
  const [posting, setPosting] = useState(false)
  const [formInfo, setFormInfo] = useState({
    name: '',
    image: '',
    price: '',
    quality: ''
  })

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
        <Input
          label="Name"
          type="text"
          value={formInfo.username}
          onChange={(e) => setFormInfo({ ...formInfo, name: e.target.value })}
        />
        <Input
          label="Image"
          type="text"
          value={formInfo.image}
          onChange={(e) => setFormInfo({ ...formInfo, image: e.target.value })}
        />
        <Input
          label="Price"
          type="integer"
          value={formInfo.image}
          onChange={(e) => setFormInfo({ ...formInfo, price: e.target.value })}
        />
        <Select
          label="PSA Grade"
          options={options}
          onChange={(e) =>
            setFormInfo({ ...formInfo, quality: e.target.value })
          }
        />
        <div onClick={() => setPosting(false)}>Cancel</div>
      </div>
    </div>
  )
}

export default UserPage
